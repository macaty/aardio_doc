# sys.info 库模块帮助文档

<a id="sys"></a>
## sys 成员列表


<a id="sys.info"></a>
### sys.info 
 获取 SYSTEM_INFO

<a id="sys.info"></a>
### sys.info() 
 调用 GetSystemInfo() 获取 SYSTEM_INFO结构体   
  
[返回对象:sysInfoObject](#sysInfoObject)

<a id="sysInfoObject"></a>
## sysInfoObject 成员列表


<a id="sysInfoObject.dwActiveProcessorMask"></a>
### sysInfoObject.dwActiveProcessorMask 
 CPU掩码

<a id="sysInfoObject.dwAllocationGranularity"></a>
### sysInfoObject.dwAllocationGranularity 
 已被分配的虚拟内存空间粒度

<a id="sysInfoObject.dwNumberOfProcessors"></a>
### sysInfoObject.dwNumberOfProcessors 
 CPU数目

<a id="sysInfoObject.dwPageSize"></a>
### sysInfoObject.dwPageSize 
 被API函数 VirtualAlloc 使用的页大小

<a id="sysInfoObject.dwProcessorType"></a>
### sysInfoObject.dwProcessorType 
 CPU类型

<a id="sysInfoObject.isX64"></a>
### sysInfoObject.isX64() 
 是否64位处理器

<a id="sysInfoObject.lpMaximumApplicationAddress"></a>
### sysInfoObject.lpMaximumApplicationAddress 
 程序可以访问的最高内存地址

<a id="sysInfoObject.lpMinimumApplicationAddress"></a>
### sysInfoObject.lpMinimumApplicationAddress 
 程序可以访问的最低内存地址

<a id="sysInfoObject.wProcessorArchitecture"></a>
### sysInfoObject.wProcessorArchitecture 
 CPU体系结构

<a id="sysInfoObject.wProcessorLevel"></a>
### sysInfoObject.wProcessorLevel 
 处理器级别

<a id="sysInfoObject.wProcessorRevision"></a>
### sysInfoObject.wProcessorRevision 
 修订版本号
