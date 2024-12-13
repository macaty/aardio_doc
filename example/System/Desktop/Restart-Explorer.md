[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: RUNAS// 修复桌面图标

```aardio aardio
//RUNAS// 修复桌面图标

import fsys;
import process;

//修复桌面图标空白
var explorerPath = process.kill("explorer.exe")
if( explorerPath ) {
    fsys.delete(io.appData("iconcache.db"));
    process.execute(explorerPath);

    ::Shell32.SHChangeNotify(0x8000000/*_SHCNE_ASSOCCHANGED*/,0,0,0);

    //刷新文件属�?    //::Shell32.SHChangeNotifyW(0x800/*_SHCNE_ATTRIBUTES*/,5/*_SHCNF_srcPath*/,string.toUtf16("文件路径"),0);
}

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Desktop/Restart-Explorer.md)

