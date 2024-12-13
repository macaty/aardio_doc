[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.admin 库模块帮助文�?
## process.admin 成员列表

### process.admin.changeMsgFilter(hwnd,msg,flag,filter)

修改拥有管理权限的进程窗口消息过滤规�?

@flag参数默认为\_MSGFLT\_ALLOW,@filter参数可省�?

此函数用法请参考源码与MSDN

### process.admin.enableDropMsg(hwnd,flag)

允许拥有管理权限的窗口接收文件拖放消息，@flag参数默认为\_MSGFLT\_ALLOW�?
�?Windows 8 开始操作系统加强了进程间的安全隔离限制�?
已经不允许通过编程代码修改文件拖放隔离规则，此函数已失败�?
### process.admin.isLeastPrivileges()

进程是否运行于VISTA以后的系统并且无管理权限,

可选用参数@1指定进程句柄�?process,process.popen 对象,

不指定则默认取当前进程权�?
### process.admin.isRunAs()

判断进程是否以管理权限运�?

成功返回true,XP返回 flase,

可选用参数@1指定进程句柄�?process,process.popen 对象,

不指定则默认取当前进程权�?
### process.admin.runas(执行程序路径,启动参数,窗口显示样式,工作目录,窗口句柄,等待选项)

运行应用程序,

如果是vista以后系统请求管理权限,

省略参数@1则默认指定为当前EXE路径,其他参数可�?
### process.admin.runasLeastPrivileges(执行程序路径,启动参数,工作目录,任务�?

管理权限进程内降权以非管理权限启动进�?进程如果已创建则忽略,

注意启动程序路径应明确指�?以斜杠开头或其他绝对路径

启动参数可以是一个数组或文本也可以不指定,任务名不必指�?
### process.admin.runasWait(执行程序路径,启动参数,窗口显示样式,工作目录,窗口句柄)

运行应用程序,并等待进程结�?

如果是vista以后系统请求管理权限,,

省略参数@1则默认指定为当前EXE路径,其他参数可�?
### process.admin.runasWaitInput("字符串参�?, parameters="字符串参�?,showCmd,workDir=",hwnd=0)

运行应用程序,并等待界面激活输入状�?

如果是vista以后系统请求管理权限,,

省略参数@1则默认指定为当前EXE路径,其他参数可�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/admin.md)

