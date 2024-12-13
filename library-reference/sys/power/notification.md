# sys.power.notification 库模块帮助文档

<a id="sys.power"></a>
## sys.power 成员列表


<a id="sys.power.notification"></a>
### sys.power.notification 
 用于注册接收电源设置或状态变更事件的通知窗体

注册接收电源设置或状态变更事件的通知窗口，  
相关文档： https://docs.microsoft.com/en-us/windows/win32/power/power-setting-guids

<a id="sys.power.notification"></a>
### sys.power.notification() 
 [返回对象:sysPowerNotificationObject](#sysPowerNotificationObject)

<a id="sys.power.notification"></a>
### sys.power.notification(winform,guid,dataStruct) 
 参数 @winform 必须指定父窗口,  
参数 @guid 可用字符串或 win.guid 对象指定事件 GUID，  
可选用参数 @dataStruct 指定解析回调参数值的结构体。  
如果结构体包含 value 字段，则回调参数值为 value 字段值。  
不指定 @dataStruct 则默认为 {INT value}

<a id="sysPowerNotificationObject"></a>
## sysPowerNotificationObject 成员列表


<a id="sysPowerNotificationObject.onPowerResuming"></a>
### sysPowerNotificationObject.onPowerResuming 
 

```aardio
onPowerResuming = function(automatic){
	/*自低耗电恢复触发此事件，  
系统自动恢复则 automatic 参数为 true，  
用户操作恢复则在数为 false*/
}
```



<a id="sysPowerNotificationObject.onPowerSettingChange"></a>
### sysPowerNotificationObject.onPowerSettingChange 
 

```aardio
onPowerSettingChange = function(guid,data){
	/*电源设置或设置状态变更，  
参数为 guid 为设置 GUID，  
data 为参数值*/  
}
```



<a id="sysPowerNotificationObject.onPowerStatusChange"></a>
### sysPowerNotificationObject.onPowerStatusChange 
 

```aardio
onPowerStatusChange = function(systemPowerStatus){
	/*电源状态变更，  
参数为 SYSTEM_POWER_STATUS 结构体，  
请参考该结构体相关资料*/  
}
```


