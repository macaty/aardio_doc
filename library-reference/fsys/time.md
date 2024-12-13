# fsys.time 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.time"></a>
### fsys.time 
 与 ::FILETIME 兼容的结构体，扩展了更多函数。  
用于存储自 1601年1月1日 开始以 100纳秒 为间隔的数值。  
100纳秒 也就是 0.0001毫秒

创建 ::FILETIME 兼容结构体。  
  
fsys.time 对象可传入 tostring 转换为文本格式时间，  
可转换为文本的时间范围与 time 对象相同。  
  
fsys.time 对象传入 tonumber 函数返回存储 64 位无符号时间值的浮点数。  
使用 size64 函数可得到 64位 无符号数表示的时间值。  
该时间值为自 1601年1月1日 开始以 100纳秒 为间隔的数值

<a id="fsys.time"></a>
### fsys.time() 
 [返回对象:fsysTimeObject](#fsysTimeObject)

<a id="fsys.time"></a>
### fsys.time(fileTime,format) 
 创建 FILETIME 结构  
  
@fileTime 参数可选传入以下类型参数：  
1、省略，null 值，注意这不会导致初始化为当前时间。  
2、::FILETIME 结构体或结构体的部分字段  
3、需要复制的 fsys.time 对象  
4、普通数值，应为存储 64位 无符号时间值的浮点数。  
5、存储无符号 64 位整数的 math.size64 对象  
此 64 位整数表示自 1601年1月1日 开始以 100纳秒 为间隔的时间值。  
  
可选用 @format 参数指定格式化串，语法与 time 对象相同。  
注意 format 首字符为 "!" 表示存储 UTC 时间。  
默认使用 UTC 时间格式 "!%c"

<a id="fsysTimeObject"></a>
## fsysTimeObject 成员列表


<a id="fsysTimeObject.copy"></a>
### fsysTimeObject.copy() 
 复制对象

<a id="fsysTimeObject.dwHighDateTime"></a>
### fsysTimeObject.dwHighDateTime 
 时间值高位

<a id="fsysTimeObject.dwLowDateTime"></a>
### fsysTimeObject.dwLowDateTime 
 时间值低位

<a id="fsysTimeObject.format"></a>
### fsysTimeObject.format 
 格式化串，语法与 time 对象相同

<a id="fsysTimeObject.fromDosTime"></a>
### fsysTimeObject.fromDosTime(fatDate,fatTime) 
 DOS 时间格式转换为 FILETIME 格式  
如果省略第二个参数,则取第一个参数的高位作为参数二

<a id="fsysTimeObject.fromSystemTime"></a>
### fsysTimeObject.fromSystemTime(time对象) 
 标准时间对象转换为 FILETIME 对象  
省略参数则调用 time.now 函数获取当前时间  
  
[返回对象:fsysTimeObject](#fsysTimeObject)

<a id="fsysTimeObject.local"></a>
### fsysTimeObject.local() 
 UTC 时间转换为本地时间,返回自身

<a id="fsysTimeObject.local"></a>
### fsysTimeObject.local(true) 
 UTC 时间转换为本地时间,  
不修改自身,返回本地时间副本

<a id="fsysTimeObject.now"></a>
### fsysTimeObject.now() 
 获取当前时间，返回自身。  
  
[返回对象:fsysTimeObject](#fsysTimeObject)

<a id="fsysTimeObject.size64"></a>
### fsysTimeObject.size64() 
 转换为存储无符号 64 位整数的 math.size64 对象。  
此整数表示自 1601年1月1日 开始以 100纳秒 为间隔的时间值

<a id="fsysTimeObject.stamp"></a>
### fsysTimeObject.stamp() 
 以数值类型返回 Unix 时间戳，以毫秒为单位。  
时间戳 0 表示 ISO8601 时间 1970-01-01T00:00:00Z

<a id="fsysTimeObject.stamp"></a>
### fsysTimeObject.stamp(true) 
 以字符串类型返回 Unix 时间戳，以毫秒为单位。  
时间戳 0 表示 ISO8601 时间 1970-01-01T00:00:00Z

<a id="fsysTimeObject.toDosTime"></a>
### fsysTimeObject.toDosTime() 
 成功返回 dosTime,高位,低位

<a id="fsysTimeObject.toGmtTime"></a>
### fsysTimeObject.toGmtTime() 
 返回 time.gmt 对象。  
即 RFC1123 格式时间，HTTP 协议使用该格式。  
如果对象的时间值为 null，此函数会返回当前时间。  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="fsysTimeObject.toSystemTime"></a>
### fsysTimeObject.toSystemTime() 
 返回 time 对象。  
如果对象的时间值为 null，此函数会返回当前时间。  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="fsysTimeObject.utc"></a>
### fsysTimeObject.utc() 
 本地时间转换为 UTC 时间,返回自身

<a id="fsysTimeObject.utc"></a>
### fsysTimeObject.utc(true) 
 本地时间转换为 UTC 时间,  
不修改自身,返回本地时间副本
