[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.control 库模块帮助文�?
## process 成员列表

### process.control

用于打开控制面板

[Windows相关文档](https://learn.microsoft.com/en-us/windows/win32/shell/executing-control-panel-items)

打开控制面板�?
可指定一个或多个启动参数�?
参数也可以是 process.joinArguments 函数支持的数组或�?
### process.control("desk.cpl",,0)

打开自定义桌面图�?
### process.control("desk.cpl",,2)

显示属�?外观选项

### process.control("ms-settings:")

Win10系统下打开设置�?

[可用设置页面](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/launch-settings-app)

### process.control("ncpa.cpl")

显示所有网络连�?
### process.control("nusrmgr.cpl")

打开系统用户管理

### process.control("userpasswords2")

打开系统用户管理（高级）,

当相于调�?process.execute 函数运行 "Netplwiz.exe"

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/control.md)

