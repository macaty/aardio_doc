# sys.monitor 库模块帮助文档

<a id="sys.monitor"></a>
## sys.monitor 成员列表

显示器函数库。  
相关库: com.monitor, sys.display, sys.ddcci 。

<a id="sys.monitor.changeMode"></a>
### sys.monitor.changeMode 
 修改显示器设置

<a id="sys.monitor.changeMode"></a>
### sys.monitor.changeMode(mode,flags,deviceName) 
 修改显示器设置  
参数 @mode 指定 DEVMODE_DISPLAY_DEVICE 结构体，  
 @mode 也可以传一个普通表，仅指定部分需要更新的结构体字段。也可以使用 sys.monitor.eachMode 获取的结构体作为参数 @mode。  
省略  @mode 与 @flags 恢复默认设置。  
  
@flags 可省略,该值可使用 _CDS_ 前缀的常量指定,默认为 0。  
  
@deviceName 指定显示器名，省略则设置默认显示器。  
可用 sys.monitor.eachDevice 获取可用 deviceName  
用法请参考 API 函数 ::User32.ChangeDisplaySettingsExW 的文档

<a id="sys.monitor.eachDevice"></a>
### sys.monitor.eachDevice() 
 [返回对象:DISPLAYDEVICEObject](#DISPLAYDEVICEObject)

<a id="sys.monitor.eachDevice"></a>
### sys.monitor.eachDevice(flags,deviceName) 
 

```aardio
for( dev in sys.monitor.eachDevice(1) ){
	/*如果不指定参数则遍历所有显示适配器。  
如果参数 @2 指定适配置的设备名（ eachMode 或 eachDevice 遍历返回对象的 deviceName 字段），  
则遍历该适配器上的所有显示器设备。  
  
如果指定了参数 @2 ，且参数 @1 值为 1，  
则遍历返回对象的 deviceId2 字段为设备 ID。*/
}
```



<a id="sys.monitor.eachInfo"></a>
### sys.monitor.eachInfo() 
 [返回对象:MONITORINFOObject](#MONITORINFOObject)

<a id="sys.monitor.eachInfo"></a>
### sys.monitor.eachInfo(hdc,rcClip) 
 

```aardio
for( hMonitor,monitorInfo in sys.monitor.eachInfo() ){
	/*用法请参考此函数源码*/
}
```



<a id="sys.monitor.eachMode"></a>
### sys.monitor.eachMode() 
 [返回对象:DEVMODEDISPLAYDEVICEObject](#DEVMODEDISPLAYDEVICEObject)

<a id="sys.monitor.eachMode"></a>
### sys.monitor.eachMode(flags,deviceName) 
 

```aardio
for( devMode in sys.monitor.eachMode() ){
	if( devMode.pelsWidth > (devMode.pelsWidth > devMode.pelsHeight ? 640 : 480) ){
			/*遍历显示器支持的模式，  
所有参考可选，用法请参考此函数源码。  
可通过 sys.monitor.eachDevice 获取可用 deviceName*/
	}
}
```



<a id="sys.monitor.getInfo"></a>
### sys.monitor.getInfo() 
 [返回对象:MONITORINFOObject](#MONITORINFOObject)

<a id="sys.monitor.getInfo"></a>
### sys.monitor.getInfo(hMonitor) 
 参数为显示设备句柄  
返回显示器信息

<a id="sys.monitor.getInfoFromPoint"></a>
### sys.monitor.getInfoFromPoint() 
 [返回对象:MONITORINFOObject](#MONITORINFOObject)

<a id="sys.monitor.getInfoFromPoint"></a>
### sys.monitor.getInfoFromPoint(x,y) 
 获取指定坐标所在显示器信息,\所有参数可选

<a id="sys.monitor.getInfoFromWindow"></a>
### sys.monitor.getInfoFromWindow() 
 [返回对象:MONITORINFOObject](#MONITORINFOObject)

<a id="sys.monitor.getInfoFromWindow"></a>
### sys.monitor.getInfoFromWindow(窗口句柄) 
 获取窗口所在显示器信息,\所有参数可选

<a id="DEVMODEDISPLAYDEVICEObject"></a>
## DEVMODEDISPLAYDEVICEObject 成员列表


<a id="DEVMODEDISPLAYDEVICEObject.bitsPerPel"></a>
### DEVMODEDISPLAYDEVICEObject.bitsPerPel 
 像素位宽

<a id="DEVMODEDISPLAYDEVICEObject.displayFrequency"></a>
### DEVMODEDISPLAYDEVICEObject.displayFrequency 
 刷新频率

<a id="DEVMODEDISPLAYDEVICEObject.displayOrientation"></a>
### DEVMODEDISPLAYDEVICEObject.displayOrientation 
 显示方向,参考_DMDO_ 前缀常量

<a id="DEVMODEDISPLAYDEVICEObject.pelsHeight"></a>
### DEVMODEDISPLAYDEVICEObject.pelsHeight 
 像素高度

<a id="DEVMODEDISPLAYDEVICEObject.pelsWidth"></a>
### DEVMODEDISPLAYDEVICEObject.pelsWidth 
 像素宽度

<a id="DISPLAYDEVICEObject"></a>
## DISPLAYDEVICEObject 成员列表


<a id="DISPLAYDEVICEObject.deviceId"></a>
### DISPLAYDEVICEObject.deviceId 
 设备 ID。  
典型的格式为 \\.\DISPLAY#<VendorID>#<DeviceID>#<InstanceID>

<a id="DISPLAYDEVICEObject.deviceId2"></a>
### DISPLAYDEVICEObject.deviceId2 
 设备 ID。  
仅保留 deviceId 字段的 <VendorID> 部分。  
可通用于 com.monitor 的设备 ID 参数。

<a id="DISPLAYDEVICEObject.deviceKey"></a>
### DISPLAYDEVICEObject.deviceKey 
 设备在注册表中的键路径，主要用于获取和配置设备的详细信息。

<a id="DISPLAYDEVICEObject.deviceName"></a>
### DISPLAYDEVICEObject.deviceName 
 适配器设备或监视器设备的设备名

<a id="DISPLAYDEVICEObject.deviceString"></a>
### DISPLAYDEVICEObject.deviceString 
 显示适配器或显示监视器的描述

<a id="DISPLAYDEVICEObject.stateFlags"></a>
### DISPLAYDEVICEObject.stateFlags 
 设备状态标志。  
_DISPLAY_DEVICE 前缀常量数值或这些数值的组合

<a id="MONITORINFOObject"></a>
## MONITORINFOObject 成员列表


<a id="MONITORINFOObject.deviceName"></a>
### MONITORINFOObject.deviceName 
 仅 sys.monitor.getInfoEx 或 sys.monitor.eachInfo 函数会返回该值

<a id="MONITORINFOObject.eachDevice"></a>
### MONITORINFOObject.eachDevice() 
 

```aardio
for dev in MONITORINFOObject.eachDevice() {  
	/*遍历此适配器上的所有显示器设备。   
则遍历返回对象的 deviceId2 字段为设备 ID。*/  
}  
  
[返回对象:DISPLAYDEVICEObject](#DISPLAYDEVICEObject)
```



<a id="MONITORINFOObject.flags"></a>
### MONITORINFOObject.flags 
 该值为1时为主显示器

<a id="MONITORINFOObject.rcMonitor"></a>
### MONITORINFOObject.rcMonitor 
 显示器的在屏幕坐标系中的矩形  
  
[返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="MONITORINFOObject.rcWork"></a>
### MONITORINFOObject.rcWork 
 显示器的工作区域  
  
[返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)


### 自动完成常量
_CDS_DISABLE_UNSAFE_MODES=0x200  
_CDS_ENABLE_UNSAFE_MODES=0x100  
_CDS_FULLSCREEN=4  
_CDS_GLOBAL=8  
_CDS_NORESET=0x10000000  
_CDS_RESET=0x40000000  
_CDS_RESET_EX=0x20000000  
_CDS_SET_PRIMARY=0x10  
_CDS_TEST=2  
_CDS_UPDATEREGISTRY=1  
_CDS_VIDEOPARAMETERS=0x20  
_DISPLAY_DEVICE_ACTIVE=1  
_DISPLAY_DEVICE_MIRRORING_DRIVER=8  
_DISPLAY_DEVICE_MODESPRUNED=0x8000000  
_DISPLAY_DEVICE_PRIMARY_DEVICE=4  
_DISPLAY_DEVICE_REMOVABLE=0x20  
_DISPLAY_DEVICE_VGA_COMPATIBLE=0x10  
_DMDO_180=2  
_DMDO_270=3  
_DMDO_90=1  
_DMDO_DEFAULT=0  
_EDS_RAWMODE=0x2  
_ENUM_CURRENT_SETTINGS=-1  
_ENUM_REGISTRY_SETTINGS=-2  
_MONITORINFOF_PRIMARY=1  
_MONITOR_DEFAULTTONEAREST=2  
_MONITOR_DEFAULTTONULL=0  
_MONITOR_DEFAULTTOPRIMARY=1  
