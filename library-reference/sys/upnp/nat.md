# sys.upnp.nat 库模块帮助文档

<a id="sys.upnp"></a>
## sys.upnp 成员列表

通用即插即用 Universal Plug and Play

<a id="sys.upnp.nat"></a>
### sys.upnp.nat 
 Network Address Translation 自动端口映射

<a id="sys.upnp.nat"></a>
### sys.upnp.nat() 
 创建 UPnP 自动端口映射管理器,  
如果设备不支持自动端口映射或连接到受限的访客网络则所有函数忽略不执行,  
注意在XP系统上此对象的所有函数也会忽略不执行  
  
[返回对象:sysUpnpNatObject](#sysUpnpNatObject)

<a id="sysUpnpNatMappingPortObject"></a>
## sysUpnpNatMappingPortObject 成员列表


<a id="sysUpnpNatMappingPortObject.description"></a>
### sysUpnpNatMappingPortObject.description 
 描述

<a id="sysUpnpNatMappingPortObject.editDescription"></a>
### sysUpnpNatMappingPortObject.editDescription() 
 设置描述,参数应为字符串

<a id="sysUpnpNatMappingPortObject.editInternalClient"></a>
### sysUpnpNatMappingPortObject.editInternalClient() 
 设置内网IP地址或主机名,参数应为字符串

<a id="sysUpnpNatMappingPortObject.editInternalPort"></a>
### sysUpnpNatMappingPortObject.editInternalPort() 
 设置内网端口,参数应为数值

<a id="sysUpnpNatMappingPortObject.enable"></a>
### sysUpnpNatMappingPortObject.enable() 
 设置是否启用,即修改 enabled 属性的值,  
参数可为 true 或 false

<a id="sysUpnpNatMappingPortObject.enabled"></a>
### sysUpnpNatMappingPortObject.enabled 
 是否启用  
注意这是只读属性,  
修改此属性应当调用 enable 函数

<a id="sysUpnpNatMappingPortObject.externalIPAddress"></a>
### sysUpnpNatMappingPortObject.externalIPAddress 
 外网 IP 地址

<a id="sysUpnpNatMappingPortObject.externalPort"></a>
### sysUpnpNatMappingPortObject.externalPort 
 外网端口

<a id="sysUpnpNatMappingPortObject.internalClient"></a>
### sysUpnpNatMappingPortObject.internalClient 
 内网IP地址或主机名

<a id="sysUpnpNatMappingPortObject.internalPort"></a>
### sysUpnpNatMappingPortObject.internalPort 
 内网端口

<a id="sysUpnpNatMappingPortObject.protocol"></a>
### sysUpnpNatMappingPortObject.protocol 
 网络协议

<a id="sysUpnpNatObject"></a>
## sysUpnpNatObject 成员列表


<a id="sysUpnpNatObject.add"></a>
### sysUpnpNatObject.add 
 添加端口映射,  
成功返回端口映射对象,失败返回null,  
如果指定外网端口已映射到其他主机,则添加该端口会失败,  
如果添加之前已映射到本机的端口则会成功

<a id="sysUpnpNatObject.add"></a>
### sysUpnpNatObject.add() 
 [返回对象:sysUpnpNatMappingPortObject](#sysUpnpNatMappingPortObject)

<a id="sysUpnpNatObject.add"></a>
### sysUpnpNatObject.add(externalPort,protocol,internalPort,internalClient,description) 
 添加端口映射,  
除参数 @1 以外，所有参数都是可选参数,  
全部参数如下：  
@externalPort 外网端口,数值,  
@protocol 网络协议,默认为"TCP"  
@internalPort 内网端口,默认与外端端口相同,数值  
@internalClient 内网地址,默认获取本机联网的网卡IP地址,字符串值  
@description 描述,默认为空字符串

<a id="sysUpnpNatObject.close"></a>
### sysUpnpNatObject.close() 
 关闭对象,一般可省略

<a id="sysUpnpNatObject.count"></a>
### sysUpnpNatObject.count 
 返回端口映射对象总数

<a id="sysUpnpNatObject.each"></a>
### sysUpnpNatObject.each() 
 

```aardio
for index,mappingPort in sysUpnpNatObject.each() {  
	  
}  
  
[返回对象:sysUpnpNatMappingPortObject](#sysUpnpNatMappingPortObject)
```



<a id="sysUpnpNatObject.getTable"></a>
### sysUpnpNatObject.getTable() 
 返回所有端口映射数据为一个数组，  
每个数组成员为包含以下字段的普通表对象：  
protocol 协议,  
description 描述,  
externalPort 外部端口,  
externalIPAddress 外网地址,  
internalPort 内网端口,  
internalClient 内网地址,  
comObject 此映射对象的 COM 对象

<a id="sysUpnpNatObject.item"></a>
### sysUpnpNatObject.item() 
 [返回对象:sysUpnpNatMappingPortObject](#sysUpnpNatMappingPortObject)

<a id="sysUpnpNatObject.item"></a>
### sysUpnpNatObject.item(externalPort,protocol) 
 获取指定的端口映射对象,  
@externalPort 用一个数值指定外网端口,  
@protocol 用一个字符串指定网络协议,省略则为"TCP"

<a id="sysUpnpNatObject.remove"></a>
### sysUpnpNatObject.remove(externalPort,protocol) 
 移除指定的端口映射对象,成功返回 true,  
@externalPort 用一个数值指定外网端口,  
@protocol 用一个字符串指定网络协议,省略则为"TCP"

<a id="sysUpnpNatObject.valid"></a>
### sysUpnpNatObject.valid() 
 检测当前系统以及路由器是否支持 UPnP 自动端口映射,  
注意连接到路由器设置受限的访客网络也可能不支持 UPnP
