# sys.networkIsolation 库模块帮助文档

<a id="sys.networkIsolation"></a>
## sys.networkIsolation 成员列表

用于管理 UWP 应用网络隔离配置,仅适用于 WIN10。

<a id="sys.networkIsolation.enableLoopback"></a>
### sys.networkIsolation.enableLoopback(sidConfigs) 
 允许或禁用指定APP容器是否可以访问本机网络  
参数必须是一个表，键为SID字符串，值指定是否允许访问本机网络,  
仅修改指定SID的配置,  
成功返回true,失败返回false,错误信息

<a id="sys.networkIsolation.exempt"></a>
### sys.networkIsolation.exempt(nameOrSid,disabled) 
 允许或禁用指定APP容器是否可以访问本机网络  
@nameOrSid参数指定应用容器名或SID,  
可选参数@disabled指定是否禁用访问本机网络,  
成功返回true,失败返回false,错误信息,  
如果无需修改直接返回true,  
否则进程不是以管理权限启动时会失败并返回false

<a id="sys.networkIsolation.exemptAs"></a>
### sys.networkIsolation.exemptAs(nameOrSid,disabled) 
 以管理权限允许或禁用指定APP容器是否可以访问本机网络  
@nameOrSid参数指定应用容器名或SID,  
可选参数@disabled指定是否禁用访问本机网络,  
成功返回true,失败返回false,错误信息,  
如果无需修改直接返回true,

<a id="sys.networkIsolation.getAppContainerByName"></a>
### sys.networkIsolation.getAppContainerByName(name) 
 使用容器名查找并返回容器信息

<a id="sys.networkIsolation.getAppContainerConfig"></a>
### sys.networkIsolation.getAppContainerConfig() 
 获取所有APP容器的本机网络配置,  
返回值是一个数组，数组无素请查看此函数源码

<a id="sys.networkIsolation.getAppContainers"></a>
### sys.networkIsolation.getAppContainers() 
 返回包含所有APP容器信息的数组

<a id="sys.networkIsolation.getLoopbackState"></a>
### sys.networkIsolation.getLoopbackState() 
 获取所有APP容器的本机网络配置,  
返回值是一个表，键为SID字符串，值指定是否允许访问本机网络
