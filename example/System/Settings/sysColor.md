[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 系统窗口背景色设置工�?
```aardio aardio
//系统窗口背景�?import win.ui;
import win.ui.ctrl.pick;
/*DSG{{*/
var winform = win.form(text="系统窗口背景色设置工�?;right=742;bottom=472;bgcolor=16777215;border="thin";composited=1;exmode="toolwindow";max=false;min=false)
winform.add(
chkSaveReg={cls="checkbox";text="在注册表中保存窗口背景色设置，以避免重启或注销后失�?;left=20;top=9;right=386;bottom=31;bgcolor=16777215;z=2};
colorPick={cls="pick";text="自定义控�?;left=17;top=47;right=718;bottom=450;z=1}
)
/*}}*/

//颜色改变时触发此事件
winform.colorPick.onColorChange = function(clr){

    if( winform.timerSetSysColor ) winform.clearInterval(winform.timerSetSysColor)
    winform.timerSetSysColor = winform.setTimeout(
        function(){
            var r,g,b,a = color.getRgba(clr);
            var rgb = color.rgb(r,g,b);

            if( a != 0xFF) {
                winform.colorPick.setColor(clr,true);
            }

            ::User32.SetSysColors(1,
                { int elements[] = { 0x5/*_COLOR_WINDOW*/ };  } ,
                {INT colors[] = {rgb};}
            );

            if( winform.chkSaveReg.checked ){
                import win.reg;
                var reg = win.reg("HKEY_CURRENT_USER\Control Panel\Colors");
                reg.setSzValue("Window",string.format("%d %d %d",r,g,b));
                reg.close();
            }
        },300)
 }

//可选指定初始颜�?winform.colorPick.setColor(  ::User32.GetSysColor(0x5/*_COLOR_WINDOW*/),true );

winform.chkSaveReg.oncommand = function(id,event){
    if( winform.chkSaveReg.checked ){
        import win.reg;
        var reg = win.reg("HKEY_CURRENT_USER\Control Panel\Colors");
        reg.setSzValue("Window",string.format("%d %d %d", winform.colorPick.getRgba() ));
        reg.close();
    }
}

import ide;
win.setOwner(winform.hwnd,ide.getMainHwnd());
winform.onClose = function(hwnd,message,wParam,lParam){
    win.setOwner(winform.hwnd,0)
}

winform.show()
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Settings/sysColor.md)

