[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 注册表快速定�?www.aardio.com

```aardio aardio
//注册表操�?- 快速定�?import win.ui;
/*DSG{{*/
var winform = win.form(text="注册表快速定�?www.aardio.com";right=512;bottom=131;)
winform.add(
button={cls="button";text="快速定�?;left=296;top=68;right=440;bottom=101;z=2};
edit={cls="edit";text="HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_TABBED_BROWSING";left=39;top=32;right=482;bottom=61;edge=1;z=1}
)
/*}}*/

import win.reg;
import process;
import win.clip

var str  = win.clip.read();
if( str ? string.startWith(str,"HKEY_") ){
    winform.edit.text = str;
}

winform.button.oncommand = function(id,event){
    var reg = win.reg("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit")
    reg.setSzValue("LastKey",winform.edit.text)
    process.execute("regedit.exe")
}

winform.show()
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Registry/lastkey.md)

