# process.mutex 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.mutex"></a>
### process.mutex("唯一名称",句柄是否可继承,获取初始所有权) 
 创建互斥体  
名称不能超过260个字符,名称内的反斜杠自动替换为正斜杠,  
thread.event,process.mutex,fsys.mmap等命名不能相同,  
省略名称创建匿名对象,  
参数@2指定句柄是否可被子进程继承,为可选参数,默认为false,  
可选用参数@3指定是否获取初始所有权,默认为 false，  
因为可能同时创建互斥体，不建议将参数@3指定为 true

<a id="process.mutex"></a>
### process.mutex() 
 [返回对象:mutexObject](#mutexObject)

<a id="process.mutex"></a>
### process.mutex(互斥体句柄) 
 使用句柄直接打开互斥体

<a id="process.mutex"></a>
### process.mutex(互斥体句柄,true) 
 使用句柄直接打开互斥体  
添加析构函数负责释放句柄

<a id="process.mutex"></a>
## process.mutex 成员列表

互斥体  
可用于进程间同步

创建或打开互斥体对象,  
返回对象可传入其他线程使用。

<a id="process.mutex.lock"></a>
### process.mutex.lock("互斥体名称",回调函数) 
 该函数在多进程中互斥执行

<a id="mutexObject"></a>
## mutexObject 成员列表


<a id="mutexObject.close"></a>
### mutexObject.close() 
 关闭互斥体句柄  
该函数并不关闭互斥体创建的内核对象  
当所有引用内核对象的对象关闭,内核对象自动释放

<a id="mutexObject.conflict"></a>
### mutexObject.conflict 
 如果互斥体已存在,此属性为真值  
否则为空值

<a id="mutexObject.release"></a>
### mutexObject.release() 
 线程在处理完共享资源后,  
应在离开时调用此函数释放互斥体所有权

<a id="mutexObject.wait"></a>
### mutexObject.wait() 
 等待并获取互斥体独占所有权,  
可选增加一个参数指定超时,以毫秒为单位  
注意此函数应与release函数配对使用  
在同一线程中可多次取得所有权,但需要相同次数调用release函数释放  
在UI线程中应使用非阻塞的waitOne()函数替代

<a id="mutexObject.waitOne"></a>
### mutexObject.waitOne() 
 等待并获取互斥体独占所有权,  
可选增加一个参数指定超时,以毫秒为单位  
注意此函数应与release函数配对使用  
在同一线程中可多次取得所有权,但需要相同次数调用release函数释放
