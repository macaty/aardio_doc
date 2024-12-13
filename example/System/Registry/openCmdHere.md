[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 注册表操�?- 右键菜单添加打开命令�?
```aardio aardio
//注册表操�?- 右键菜单添加打开命令�?import win;
import win.reg;
import win.version;

/*
友情提醒：在资源管理器的地址栏直接输�?cmd"后回车，也可以在当前目录打开命令�?*/
if(win.version.isWin10Later){
    var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\OpenCmdHere")
    reg.setSzValue("","在此处打开命令行窗�?)
    reg.setSzValue("Extended","") //在资源管理器按Shift并按右键才出�?
    var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\OpenCmdHere\command")
    reg.setSzValue("","cmd.exe -noexit -command Set-Location -literalPath '%V'")
}

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\runas")
reg.setSzValue("","在此处打开命令行窗�?管理�?")
reg.setSzValue("HasLUAShield","")  //显示盾牌图标
reg.setSzValue("Extended","")  //在资源管理器按Shift并按右键才出�?
var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\runas\command")
reg.setSzValue("",'cmd.exe /s /k pushd \"%V\"');

win.msgbox("已添加菜�?)

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Registry/openCmdHere.md)

