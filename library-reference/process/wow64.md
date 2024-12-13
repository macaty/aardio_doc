[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.wow64 库模块帮助文�?
## process 成员列表

### process.wow64( ,系统命令�?

如果省略第一个参�?并仅指定命令�?则作为系统命令行启动运行

### process.wow64()

[返回对象:processObject](_.html#processObject)

### process.wow64(执行文件,命令行参�?STARTUPINFO)

命令行参数可以是字符串或由多个字符串组成的数�?

数组参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,

STARTUPINFO参数为process.STARTUPINFO 结构�?可选参�?
如果该参数是普通table对象.将自动创建为STARTUPINFO结构�?
### process.wow64(执行文件,命令行参�?更多命令行参�?...)

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,

命令参数最大长度为8191/0x1FFFF个字�?
### process.wow64(进程ID,权限)

打开指定ID的进�?

参数@2可选用一个数值指定请求的权限�?
不指定权限时默认尝试 \_PROCESS\_ALL\_ACCESS 权限,

如果失败则尝试以 \_SYNCHRONIZE 权限打开进程,

\_SYNCHRONIZE权限打开时只能使�?wait,waitOne函数,

非管理权限进程创建管理权限进程时只能以\_SYNCHRONIZE权限打开进程

### process.wow64(进程句柄,负责释放进程句柄)

使用指定的进程句柄创建进程对�?

参数@2为可选参�?默认为true

## process.wow64 成员列表

用于禁用 64 位重定向并运行目标程序，

可在 64 位系统运�?64 位程序，�?32 位系统兼容运�?32 位程序�?
process.wow64 库必须导入后才能使用�?
运行执行文件或关联文档�?
如果省略所有参数则打开当前进程

失败则返�?null,错误信息,错误代码

成功返回进程对象

### process.wow64.execute

禁用 64 位重定向并运行目标程�?成功返回进程ID,

参数详细用法请参考本函数源码以及WINAPI中ShellExecuteEx函数用法

运行UWP应用请使用com.shell.activateApp函数

### process.wow64.execute("字符串参�?, parameters="字符串参�?,operation="open",showCmd,workDir,hwnd)

参数@1为程序路径或系统�?�?
参数@parameters 可以是字符串或字符串数组，用于指定启动参�?

参数@operation 为启动模�?
参数@showCmd使用\_SW\_前缀常量与win.show参数用法相同

参数@workdir为工作目�?
参数@hwnd 为父窗口句柄

### process.wow64.executeEx

禁用 64 位重定向并运行目标程�?
### process.wow64.executeEx("字符串参�?, parameters="字符串参�?,operation="open",showCmd,workDir,hwnd,fmask)

运行应用程序,返回SHELLEXECUTEINFO结构�?

参数@1指定要运行的执行程序路径,

参数@2可用一个字符串或字符串数组指定启动参数,

其他参数详细用法请参考本函数源码以及WINAPI中ShellExecuteEx函数用法

除参数@1以外所有参数可�?
### process.wow64.executeWait

禁用 64 位重定向并运行目标程�?
### process.wow64.executeWait("字符串参�?, parameters="字符串参�?,operation="open",showCmd,workDir=",hwnd=0)

运行应用程序

并等待应用程序关�?
除参数@1以外所有参数可�?
### process.wow64.explore("字符串参�?)

禁用 64 位重定向并使用资源管理器打开目录�?
打开WIN10应用这样�?process.explore("shell:appsFolder\\appPath")

使用 com.shell.eachApp 可列出WIN10所有appPath

### process.wow64.shell

禁用 64 位重定向并运行应用程序，返回 process 进程对象�?
### process.wow64.shell("字符串参�?, parameters="字符串参�?,operation="open",showCmd,workDir,hwnd,fmask)

参数 @1 指定要运行的执行程序路径,

参数 @2 可用一个字符串或字符串数组指定启动参数,

所有参数用法与 process.execute 函数相同�?
关于 @fmask 详细用法请参考本函数源码（一般用不到）�?
除参�?@1 以外所有参数可�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/wow64.md)

