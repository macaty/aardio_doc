[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.usage 库模块帮助文�?
## process 成员列表

### process.usage

进程CPU、内存占用率

[MSDN文档](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa965225%28v%3Dvs.85%29)

[推荐﻿工�?Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)

### process.usage()

[返回对象:processUsageObject](#processUsageObject)

### process.usage(进程ID)

创建进程CPU、内存占用率获取工具对象,

参数用法与process完全一�?

失败返回null

## processUsageObject 成员列表

### processUsageObject.cpu()

返回表示cpu占用率百分比的数�?

首次调用返回0

### processUsageObject.cpuString()

返回表示cpu占用率百分比的字符串,

首次调用返回值无�?
### processUsageObject.free()

释放对象

### processUsageObject.mem()

返回表示内存占用率的memCounter对象

### processUsageObject.memString()

返回2个表示内存占用的字符串，

斜杠前为内存﻿工作集大小（Working Set Size），

后者为提交内存大小（Commit Size�?
### processUsageObject.stillActive()

进程是否在运�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/usage.md)

