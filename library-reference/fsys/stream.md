# fsys.stream 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.stream"></a>
### fsys.stream 
 文件流对象  
兼容IStream,ISequentialStream接口

创建文件流对象,返回对象可传入其他线程使用。

<a id="fsys.stream"></a>
### fsys.stream("文件路径","a") 
 只写追加模式打开文件流,创建新文件保留原文件

<a id="fsys.stream"></a>
### fsys.stream("文件路径","a+") 
 读写追加模式打开文件流,创建新文件保留原文件  
注意流对象总是以二进制模式读写，不需要添加b标记

<a id="fsys.stream"></a>
### fsys.stream("文件路径","r+") 
 读写模式打开文件流,文件必须存在  
注意流对象总是以二进制模式读写，不需要添加b标记

<a id="fsys.stream"></a>
### fsys.stream("文件路径","w") 
 只写模式打开文件流,创建新文件清空原文件  
注意流对象总是以二进制模式读写，不需要添加b标记

<a id="fsys.stream"></a>
### fsys.stream("文件路径","w+") 
 读写模式打开文件流,创建新文件清空原文件  
注意流对象总是以二进制模式读写，不需要添加b标记

<a id="fsys.stream"></a>
### fsys.stream() 
 [返回对象:fsysStreamObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/stream.html#fsysStreamObject)

<a id="fsys.stream"></a>
### fsys.stream(IStream接口指针) 
 直接使用指针创建对象

<a id="fsys.stream"></a>
### fsys.stream(IStream接口指针,true) 
 直接使用指针创建对象,该指针的COM引用计数减一  
注意对象自身会增加COM引用计数并在释放时移除

<a id="fsys.stream"></a>
### fsys.stream(初始化数据,缓冲区长度) 
 创建内存流文件,所有参数可选  
可选使用参数@3指定选项,此参数请参考库源码

<a id="fsysStreamObject"></a>
## fsysStreamObject 成员列表


<a id="fsysStreamObject.close"></a>
### fsysStreamObject.close() 
 关闭对象

<a id="fsysStreamObject.commit"></a>
### fsysStreamObject.commit(flags) 
 提交更改

<a id="fsysStreamObject.flush"></a>
### fsysStreamObject.flush() 
 提交更改  
兼容aardio标准流接口

<a id="fsysStreamObject.lockPointer"></a>
### fsysStreamObject.lockPointer() 
 如果这是一个内存流,  
锁定内存并返回内存指针，内存长度,  
需要使用对象的unlockPointer()成员函数解锁内存  
写入内存流可能导致重新分配内存,所以返回的指针可能会变动

<a id="fsysStreamObject.read"></a>
### fsysStreamObject.read 
 读数据

<a id="fsysStreamObject.read"></a>
### fsysStreamObject.read(-1) 
 参数指定读取长度,-1为读到尾部  
参数也可以指定一个结构体用于填充读取的数据,  
无参数读取一行

<a id="fsysStreamObject.read"></a>
### fsysStreamObject.read(0) 
 是否未到达文件尾。  
如果已经到达文件尾返回 null，否则返回空字符串。  
注意在布尔表达式工 null 等于 false，空字符串等于 true。

<a id="fsysStreamObject.readAll"></a>
### fsysStreamObject.readAll() 
 移到指针到文件头  
读取到文件尾返回所有数据

<a id="fsysStreamObject.readBuffer"></a>
### fsysStreamObject.readBuffer(buffer,读取长度) 
 读取数据到 buffer,  
参数@1应是 buffer 对象或指针，  
参数@2省略则默认为缓冲区长度。  
成功返回读取长度

<a id="fsysStreamObject.readTo"></a>
### fsysStreamObject.readTo 
 读取直到以指定的字符串结束

<a id="fsysStreamObject.readTo"></a>
### fsysStreamObject.readTo('结束串') 
 读取直到以指定的字符串结束,返回值不包含结束串,  
该函数每次仅读取一个字节,效率较低

<a id="fsysStreamObject.reset"></a>
### fsysStreamObject.reset() 
 文件指针移动到开始  
类似seek(0,"set"),不同的是此函数返回对象自身  
  
[返回对象:fsysStreamObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/stream.html#fsysStreamObject)

<a id="fsysStreamObject.revert"></a>
### fsysStreamObject.revert() 
 撤消更改

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek("cur",) 
 移动至相对当前位置的指定偏移量

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek("end") 
 移动指针至结束处

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek("end",) 
 移动至相对结束处的指定偏移量

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek("set") 
 移动指针到开始

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek("set",) 
 移动至相对开始处的指定偏移量

<a id="fsysStreamObject.seek"></a>
### fsysStreamObject.seek() 
 得到当前位置

<a id="fsysStreamObject.size"></a>
### fsysStreamObject.size() 
 得到数据长度

<a id="fsysStreamObject.stat"></a>
### fsysStreamObject.stat() 
 返回流状态  
返回值为STATSTG结构体  
  
[返回对象:fsysstramSTATSTGObject](#fsysstramSTATSTGObject)

<a id="fsysStreamObject.unlockPointer"></a>
### fsysStreamObject.unlockPointer() 
 解锁内存  
用lockPointer函数获取内存指针使用以后，必须调用此函数

<a id="fsysStreamObject.write"></a>
### fsysStreamObject.write 
 写数据

<a id="fsysStreamObject.write"></a>
### fsysStreamObject.write(数据,长度) 
 写入数据  
参数@1可使用字符串、buffer、指针、结构体等  
如果指定指针就必须明确指定写入长度

<a id="fsysStreamObject.writeBuffer"></a>
### fsysStreamObject.writeBuffer(buffer,读取长度) 
 buffer 写入流,  
参数@1应是 buffer 对象或指针，  
参数@2省略则默认为缓冲区长度

<a id="fsysstramSTATSTGObject"></a>
## fsysstramSTATSTGObject 成员列表


<a id="fsysstramSTATSTGObject.cbSize"></a>
### fsysstramSTATSTGObject.cbSize 
 文件长度