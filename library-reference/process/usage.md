# process.usage 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.usage"></a>
### process.usage 
 进程CPU、内存占用率  
[MSDN文档]( https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa965225%28v%3Dvs.85%29)  
[推荐﻿工具:Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)

<a id="process.usage"></a>
### process.usage() 
 [返回对象:processUsageObject](#processUsageObject)

<a id="process.usage"></a>
### process.usage(进程ID) 
 创建进程CPU、内存占用率获取工具对象,  
参数用法与process完全一样,  
失败返回null

<a id="processUsageObject"></a>
## processUsageObject 成员列表


<a id="processUsageObject.cpu"></a>
### processUsageObject.cpu() 
 返回表示cpu占用率百分比的数值,  
首次调用返回0

<a id="processUsageObject.cpuString"></a>
### processUsageObject.cpuString() 
 返回表示cpu占用率百分比的字符串,  
首次调用返回值无效

<a id="processUsageObject.free"></a>
### processUsageObject.free() 
 释放对象

<a id="processUsageObject.mem"></a>
### processUsageObject.mem() 
 返回表示内存占用率的memCounter对象

<a id="processUsageObject.memString"></a>
### processUsageObject.memString() 
 返回2个表示内存占用的字符串，  
斜杠前为内存﻿工作集大小（Working Set Size），  
后者为提交内存大小（Commit Size）

<a id="processUsageObject.stillActive"></a>
### processUsageObject.stillActive() 
 进程是否在运行
