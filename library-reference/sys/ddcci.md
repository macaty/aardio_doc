# sys.ddcci 库模块帮助文档

<a id="sys"></a>
## sys 成员列表


<a id="sys.ddcci"></a>
### sys.ddcci() 
 [返回对象:SysDdcciObject](#SysDdcciObject)

<a id="sys.ddcci"></a>
### sys.ddcci(hpm,description) 
 创建显示器控制对象，  
@hpm 为物理显示器句柄,  
@description 为显示器描述，可选参数

<a id="sys.ddcci"></a>
## sys.ddcci 成员列表

DDC/CI（Display Data Channel Command Interface）  
用于控制显示器，不是所有显示器都支持 DDC/CI

创建显示器控制对象

<a id="sys.ddcci.each"></a>
### sys.ddcci.each() 
 

```aardio
for ddcci in sys.ddcci.each() {  
	/*遍历所有物理显示器，  
ddcci 为控制该显示器的 sys.ddcci 对象*/  
}  
  
[返回对象:SysDdcciObject](#SysDdcciObject)
```



<a id="sys.ddcci.getPhysicalMonitors"></a>
### sys.ddcci.getPhysicalMonitors 
 返回所有物理显示器句柄数组

<a id="sys.ddcci.getPhysicalMonitors"></a>
### sys.ddcci.getPhysicalMonitors() 
 返回所有物理显示器句柄数组

<a id="sys.ddcci.getPhysicalMonitors"></a>
### sys.ddcci.getPhysicalMonitors(hMonitor) 
 返回 @hMonitor 指定句柄的显示器指向的物理显示器句柄数组,  
注意参数 @hMonitor 指定显示器句柄，并非物理显示器句柄

<a id="SysDdcciObject"></a>
## SysDdcciObject 成员列表


<a id="SysDdcciObject.capabilities"></a>
### SysDdcciObject.capabilities 
 返回描述显示器支持功能的表对象

<a id="SysDdcciObject.description"></a>
### SysDdcciObject.description 
 显示器描述

<a id="SysDdcciObject.destroy"></a>
### SysDdcciObject.destroy() 
 释放对象，  
如果没有调用此函数，则回收对象时自动调用。

<a id="SysDdcciObject.getBrightness"></a>
### SysDdcciObject.getBrightness() 
 获取亮度，返回3个值：  
当前亮度，最小值，最大值

<a id="SysDdcciObject.getColorTemperature"></a>
### SysDdcciObject.getColorTemperature() 
 获取色温

<a id="SysDdcciObject.getContrast"></a>
### SysDdcciObject.getContrast() 
 获取对比度，返回3个值：  
当前亮度，最小值，最大值

<a id="SysDdcciObject.getFeature"></a>
### SysDdcciObject.getFeature(vcpCode) 
 读取设置值  
@vcpCode 为控制代码

<a id="SysDdcciObject.getInputSource"></a>
### SysDdcciObject.getInputSource() 
 获取输入源

<a id="SysDdcciObject.getPowerMode"></a>
### SysDdcciObject.getPowerMode() 
 获取电源状态

<a id="SysDdcciObject.hasFeature"></a>
### SysDdcciObject.hasFeature(vcpCode) 
 是否支持 @vcpCode 指定的控制代码  
支持则返回包含可设置值的数组,数组可能为空,  
否则返回 null

<a id="SysDdcciObject.reset"></a>
### SysDdcciObject.reset() 
 重置设置

<a id="SysDdcciObject.resetColor"></a>
### SysDdcciObject.resetColor() 
 重置颜色设置

<a id="SysDdcciObject.save"></a>
### SysDdcciObject.save() 
 保存设置

<a id="SysDdcciObject.setBrightness"></a>
### SysDdcciObject.setBrightness(value) 
 设置亮度

<a id="SysDdcciObject.setColorTemperature"></a>
### SysDdcciObject.setColorTemperature(value) 
 设置色温

<a id="SysDdcciObject.setContrast"></a>
### SysDdcciObject.setContrast(value) 
 设置对比度

<a id="SysDdcciObject.setFeature"></a>
### SysDdcciObject.setFeature(vcpCode,value) 
 写入设置值  
@vcpCode 为控制代码,@value 为新的设置值

<a id="SysDdcciObject.setInputSource"></a>
### SysDdcciObject.setInputSource(inputSource) 
 修改输入源,  
@inputSource 用数值指定输入源

<a id="SysDdcciObject.setPowerMode"></a>
### SysDdcciObject.setPowerMode(mode) 
 修改电源状态,  
@mode 为1表示打开屏幕，  
@mode 为 5 或 4 表示关闭屏幕
