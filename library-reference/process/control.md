# process.control 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.control"></a>
### process.control 
 用于打开控制面板  
[Windows相关文档] ( https://learn.microsoft.com/en-us/windows/win32/shell/executing-control-panel-items )

打开控制面板。  
可指定一个或多个启动参数。  
参数也可以是 process.joinArguments 函数支持的数组或表

<a id="process.control"></a>
### process.control("desk.cpl",,0) 
 打开自定义桌面图标

<a id="process.control"></a>
### process.control("desk.cpl",,2) 
 显示属性 外观选项

<a id="process.control"></a>
### process.control("ms-settings:") 
 Win10系统下打开设置页,  
[可用设置页面]( https://docs.microsoft.com/en-us/windows/uwp/launch-resume/launch-settings-app )

<a id="process.control"></a>
### process.control("ncpa.cpl") 
 显示所有网络连接

<a id="process.control"></a>
### process.control("nusrmgr.cpl") 
 打开系统用户管理

<a id="process.control"></a>
### process.control("userpasswords2") 
 打开系统用户管理（高级）,  
当相于调用 process.execute 函数运行 "Netplwiz.exe"
