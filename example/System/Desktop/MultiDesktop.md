[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 多桌�?
```aardio aardio
//多桌�?import win.ui;
import win.util.desktop;
/*DSG{{*/
var winform = win.form(text="aardio form";right=262;bottom=179;)
winform.add(
btnDefault={cls="button";text="切换到默认桌�?;left=53;top=110;right=202;bottom=143;font=LOGFONT(name='Microsoft Sans Serif');z=3};
btnToMyDesktop={cls="button";text="切换到myDesktop";left=53;top=64;right=202;bottom=97;font=LOGFONT(name='Microsoft Sans Serif');z=2};
static={cls="static";text="ctrl + D 试试";left=59;top=27;right=229;bottom=62;color=255;font=LOGFONT(h=-21;name='宋体');transparent=1;z=1}
)
/*}}*/

var virDesktp = win.util.desktop();
virDesktp.create("myDesktop") //创建桌面

hkid = winform.reghotkey(function(id,mod,vk){
    virDesktp.switch( ) //切换桌面
},2/*_MOD_CONTROL*/,'D'#);

winform.btnDefault.oncommand = function(id,event){
    virDesktp.switch("Default" )
}

winform.btnToMyDesktop.oncommand = function(id,event){
    virDesktp.switch("myDesktop" ) //切换桌面
}

winform.show()
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Desktop/MultiDesktop.md)

