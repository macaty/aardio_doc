# sys.networkCards 库模块帮助文档

<a id="sys.networkCards"></a>
## sys.networkCards 成员列表

用于获取网卡硬件信息（含禁用网卡）。  
而 inet.adapter，inet.adapterInfo 可获取网络适配器配置信息。  
  
可使用 com.wmi 查询 Win32_NetworkAdapter 得到网卡信息,  
 com.wmi 查询 Win32_NetworkAdapterConfiguration 得到网络适配器连接配置

<a id="sys.networkCards.each"></a>
### sys.networkCards.each() 
 [返回对象:SysNetworkCardObject](#SysNetworkCardObject)

<a id="sys.networkCards.each"></a>
### sys.networkCards.each(enumerators...) 
 

```aardio
for networkCard in sys.networkCards.each(){  
	/*networkCard 是包含网卡信息的表对象  
@enumerators 参数可用一个字符串数组，或任意个字符串参数指定枚举类型，  
例如 "PCI","USB", 一般不必指定*/  
}
```



<a id="SysNetworkCardObject"></a>
## SysNetworkCardObject 成员列表


<a id="SysNetworkCardObject.adapterName"></a>
### SysNetworkCardObject.adapterName 
 适配器 GUID

<a id="SysNetworkCardObject.description"></a>
### SysNetworkCardObject.description 
 硬件描述

<a id="SysNetworkCardObject.hardwareId"></a>
### SysNetworkCardObject.hardwareId 
 设备 ID

<a id="SysNetworkCardObject.netConnectionId"></a>
### SysNetworkCardObject.netConnectionId 
 网络连接名称

<a id="SysNetworkCardObject.pnpInstanceId"></a>
### SysNetworkCardObject.pnpInstanceId 
 设备实例 ID, 由"设备 ID\实例 ID"组成  
用于 process.devcon 的参数时前面要加 "@" 字符
