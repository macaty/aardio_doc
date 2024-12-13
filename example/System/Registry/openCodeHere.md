[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 注册表操�?- 右键菜单添加打开 VSCode

```aardio aardio
//注册表操�?- 右键菜单添加打开 VSCode
import win;
import win.reg;
import process.code;

var codePath = process.code.path;
if(!codePath){
    win.msgboxErr("未安�?Visual Studio Code");
    return;
}

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\*\shell\VSCode")
reg.setSzValue("","Open with Code")
reg.setSzValue("Icon",codePath+",0")

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\*\shell\VSCode\command")
reg.setSzValue("",`"`+codePath+`" "%1"`)

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\shell\VSCode")
reg.setSzValue("","Open with Code")
reg.setSzValue("Icon",codePath+",0")

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\shell\VSCode\command")
reg.setSzValue("",`"`+codePath+`" "%V"`)

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\VSCode")
reg.setSzValue("","Open with Code")
reg.setSzValue("Icon",codePath+",0")

var reg = win.reg("HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\VSCode\command")
reg.setSzValue("",`"`+codePath+`" "%v."`)

win.msgbox("已添加菜�?)

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Registry/openCodeHere.md)

