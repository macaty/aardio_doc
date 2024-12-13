[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# ide.command 库模块帮助文�?
## ide 成员列表

### ide.command()

[返回对象:ideCommandObject](#ideCommandObject)

### ide.command(窗口对象,是否取消特权隔离)

创建进程命令对象

省略窗口参数则创�?message only window,

该对象定义的成员函数,都可在其他进程中�?thread.command.post()调用

## ide.command 成员列表

只允许在ide扩展库、以及IDE启动触发器init.aardio中使�?
用于避免在IDE中因为导入ide接口而无法支�?process.command

### ide.command.?

可指定外部进程的命令函数�?并直接调用该函数�?
可获取外部进程中被调用函数的返回�?
### ide.command.invoke("命令函数�?,其他参数)

非阻塞调用跨进程命令,支持返回�?
### ide.command.join("群组GUID")

加入进程群组

使用GUID区分不同的进程分�?
同一线程应当且必须在定义或发送进程命令前调用该函数一�?

同一线程可多次调用该函数,但参数必须相�?
成功返回true

### ide.command.post("命令函数�?,其他参数)

非阻塞调用跨进程命令,无返回�?
此函数需要创建线程调用send函数,不适合频繁调用

异步命令如果尚未发出�?发送线程如果立即退出会导到命令发送失�?
### ide.command.send("命令函数�?,其他参数)

阻塞调用跨进程命�?
不指定窗口句�?所有同名的进程命令函数都会被调�?

可获取处理该命令的回调函数返回�?默认返回0

### ide.command.send(窗口句柄,"命令函数�?,其他参数)

阻塞调用跨进程命�?

可获取回调函数的数值返回�?默认返回null

### ide.command.sendPid(目标进程ID,"命令函数�?,其他参数)

阻塞调用跨进程命�?

可获取回调函数的数值返回�?默认返回null

## ideCommandObject 成员列表

### ideCommandObject.\_form

窗体对象

[返回对象:winform](../win/ui/_.html#winform)

### ideCommandObject.自定义函数名

```aardio aardio
ideCommandObject.命令函数 = function( ... ) {
    /*支持不定个数参数
返回值可阻止命令继续传�?/
}

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/ide/command.md)

