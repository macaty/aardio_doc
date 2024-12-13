# sys.cpu 库模块帮助文档

<a id="sys.cpu"></a>
## sys.cpu 成员列表


<a id="sys.cpu.getBrand"></a>
### sys.cpu.getBrand() 
 返回CPU商标信息

<a id="sys.cpu.getFrequence"></a>
### sys.cpu.getFrequence() 
 返回表示 CPU 频率的数值,以 MHz 为单位

<a id="sys.cpu.getFrequence"></a>
### sys.cpu.getFrequence(true) 
 返回表示 CPU 频率的友好格式的字符串,  
单位: GHz 小数位数：1

<a id="sys.cpu.getInfo"></a>
### sys.cpu.getInfo 
 

```aardio
sys.cpu.getInfo(1/*查询索引*/,{ INT eax;INT ebx;INT ecx;INT edx } )
```



<a id="sys.cpu.getInfo"></a>
### sys.cpu.getInfo() 
 [返回对象:sysCpuInfoObject](#sysCpuInfoObject)

<a id="sys.cpu.getInfoByWmi"></a>
### sys.cpu.getInfoByWmi() 
 使用 WMI 接口类 win32_processor 查询处理器信息  
参考 https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-processor   
  
[返回对象:sysCpuWmiInfoObject](#sysCpuWmiInfoObject)

<a id="sys.cpu.getMaxExtFunction"></a>
### sys.cpu.getMaxExtFunction() 
 CPU的扩展信息最大查询索引

<a id="sys.cpu.getVender"></a>
### sys.cpu.getVender() 
 返回制造商信息,以及CPU基础信息最大查询索引  
Intel会返回"GenuineIntel",  
AMD会返回"AuthenticAMD"

<a id="sysCpuInfoObject"></a>
## sysCpuInfoObject 成员列表


<a id="sysCpuInfoObject.eax"></a>
### sysCpuInfoObject.eax 
 整数

<a id="sysCpuInfoObject.ebx"></a>
### sysCpuInfoObject.ebx 
 整数

<a id="sysCpuInfoObject.ecx"></a>
### sysCpuInfoObject.ecx 
 整数

<a id="sysCpuInfoObject.edx"></a>
### sysCpuInfoObject.edx 
 整数

<a id="sysCpuWmiInfoObject"></a>
## sysCpuWmiInfoObject 成员列表


<a id="sysCpuWmiInfoObject.?"></a>
### sysCpuWmiInfoObject.? 
 参考 https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-processor

<a id="sysCpuWmiInfoObject.AddressWidth"></a>
### sysCpuWmiInfoObject.AddressWidth 
 CPU 位宽,值为 32 或 64

<a id="sysCpuWmiInfoObject.Architecture"></a>
### sysCpuWmiInfoObject.Architecture 
 指令集架构,x86 值为 0,x64 值为 9

<a id="sysCpuWmiInfoObject.CurrentClockSpeed"></a>
### sysCpuWmiInfoObject.CurrentClockSpeed 
 CPU 当前速度,单位 MHz,  
该值除 1000 可换算为单位 GHz  
使用 math.round 可以限定小数位数

<a id="sysCpuWmiInfoObject.DeviceID"></a>
### sysCpuWmiInfoObject.DeviceID 
 设备 ID

<a id="sysCpuWmiInfoObject.Manufacturer"></a>
### sysCpuWmiInfoObject.Manufacturer 
 生产厂商,例如"GenuineIntel"

<a id="sysCpuWmiInfoObject.MaxClockSpeed"></a>
### sysCpuWmiInfoObject.MaxClockSpeed 
 CPU 最大速度,单位 MHz,  
该值除 1000 可换算为单位 GHz

<a id="sysCpuWmiInfoObject.Name"></a>
### sysCpuWmiInfoObject.Name 
 设备名

<a id="sysCpuWmiInfoObject.NumberOfCores"></a>
### sysCpuWmiInfoObject.NumberOfCores 
 CPU 核心数

<a id="sysCpuWmiInfoObject.NumberOfLogicalProcessors"></a>
### sysCpuWmiInfoObject.NumberOfLogicalProcessors 
 CPU 逻辑核心数
