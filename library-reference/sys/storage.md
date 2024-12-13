# sys.storage 库模块帮助文档

<a id="sys.storage"></a>
## sys.storage 成员列表

存储设备属性  
不需要管理权限。  
相关库：fsys.drives, sys.volume

<a id="sys.storage.getDeviceNumber"></a>
### sys.storage.getDeviceNumber("设备名") 
 参数指定分区设备名,或直接指定盘符  
返回存储设备序号

<a id="sys.storage.getDeviceNumber"></a>
### sys.storage.getDeviceNumber() 
 [返回对象:sysStorageDeviceNumberObject](#sysStorageDeviceNumberObject)

<a id="sys.storage.getDevices"></a>
### sys.storage.getDevices 
 返回硬盘分区

<a id="sys.storage.getDevices"></a>
### sys.storage.getDevices(flat,isUsb) 
 返回硬盘分区,所有参数都可省略。  
  
如果 @flat 参数为 true 则返回分区盘符数组,  
否则返回硬盘分区列表,键为设备序号,值为该设备创建的分区盘符数组。  
注意设备序号不一定是连续的数值。  
  
@isUsb 如果为 true，则仅返回 USB 设备创建的分区

<a id="sys.storage.getUsbDevices"></a>
### sys.storage.getUsbDevices 
 返回 U盘 分区

<a id="sys.storage.getUsbDevices"></a>
### sys.storage.getUsbDevices() 
 返回U盘分区列表，  
键为 U盘 设备序号,值为该 U盘 建立的所有分区盘符数组。  
注意设备序号不一定是连续的数值。

<a id="sys.storage.getUsbDevices"></a>
### sys.storage.getUsbDevices(true) 
 返回 U盘 分区盘符数组

<a id="sys.storage.isUsbDevice"></a>
### sys.storage.isUsbDevice("设备路径) 
 检测是否 U盘,  
参数可指定设备名、分区盘符、存储设备序号等

<a id="sys.storage.queryProperty"></a>
### sys.storage.queryProperty("设备路径) 
 可指定设备名、分区盘符、存储设备序号等  
如果不指定参数则自动获取硬盘设备路径

<a id="sys.storage.queryProperty"></a>
### sys.storage.queryProperty() 
 [返回对象:sysStoragePropertyObject](#sysStoragePropertyObject)

<a id="sysStorageDeviceNumberObject"></a>
## sysStorageDeviceNumberObject 成员列表


<a id="sysStorageDeviceNumberObject.deviceNumber"></a>
### sysStorageDeviceNumberObject.deviceNumber 
 设备序号

<a id="sysStorageDeviceNumberObject.deviceType"></a>
### sysStorageDeviceNumberObject.deviceType 
 类型  
使用 _FILE_DEVICE_ 前缀常量

<a id="sysStorageDeviceNumberObject.partitionNumber"></a>
### sysStorageDeviceNumberObject.partitionNumber 
 分区序号

<a id="sysStoragePropertyObject"></a>
## sysStoragePropertyObject 成员列表


<a id="sysStoragePropertyObject.busType"></a>
### sysStoragePropertyObject.busType 
 总线类型  
使用 _BusType 前缀常量  
例如U盘是 _BusTypeUsb,其值为7

<a id="sysStoragePropertyObject.commandQueueing"></a>
### sysStoragePropertyObject.commandQueueing 
 是否支持命令队列

<a id="sysStoragePropertyObject.deviceType"></a>
### sysStoragePropertyObject.deviceType 
 设备类型

<a id="sysStoragePropertyObject.deviceTypeModifier"></a>
### sysStoragePropertyObject.deviceTypeModifier 
 SCSI-2额外的设备类型

<a id="sysStoragePropertyObject.isUsbDevice"></a>
### sysStoragePropertyObject.isUsbDevice 
 是否 USB 设备

<a id="sysStoragePropertyObject.productId"></a>
### sysStoragePropertyObject.productId 
 产品ID

<a id="sysStoragePropertyObject.productRevision"></a>
### sysStoragePropertyObject.productRevision 
 产品版本

<a id="sysStoragePropertyObject.removableMedia"></a>
### sysStoragePropertyObject.removableMedia 
 是否可移动

<a id="sysStoragePropertyObject.serialNumber"></a>
### sysStoragePropertyObject.serialNumber 
 序列号

<a id="sysStoragePropertyObject.vendorId"></a>
### sysStoragePropertyObject.vendorId 
 厂商ID


### 自动完成常量
_BusType1394=4  
_BusTypeAta=3  
_BusTypeAtapi=2  
_BusTypeFibre=6  
_BusTypeMaxReserved=0x7F  
_BusTypeRAID=8  
_BusTypeScsi=1  
_BusTypeSsa=5  
_BusTypeUnknown=0  
_BusTypeUsb=7  
_PropertyExistsQuery=1  
_PropertyMaskQuery=2  
_PropertyQueryMaxDefined=3  
_PropertyStandardQuery=0  
_StorageAdapterProperty=1  
_StorageDeviceProperty=0  
