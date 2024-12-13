# process.command 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.command"></a>
### process.command() 
 [返回对象:processCommandObject](#processCommandObject)

<a id="process.command"></a>
### process.command(窗口对象,是否取消特权隔离) 
 创建进程命令对象  
省略窗口参数则创建 message only window,  
该对象定义的成员函数,都可在其他进程中用 thread.command.post()调用

<a id="process.command"></a>
## process.command 成员列表


<a id="process.command.?"></a>
### process.command.? 
 可指定外部进程的命令函数名,并直接调用该函数，  
可获取外部进程中被调用函数的返回值

<a id="process.command.invoke"></a>
### process.command.invoke("命令函数名",其他参数) 
 非阻塞调用跨进程命令,支持返回值

<a id="process.command.join"></a>
### process.command.join("群组GUID") 
 加入进程群组  
使用GUID区分不同的进程分组  
同一线程应当且必须在定义或发送进程命令前调用该函数一次,  
同一线程可多次调用该函数,但参数必须相同  
成功返回true

<a id="process.command.post"></a>
### process.command.post("命令函数名",其他参数) 
 非阻塞调用跨进程命令,无返回值  
此函数需要创建线程调用send函数,不适合频繁调用  
异步命令如果尚未发出前,发送线程如果立即退出会导到命令发送失败

<a id="process.command.send"></a>
### process.command.send("命令函数名",其他参数) 
 阻塞调用跨进程命令  
不指定窗口句柄,所有同名的进程命令函数都会被调用,  
可获取处理该命令的回调函数返回值,默认返回0

<a id="process.command.send"></a>
### process.command.send(窗口句柄,"命令函数名",其他参数) 
 阻塞调用跨进程命令,  
可获取回调函数的数值返回值,默认返回null

<a id="process.command.sendPid"></a>
### process.command.sendPid(目标进程ID,"命令函数名",其他参数) 
 阻塞调用跨进程命令,  
可获取回调函数的数值返回值,默认返回null

<a id="processCommandObject"></a>
## processCommandObject 成员列表


<a id="processCommandObject._form"></a>
### processCommandObject._form 
 窗体对象  
  
[返回对象:winform](https://www.aardio.com/zh-cn/doc/library-reference/win/ui/_.html#winform)

<a id="processCommandObject.自定义函数名"></a>
### processCommandObject.自定义函数名 
 

```aardio
processCommandObject.命令函数 = function( ... ) {
	/*支持不定个数参数  
返回值可阻止命令继续传递*/
}
```


