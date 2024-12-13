# builtin.thread 库模块帮助文档

<a id="thread"></a>
## thread 成员列表


<a id="thread._callableSerialize"></a>
### thread._callableSerialize 
 界面线程内非窗口对象 _serialize 元方法设定为此函数,可支持跨线程调用,  
绑定此元方法后，对象传入其他线程后所有成员调用都将回到界面线程执行

<a id="thread.add"></a>
### thread.add(k,v) 
 对参数k指定线程共享变量名称的数值增加参数v指定的计数  
参数v可以使用负数执行减操作

<a id="thread.callWndMeta"></a>
### thread.callWndMeta 
 跨线程传输的窗口对象元表,用于支持跨线程调用

<a id="thread.callable"></a>
### thread.callable() 
 开启界面线程非窗口对象的多线程界面回调功能。  
此函数会将对象的_serialize 元方法指定为 thread._callableSerialize,  
用于在界面线程内启用对象跨线程调用支持,注意启用后无法撤消,  
启用此特性后,对象传入其他线程后所有成员调用都将回到界面线程执行,  
  
参数指定 talbe 类型对象  
如果成功、或者对象已支持跨线程调用返回 true   
失败返回null或false

<a id="thread.createSuspended"></a>
### thread.createSuspended(suspended,cb) 
 suspended参数指定thread.create函数创建的线程是否为暂停状态  
如果@cb参数指定了线程函数,则执行线程函数后恢复原来的设置  
其他参数作为回调函数的参数,线程函数的返回值为此函数的返回值  
  
注意线程函数有独立的全局变量环境,线程引用的库应当在线程函数内 import

<a id="thread.delay"></a>
### thread.delay() 
 参数指定延时值,单位毫秒,参数不可省略,  
导入 win 库的界面线程内会执行 win.delay，  
否则执行 sleep 函数。  
  
如果当前线程导入了 win 库则退出消息循环返回null,否则返回true  
否则调用 sleep 函数并总是返回 true

<a id="thread.init"></a>
### thread.init(k,v) 
 如果参数k指定名称的线程共享变量为空值,  
则初始化该变量值为参数v指定的值

<a id="thread.invoke"></a>
### thread.invoke 
 创建线程但不返回线程句柄，线程句柄已自动关闭。

<a id="thread.invoke"></a>
### thread.invoke(aardio文件路径,调用参数) 
 创建线程运行 *.aardio 文件，不返回线程句柄。  
该文件所在目录将被设定为此线程的应用程序根目录,  
该目录下的"/lib/"目录将被设定为用户库目录,  
在线程文件内可使用owner参数获取这里传入的首个调用参数。

<a id="thread.invoke"></a>
### thread.invoke(线程函数,其他调用参数) 
 

```aardio
thread.invoke(   
	function(){  
		/*创建线程但不返回线程句柄。  
注意线程函数有独立的全局变量环境,线程引用的库应当在线程函数内 import*/  
	}  
)
```



<a id="thread.invokeAndWait"></a>
### thread.invokeAndWait(func,...) 
 

```aardio
thread.invokeAndWait(func,...invokeAndWait(  
	function(){  
		import win;  
		/*创建工作线程执行参数@1指定的线程函数,  
参数@1之后的其他可选参数会作为调用线程函数的参数。  
调用并等待线程函数执行完毕,然后获取此线程函数的返回值,  
在界面线程等待时界面仍可响应用户操作，线程函数的返回值会返回给调用线程,  
线程函数拥有独立的全局变量，并应遵守多线程调用规则*/  
	}   
)
```



<a id="thread.invokeEx"></a>
### thread.invokeEx(线程函数,其他参数) 
 

```aardio
thread.invokeEx(   
	function(){  
		/*创建线程并等待线程执行完成,然后自动关闭线程句柄。  
可用于原生多线程回调函数中创建独立线程以启用 COM 接口,  
注意线程函数有独立的全局变量环境,线程引用的库应当在线程函数内 import*/  
	}  
)
```



<a id="thread.setAffinity"></a>
### thread.setAffinity(1,) 
 指定线程在哪个CPU上运行,成功返回原CPU序号,失败返回0,  
参数@1指定CPU,参数@2指定线程句柄  
省略参数@2在设置当前线程

<a id="thread.stillActive"></a>
### thread.stillActive() 
 线程是否未退出,参数为线程句柄

<a id="thread.var"></a>
### thread.var 
 创建线程共享变量 - 可直接作为调用参数传入其他线程

<a id="thread.var"></a>
### thread.var() 
 [返回对象:threadvarObject](#threadvarObject)

<a id="thread.var"></a>
### thread.var(name,value) 
 可选用参数@1指定共享变量名称,可选在参数@2中指定初始化值,  
如果不指定共享变量名，则自动分配共享变量名,  
  
线程共享变量不会自动释放,调用 set 函数设为 null 可删除线程变量,  
如果确认没有线程再使用该变量，可调用 relase 函数释放共享变量名,  
thread.var以及 thread.table 自动分配的线程共享变量名上限为  
:0x3FFFFFFFFFFFFC0000000000000 个。  
应及时调用返回对象的 release 函数释放不需要的线程共享变量

<a id="thread.wait"></a>
### thread.wait() 
 等待一个线程句柄返回  
可选使用第二个参数指定超时值（单位毫秒）  
成功返回true,超时返回false;

<a id="thread.waitAll"></a>
### thread.waitAll() 
 等待一个或多个线程返回  
参数可以是多个线程句柄,或包含多个线程句柄的数组  
可选使用最后一个参数指定超时值（单位毫秒）  
成功返回值为真,失败返回空,  
返回值2为错误类型,该值为字符串"timeout"表示超时

<a id="thread.waitClose"></a>
### thread.waitClose() 
 等待一个或多个线程返回,并释放所有线程句柄  
参数可以是多个线程句柄,或包含多个线程句柄的数组

<a id="thread.waitOne"></a>
### thread.waitOne 
 等待一个或多个线程其中一个返回  
如果在界面线程中调用这个函数，会在等待过程中响应用户输入消息。

<a id="thread.waitOne"></a>
### thread.waitOne(...,timeout) 
 等待一个或多个线程其中一个返回，参数可以是多个线程句柄，  
也可以用参数@1指定一个包含多个线程句柄的数组，  
注意线程句柄总数不能大于64个。  
  
可选使用最后一个 @timeout 参数指定超时值（单位毫秒）  
  
成功返回值为完成的句柄在数组中的索引,失败返回空,  
返回值2为错误类型,该值为字符串"timeout"表示超时

<a id="threadvarObject"></a>
## threadvarObject 成员列表


<a id="threadvarObject.add"></a>
### threadvarObject.add() 
 增加数值,  
共享变量之前必须是数值或者null值,  
可以在参数中指定负数执行减操作

<a id="threadvarObject.get"></a>
### threadvarObject.get() 
 获取值

<a id="threadvarObject.release"></a>
### threadvarObject.release() 
 返回变量原来的值,  
同时设为 null 并删除该变量。  
应及时释放不再使用的线程共享变量

<a id="threadvarObject.set"></a>
### threadvarObject.set() 
 在参数@1中指定新的值,  
不使用时一定要设置值为null以删除该变量  
如果使用了共享变量名,  
即使删除共享变量也不会再重复分配该变量名给新的线程变量,  
除非调用release函数释放该变量名
