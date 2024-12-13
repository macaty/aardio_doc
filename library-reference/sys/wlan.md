# sys.wlan 库模块帮助文档

<a id="sys"></a>
## sys 成员列表


<a id="sys.wlan"></a>
### sys.wlan 
 无线网络

<a id="sys.wlan"></a>
### sys.wlan() 
 创建无线网络操作对象  
  
[返回对象:SysWlanObject](#SysWlanObject)

<a id="SysWlanObject"></a>
## SysWlanObject 成员列表


<a id="SysWlanObject.close"></a>
### SysWlanObject.close() 
 关闭对象，  
关闭对象后不能再使用其他函数。  
此函数在对象析构时会自动调用，可重复调用

<a id="SysWlanObject.eachProfile"></a>
### SysWlanObject.eachProfile() 
 

```aardio
for name,guid,description,flags,access,xmlProfile in SysWlanObject.eachProfile(){  
	/*遍历无线网络配置。  
xmlProfile 为包含网络配置的 string.xml 对象。  
name 为配置名  
guid 为网卡 GUID,win.guid 对象  
description为网卡描述  
其他参数请参考源码*/  
}  
  
[返回对象:stringXmlObject](#stringXmlObject)
```



<a id="SysWlanObject.getInterfaces"></a>
### SysWlanObject.getInterfaces() 
 获取所有无线网卡，返回网卡信息数组。  
数组成员为包含网卡 guid,description,state 等字段的结构体对象。  
细节请参考源码与相关 API 文档

<a id="SysWlanObject.getProfileNames"></a>
### SysWlanObject.getProfileNames() 
 获取所有无线网络配置名，返回无线配置信息数组。  
数组成员为包含网卡 name,flags,interfaceGuid,description 等字段的结构体对象。  
细节请参考源码与相关 API 文档
