[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.mutex 库模块帮助文�?
## process 成员列表

### process.mutex("唯一名称",句柄是否可继�?获取初始所有权)

创建互斥�?
名称不能超过260个字�?名称内的反斜杠自动替换为正斜�?

thread.event,process.mutex,fsys.mmap等命名不能相�?

省略名称创建匿名对象,

参数@2指定句柄是否可被子进程继�?为可选参�?默认为false,

可选用参数@3指定是否获取初始所有权,默认�?false�?
因为可能同时创建互斥体，不建议将参数@3指定�?true

### process.mutex()

[返回对象:mutexObject](#mutexObject)

### process.mutex(互斥体句�?

使用句柄直接打开互斥�?
### process.mutex(互斥体句�?true)

使用句柄直接打开互斥�?
添加析构函数负责释放句柄

## process.mutex 成员列表

互斥�?
可用于进程间同步

创建或打开互斥体对�?

返回对象可传入其他线程使用�?
### process.mutex.lock("互斥体名�?,回调函数)

该函数在多进程中互斥执行

## mutexObject 成员列表

### mutexObject.close()

关闭互斥体句�?
该函数并不关闭互斥体创建的内核对�?
当所有引用内核对象的对象关闭,内核对象自动释放

### mutexObject.conflict

如果互斥体已存在,此属性为真�?
否则为空�?
### mutexObject.release()

线程在处理完共享资源�?

应在离开时调用此函数释放互斥体所有权

### mutexObject.wait()

等待并获取互斥体独占所有权,

可选增加一个参数指定超�?以毫秒为单位

注意此函数应与release函数配对使用

在同一线程中可多次取得所有权,但需要相同次数调用release函数释放

在UI线程中应使用非阻塞的waitOne()函数替代

### mutexObject.waitOne()

等待并获取互斥体独占所有权,

可选增加一个参数指定超�?以毫秒为单位

注意此函数应与release函数配对使用

在同一线程中可多次取得所有权,但需要相同次数调用release函数释放

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/mutex.md)

