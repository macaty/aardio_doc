# sys.hd 库模块帮助文档

<a id="sys.hd"></a>
## sys.hd 成员列表

用于获取硬盘序列号  
注意在VISTA以后系统需要管理权限

<a id="sys.hd.getInfo"></a>
### sys.hd.getInfo() 
 读取硬盘IDSECTOR结构信息  
可选在参数中指定硬盘序号,不指定参数时自动获取可用序号,  
  
[返回对象:syshdinfObject](#syshdinfObject)

<a id="syshdinfObject"></a>
## syshdinfObject 成员列表


<a id="syshdinfObject.sFirmwareRev"></a>
### syshdinfObject.sFirmwareRev 
 硬盘硬件版本  
请自行使用string.trim函数去掉首尾空格

<a id="syshdinfObject.sModelNumber"></a>
### syshdinfObject.sModelNumber 
 硬盘型号  
请自行使用string.trim函数去掉首尾空格

<a id="syshdinfObject.sSerialNumber"></a>
### syshdinfObject.sSerialNumber 
 硬盘生产序号  
请自行使用string.trim函数去掉首尾空格

<a id="syshdinfObject.ulTotalAddressableSectors"></a>
### syshdinfObject.ulTotalAddressableSectors 
 

```aardio
ulTotalAddressableSectors
```



<a id="syshdinfObject.wBufferSize"></a>
### syshdinfObject.wBufferSize 
 缓冲大小

<a id="syshdinfObject.wBufferType"></a>
### syshdinfObject.wBufferType 
 缓冲类型

<a id="syshdinfObject.wCapabilities"></a>
### syshdinfObject.wCapabilities 
 支持功能  
不同的二进制位表示硬盘是否支持指定功能

<a id="syshdinfObject.wGenConfig"></a>
### syshdinfObject.wGenConfig 
 基本信息字

<a id="syshdinfObject.wNumCyls"></a>
### syshdinfObject.wNumCyls 
 柱面数

<a id="syshdinfObject.wNumHeads"></a>
### syshdinfObject.wNumHeads 
 磁头数

<a id="syshdinfObject.wNumSectorsPerTrack"></a>
### syshdinfObject.wNumSectorsPerTrack 
 每磁道扇区数

<a id="syshdinfObject.wReserved2"></a>
### syshdinfObject.wReserved2 
 保留

<a id="syshdinfObject.wUltraDMA"></a>
### syshdinfObject.wUltraDMA 
 Ultra DMA支持能力
