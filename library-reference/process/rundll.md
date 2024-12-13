[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.rundll 库模块帮助文�?
## process 成员列表

### process.rundll

运行 DLL 接口支持�?
启动控制面板项也可以使用 process.control

### process.rundll("DLL文件")

如果只指定一个参数或不指定参�?

可调用返回对象的成员函数以运�?DLL 的函�?
打开环境变量编辑器示�?

process.rundll("sysdm.cpl").EditEnvironmentVariables()

### process.rundll("DLL文件","回调函数�?参数列表")

运行DLL回调函数,回调函数原型:

void(addr hwnd,pointer hinst,str lpCmdLine,int nCmdShow)

参数@1指定dll文件,省略则默认为shell32.dll

### process.rundll()

返回一个对象用于调�?shell32.dll 函数

[返回对象:processRundllObject](#processRundllObject)

## processRundllObject 成员列表

### processRundllObject.?

运行 DLL 函数

函数原型必须�?void(addr hwnd,pointer hinst,str lpCmdLine,int nCmdShow)

调用时只能用一个或多个字符串指�?lpCmdLine 参数,

传入多个字符串参数则以逗号为分隔符合并为一个参�?
### processRundllObject.Control\_RunDLL()

运行控制面板命令,参数指定 \*.cpl,

cpl 其实也是 DLL 文件,

所以也可以�?process.rundll 直接调用其函�?

例如 process.rundll("sysdm.cpl").EditEnvironmentVariables()

### processRundllObject.OpenAs\_RunDLL()

shell32.dll 函数用于指定文件打开方式,

参数指定文件完整路径

### processRundllObject.SHHelpShortcuts\_RunDLL()

可用参数

AddPrinter 添加新打印机

PrintersFolder 打开打印机目�?
FontsFolder 打开字体目录

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/rundll.md)

