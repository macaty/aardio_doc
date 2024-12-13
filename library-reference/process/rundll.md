# process.rundll 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.rundll"></a>
### process.rundll 
 运行 DLL 接口支持库  
启动控制面板项也可以使用 process.control

<a id="process.rundll"></a>
### process.rundll("DLL文件") 
 如果只指定一个参数或不指定参数,  
可调用返回对象的成员函数以运行 DLL 的函数  
打开环境变量编辑器示例:  
process.rundll("sysdm.cpl").EditEnvironmentVariables()

<a id="process.rundll"></a>
### process.rundll("DLL文件","回调函数名 参数列表") 
 运行DLL回调函数,回调函数原型:  
 void(addr hwnd,pointer hinst,str lpCmdLine,int nCmdShow)  
参数@1指定dll文件,省略则默认为shell32.dll

<a id="process.rundll"></a>
### process.rundll() 
 返回一个对象用于调用 shell32.dll 函数  
  
[返回对象:processRundllObject](#processRundllObject)

<a id="processRundllObject"></a>
## processRundllObject 成员列表


<a id="processRundllObject.?"></a>
### processRundllObject.? 
 运行 DLL 函数  
函数原型必须为 void(addr hwnd,pointer hinst,str lpCmdLine,int nCmdShow)  
调用时只能用一个或多个字符串指定 lpCmdLine 参数,  
传入多个字符串参数则以逗号为分隔符合并为一个参数

<a id="processRundllObject.Control_RunDLL"></a>
### processRundllObject.Control_RunDLL() 
 运行控制面板命令,参数指定 *.cpl,  
cpl 其实也是 DLL 文件,  
所以也可以用 process.rundll 直接调用其函数,  
例如 process.rundll("sysdm.cpl").EditEnvironmentVariables()

<a id="processRundllObject.OpenAs_RunDLL"></a>
### processRundllObject.OpenAs_RunDLL() 
 shell32.dll 函数用于指定文件打开方式,  
参数指定文件完整路径

<a id="processRundllObject.SHHelpShortcuts_RunDLL"></a>
### processRundllObject.SHHelpShortcuts_RunDLL() 
 可用参数  
AddPrinter 添加新打印机  
PrintersFolder 打开打印机目录  
FontsFolder 打开字体目录
