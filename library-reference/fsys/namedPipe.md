# fsys.namedPipe 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.namedPipe"></a>
### fsys.namedPipe("\\.\pipe\pipename",2,2000) 
 参数分别为管道名,最大实例数,超时值  
其他参数就参考源码

<a id="fsys.namedPipe"></a>
### fsys.namedPipe() 
 [返回对象:fsysPipeObject](#fsysPipeObject)

<a id="fsys.namedPipe"></a>
## fsys.namedPipe 成员列表


<a id="fsys.namedPipe.wait"></a>
### fsys.namedPipe.wait("\\.\pipe\pipename","r+") 
 等待并打开可用管道

<a id="fsys.namedPipe.wait"></a>
### fsys.namedPipe.wait() 
 [返回对象:fsysPipeObject](#fsysPipeObject)

<a id="fsysPipeObject"></a>
## fsysPipeObject 成员列表


<a id="fsysPipeObject.close"></a>
### fsysPipeObject.close() 
 关闭文件句柄

<a id="fsysPipeObject.connect"></a>
### fsysPipeObject.connect() 
 等待客户端连接

<a id="fsysPipeObject.disconnect"></a>
### fsysPipeObject.disconnect() 
 断开客户端连接

<a id="fsysPipeObject.flush"></a>
### fsysPipeObject.flush() 
 刷新缓冲区

<a id="fsysPipeObject.getClientComputerName"></a>
### fsysPipeObject.getClientComputerName() 
 返回客户端计算机名，不支持WinXP系统

<a id="fsysPipeObject.getClientProcessId"></a>
### fsysPipeObject.getClientProcessId() 
 返回客户端进程ID

<a id="fsysPipeObject.getClientSessionId"></a>
### fsysPipeObject.getClientSessionId() 
 返回客户端会话ID

<a id="fsysPipeObject.handle"></a>
### fsysPipeObject.handle 
 返回文件句柄

<a id="fsysPipeObject.path"></a>
### fsysPipeObject.path 
 返回文件路径

<a id="fsysPipeObject.peek"></a>
### fsysPipeObject.peek() 
 如果命名管道中有数据则返回数据

<a id="fsysPipeObject.read"></a>
### fsysPipeObject.read() 
 读取一行文本  
返回文本不包含回车换行符

<a id="fsysPipeObject.read"></a>
### fsysPipeObject.read(-1) 
 读取所有内容到文件尾部

<a id="fsysPipeObject.read"></a>
### fsysPipeObject.read({int number} ) 
 参数可以是一个结构体  
不支持多参数

<a id="fsysPipeObject.read"></a>
### fsysPipeObject.read(字节数) 
 读取指定长度的字节  
不支持多参数

<a id="fsysPipeObject.readBuffer"></a>
### fsysPipeObject.readBuffer 
 读取数据到 buffer ,成功返回读取长度,失败返回null

<a id="fsysPipeObject.readBuffer"></a>
### fsysPipeObject.readBuffer(buffer,读取长度) 
 直接读数据到内存  
参数@1可以是 buffer 对象,或内存指针,  
如果是指针则必须指定读取长度,否则长度参数可选  
成功返回读取长度

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek("cur",) 
 移动至相对当前位置的指定偏移量

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek("end") 
 移动指针至结束处  
返回当前位置,返回值大于2GB则为负值,  
获取文件大小推荐使用 size() 函数

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek("end",) 
 移动至相对结束处的指定偏移量

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek("set") 
 移动指针到开始

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek("set",) 
 移动至相对开始处的指定偏移量

<a id="fsysPipeObject.seek"></a>
### fsysPipeObject.seek() 
 得到当前位置

<a id="fsysPipeObject.seteof"></a>
### fsysPipeObject.seteof() 
 设置文件结束

<a id="fsysPipeObject.size"></a>
### fsysPipeObject.size() 
 返回文件大小  
可选参数一指定单位大小(默认自动选择),  
可选用参数二指定小数精度(默认为2)  
返回文件大小,单位大小,单位名("bytes","KB","MB","GB"等)

<a id="fsysPipeObject.size64"></a>
### fsysPipeObject.size64() 
 返回文件大小  
返回值为math.size64长整数对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="fsysPipeObject.write"></a>
### fsysPipeObject.write(字符串) 
 写入字符串  
参数也可以是数值、结构体

<a id="fsysPipeObject.writeBuffer"></a>
### fsysPipeObject.writeBuffer 
 写入缓冲区数据,成功返回写入长度,失败返回null

<a id="fsysPipeObject.writeBuffer"></a>
### fsysPipeObject.writeBuffer(buffer,写入长度) 
 直接写数据到内存  
参数@1可以是 buffer 对象,或内存指针,  
如果是指针则必须指定写入长度,否则长度参数可选  
成功返回写入长度
