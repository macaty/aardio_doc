[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.popen 库模块帮助文�?
相关范例

[范例程序/进程/管道](https://www.aardio.com/zh-cn/doc/example/Process/Pipe/QuickStart.html) [范例程序/调用其他语言/批处理与命令行](https://www.aardio.com/zh-cn/doc/example/Languages/Bat/popen.html) [范例程序/文件操作/文件权限](../../example/File/Permissions/cacls.html)

## process 成员列表

### process.popen( ,系统命令�?

创建可读写的进程管道对象�?
如果省略第一个参�?并仅指定命令�?则作为系统命令行启动运行

### process.popen()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen(执行文件,命令行参�?startupInfo)

命令行参数可以是字符串或由多个字符串组成的数�?

数组参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,

命令参数最大长度为 32765 个字符�?
STARTUPINFO参数�?process.STARTUPINFO 结构�?可选参�?
如果该参数是普�?table 对象.将自动转换为 STARTUPINFO 结构体�?
//@startupInfo 指定{ showWindow = 1/\*\_SW\_NORMAL\*/ } 可显示控制台以外的窗�?
### process.popen(执行文件,命令行参�?更多命令行参�?...)

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,

命令参数最大长度为 32765 个字�?
## process.popen 成员列表

创建进程管道并调用目标程序，

可隐藏子进程的控制台黑窗口�?
成功返回可读写的进程管道对象�?
失败返回 3 个值：null,错误信息,错误代码

创建进程管道并调用目标程序，

可隐藏子进程的控制台黑窗口�?
成功返回可读写的进程管道对象�?
失败返回 3 个值：null,错误信息,错误代码�?
个别系统 64 位程序，需要改�?process.popen.wow64 以避免目录重定向�?
### process.popen.bind64

禁用 64 位重定向绑定并返回执行命令行的函数，

该函数的命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.bind64(fileName,codepage)

fileName 指定要执行的命令文件名，

可选用 codepage 参数指定代码页，默认�?0（ANSI）�?
### process.popen.cmd

创建管道按命令行方式调用控制台类型应用程�?

可隐藏子进程的控制台黑窗�?并支持管道读写�?
### process.popen.cmd()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.cmd(命令行参�?...)

如果第一个参数包含换�?则替换为批处理命令分隔符&,

如果传入多个命令行参数，或者命令行参数是个数组，则合并为单个命令行,

合并时不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.cmd64

创建管道按命令行方式调用控制台类型应用程�?

可隐藏子进程的控制台黑窗�?并支持管道读写�?
此函数禁�?4位系统文件与注册表重定向,

�?4位系统会返回64位进�?兼容32位系统�?
如果不需要读写管道，应当改用 process.wow64

### process.popen.cmd64()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.cmd64(命令行参�?...)

如果第一个命令行参数包含换行,则替换为批处理命令分隔符&,

如果传入多个命令行参数，或者命令行参数是个数组，则合并为单个命令行,

合并时不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.detached()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.is()

传入参数是否 process.popen 对象

### process.popen.ps()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.ps( `-Command`, `&{}`)

```aardio aardio
process.popen.ps(`-Command`,`&{/*请输入要执行�?PowerShell 语句�?返回 process.popen 进程管道对象�?*/}`)

```

### process.popen.ps(命令行参�?...)

创建进程执行 PowerShell 命令,返回可读写进程管�?

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.ps1((ps1脚本路径,...)

创建进程执行 PowerShell \*.ps1 脚本,返回可读写进程管�?

可添加一个或多个其他命令行参�?

所有命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.ps1()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.win

创建进程管道调用目标程序�?
隐藏控制台窗口，但允许显示其他图形界面�?
成功返回可读写的进程管道对象（process.popen 对象），

失败返回 3 个值：null,错误信息,错误代码�?
### process.popen.win()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.win(执行文件,命令行参�?...)

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,

命令参数最大长度为 32765 个字符�?
### process.popen.wow64()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.wow64(执行文件,命令行参�?...)

创建子进�?返回可读写进程管�?

此函数禁�?4位系统文件与注册表重定向,

�?4位系统会返回64位进�?兼容32位系�?

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

### process.popen.wsl()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.popen.wsl(命令行参�?...)

创建进程执行 WSL 命令,并支持管道读�?

命令行参数可以是一个数组、一个或多个字符串参�?

数组或多个命令行参数调用 process.joinArguments 合并,

不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

## processPopenObject 成员列表

### processPopenObject.assignToJobObject(process.job.limitKill)

绑定到作业对�?成功返回 true

作业对象示例请参考标准库 process.job.limitKill 的源码�?
也可直接调用 killOnExit 函数绑定 process.job.limitKill

### processPopenObject.beforeClose

```aardio aardio
processPopenObject.beforeClose = function(){
    owner.process.terminate();/*释放管道以前触发此事�?可强制关闭进�?/
}

```

### processPopenObject.close()

关闭当前对象，释放读写管道�?
当前对象释放时会自动调用此函数�?
readAll,terminate 等函数会自动调用此函�?
注意此函数并不会关闭目标进程�?
### processPopenObject.closeMainWindow()

关闭进程的主窗口，忽略隐藏窗�?
### processPopenObject.codepage

进程输入输出使用的代码页,默认�?0（系统默�?ANSI 编码）�?
UTF-8 编码的程序必须指定为 65001 ，否则可能会出现乱码�?
传统命令行程序通常使用 ANSI 编码�?
而一些跨平台的语言编写的命令行程序通常会使�?UTF-8 编码�?
### processPopenObject.ctrlEvent(0)

发�?Ctrl+C（SIGINT信号�?
信号将传递到与目标进程控制台连接的所有非分离控制台进�?
64位目标进程会导致当前控制台暂时关�?
### processPopenObject.ctrlEvent(1)

发�?Ctrl+Break（SIGINT信号�?
信号将传递到与目标进程控制台连接的所有非分离控制台进�?
64位目标进程会导致当前控制台暂时关�?
### processPopenObject.each( 间隔时间,超时时间 )

```aardio aardio
for( all,out,err in processPopenObject.each() ){
    io.stdout.write( out,err );/*读取进程输出直到进程关闭，不阻塞界面线程消息*/
}

```

### processPopenObject.expect

等待直到模式匹配标准输出成功，返回匹配结果�?
如果遇到错误输出返回null以及错误信息�?
此函数不阻塞界面线程消息

### processPopenObject.expect("模式�?,超时,文本最大长�?

超时参数是以毫秒为单位的估算值，可省略�?
参数@3可省略，默认�?024

### processPopenObject.expect2

等待直到模式匹配标准输出成功，返回匹配结果�?
注意 expect2 函数会匹配标准输出与错误输出�?
而不是像 expect 函数那样遇到错误输出会返�?null�?
### processPopenObject.expect2("模式�?,超时,文本最大长�?

超时参数是以毫秒为单位的估算值，可省略�?
参数@3可省略，默认�?024

### processPopenObject.getExitCode()

该函数调用成功有两个返回�?进程退出代�?进程是否已退�?
### processPopenObject.getMainWindow()

返回进程的主窗口以及窗口进程 ID，找不到则搜寻子进程主窗口�?
查找时忽略隐藏窗口�?
### processPopenObject.getMainWindow(类名,标题)

返回进程的指定类名的主窗口以及窗口进�?ID，找不到则搜寻子进程主窗口�?
类名与标题支持完全匹配与模式匹配，忽略大小写�?
所有参数可选，不指定类名或标题时忽略隐藏窗口�?
### processPopenObject.json()

等待并读取进程输出的一�?JSON ，并解析为对象�?
成功返回对象，失败返�?null,错误信息�?
此函数不阻塞界面线程消息�?
JSON 最外层必须是大括号 {} 或中括号 \[\]，JSON不能包含非转义换行，且必须以换行结束�?
自动忽略不符合要求的其他输出�?
使用此函数前必须导入 web.json 库，

注意 process.popen 并不导入 web.json

### processPopenObject.jsonAll()

读取进程的全部输出，并用 JSON 解析�?aardio 对象�?
成功返回对象，失败返�?null,错误信息�?
此函数会等待进程结束，但不会阻塞当前线程窗口消息�?
进程输出应符�?JSON 语法�?
如果参数 @1 �?true 或省略，读取后关闭进程管道�?
使用此函数前必须导入 web.json 库，

注意 process.popen 并不导入 web.json

### processPopenObject.jsonWrite()

将对象转换为 JSON 并写入进程标准输入，

JSON 不包含换行，且以换行结尾�?
最好统一为输入对象生成的JSON 最外层是大括号 {} 或中括号 \[\]

使用此函数前必须导入 web.json 库，

注意 process.popen 并不导入 web.json

成功返回 true，失败返�?null ，错误代码，错误信息�?
### processPopenObject.killOnExit()

主进程退出时自动退出此进程

### processPopenObject.lines(模式�?允许处理窗口消息)

```aardio aardio
for i,k,v in processPopenObject.lines("^(\s*)(\S.*?)[\s.]*\:\s*(.*)"){
    /*按行读取进程输出,移除每行尾部的空白字�?
指定模式串则返回匹配结果，否则直接返回当前读取的文本�?如果模式匹配用圆括号创建捕获分组，则每个捕获分组对应一个返回值�?
以上示例模式串匹配用 : 号分隔键值对的行�?其中 \s 匹配空白字符，大写的 \S 匹配非空白字�?
如果参数 @2 �?true 则读取进程输出时不会阻塞窗口消息*/
}

```

### processPopenObject.logResponse

回显进程的标准输出以及错误输�?
### processPopenObject.logResponse(回显函数,间隔时间)

自动同动获取进程输出,并直到进程结�?所有参数可省略�?
回显函数�?3 个回调参�?all,out,err�?
all 为所有输�?out 为标准输出，err 为错误输出�?
可用 #err 判断是否出错�?
如果不指定回显函数，且之前定义了 logger 属性，则调�?logger 对象输出进程回显�?
未指�?logger 对象则默认回显到控制台�?
此函数不会自动打开控制�?
### processPopenObject.logResponse(异步回显文本�?间隔时间)

不会阻塞并等待进程结�?

而是在传入文本框控件上创建定时器异步回显进程输出,

回显文本框必须指定edit或richedit控件,间隔时间可省略�?
如果正在进行异步回显，则调用 waitOne 函数不会读取任何输出�?
并且 waitOne 函数会等待异步回显结�?
### processPopenObject.logger

指定 logResponse 的默认回显对�?
该对象必须有log或write成员函数用于输出回显

logger 对象用于logResponse 时将同步获取输出并等待进程结�?
如果不指定此属�?且已导入 console 则默认输出到控制�?
### processPopenObject.ndjsonAll()

读取进程的全部输出，并将多行 JSON 解析�?aardio 对象�?
有效�?JSON 必须是JSON 对象或数组，忽略其他 JSON 类型或无效的行�?
成功返回对象，失败返�?null,错误信息�?
此函数会等待进程结束，但不会阻塞当前线程窗口消息�?
如果参数 @1 �?true 或省略，读取后关闭进程管道�?
使用此函数前必须导入 web.json 库，

注意 process.popen 并不导入 web.json

### processPopenObject.onResponseEnd()

```aardio aardio
processPopenObject.onResponseEnd = function(){
    /*被调用进程结束，异步或同步调�?logResponse 函数结束后触发此回调*/
}

```

### processPopenObject.peek()

检测标准输出管道中可读取的数据长度�?
有数据则读取数据,无数据则返回空�?
如果 stderr 中有错误信息,则第二个返回值为错误信息

此函数不会因为等待输入而阻�?
参数可指定等待目标进程执行的延时时间

### processPopenObject.peekErr()

检测标准错误输出管道中可读取的数据长度�?
有数据则读取错误信息,无数据则返回空�?
此函数不会因为等待输入而阻�?
参数可指定等待目标进程执行的延时时间

### processPopenObject.peekTo

读取数据直到数据以指定的字符串结�?
### processPopenObject.peekTo(">",回显函数,超时)

读取数据，直到数据以 参数@1 指定的字符串结束�?
不阻塞当前线程窗口消息�?
返回标准输出,第二个返回值为错误信息

可选使用参数@2指定回显函数,回显函数有两个参�?分别为标准输�?错误信息

可选用参数@3指定无输出时的超时限�?
该函数在进程退出后也会返回

### processPopenObject.print()

清空标准输出然后写数�?
多个参数中间添加空格,尾部添加换行

成功返回 true，失败返�?null ，错误代码，错误信息�?
### processPopenObject.printf()

清空标准输出然后写数�?
调用string.format函数格式化全部参�?尾部添加换行

成功返回 true，失败返�?null ，错误代码，错误信息�?
### processPopenObject.process

[返回对象:processObject](_.html#processObject)

### processPopenObject.reaUtf8()

所有参数用法与 read 函数相同�?
此函数直接读入，不作任何编码转换�?
### processPopenObject.read("%d")

从当前位�?向后读取下一个数�?
支持多参�?
### processPopenObject.read("%s")

从当前位�?向后读取下一�?
支持多参�?
### processPopenObject.read()

正数参数表示从当前位置向后读取n个字节，

支持多参数�?
从当前位�?向后读取下一�?
默认为二进制模式,行尾可能有回车符�?

可使�?textMode 函数修改

### processPopenObject.read(-1)

向后读取到文件尾�?
负数表示从文件尾部倒计数位�?
如果第一个参数为-1，则自动调用 writeClose 关闭输出�?

支持多参�?
### processPopenObject.read(0)

检测是否读取到文件�?
### processPopenObject.readAll

关闭进程输入，并读取所有输出�?
返回�?1 包含标准输出与错误输出�?
不阻塞当前线程窗口消�?
### processPopenObject.readAll(匹配模式�?是否关闭)

读取所有输�?所有参数可选�?
返回�?1 包含标准输出与错误输出�?
不指定参�?@1 时会清除返回�?1 文本首尾的空白字�?

返回�?2 为错误输出（无错�?null），返回�?3 为进程退出代码�?
如果有输出文本且指定了参数@1�?
则按指定的模式串返回匹配的输出文本，此时无返回�?2、返回�?3�?
参数 @2 指定是否关闭进程对象,默认�?true

### processPopenObject.readErr(-1)

读取所有错误输�?
### processPopenObject.resume()

恢复运行

### processPopenObject.stdErr

进程标准错误输出

[返回对象:ioFileObject](../io/_.html#ioFileObject)

### processPopenObject.stdIn

进程标准输入

waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，

或readAll �?read 函数参数�?-1 �?
会自动关闭目标进程标准输入管�?
[返回对象:ioFileObject](../io/_.html#ioFileObject)

### processPopenObject.stdOut

进程标准输出

[返回对象:ioFileObject](../io/_.html#ioFileObject)

### processPopenObject.stillActive()

检查进程是否仍在运行，仍在运行返回 true

### processPopenObject.stopLogResponse()

清除异步回显文本框的定时器�?
关闭进程对象时也会自动清除此定时�?
### processPopenObject.suspend()

暂停进程

### processPopenObject.terminate()

强制关闭进程并释放进程对�?
### processPopenObject.textMode(output,input)

参数 @output 指定进程输出是否使用文本模式

参数 @input 指定进程输入是否使用文本模式

输入输出默认都是二进制模�?
文本模式�?`'\x1A'`(CTRL+Z), `'\0'` 表示终止文本,

并且读入时自动转换回车换行为换行,

写出时自动转换换行符为回车换�?
### processPopenObject.wait()

等待进程关闭,可选使用一个毫秒值参数设定超时�?
超时或失败返�?null，进程退出则返回�?为true�?
返回�?为标准输出，返回�?为错误输出，返回�?为退出代�?
如被调用进程写满输出缓冲区，而调用进程没有读取，

则被调用进程会一直等待，此函数将无法返回�?
改用 readAll 函数读取输入可避免该问题�?
### processPopenObject.waitMainWindow

等待并返回进程主窗口以及窗口进程ID�?
### processPopenObject.waitMainWindow(类名,等待窗口句柄)

等待并返回进程主窗口以及窗口进程ID�?
所有参数可选�?
可选指定要等待的类名，类名支持完全匹配与模式匹配，忽略大小写�?
不指定类名时忽略隐藏窗口,

可选指定等待窗口句�?该窗口关闭时些函数不再等待并直接返回结果

### processPopenObject.waitOne()

等待进程关闭，不会阻塞当前线程窗口消息�?
可用一个毫秒值参数设定超时�?
超时或失败返�?null，进程已退出则返回�?为true�?
返回�?为标准输�?返回�?为错误输�?返回�?为退出代�?
如果被调用进程写满输出缓冲区，而调用进程没有读取，

则被调用进程会一直等待，此函数将无法返回�?
改用 readAll 函数读取输入可避免该问题�?
注意如果正在调用异步 logResponse 回显到窗口对象�?
�?waitOne 函数仅返回单个值，不读取任何输�?
### processPopenObject.write()

写数�?支持一个或多个参数�?
成功返回 true，失败返�?null ，错误代码，错误信息�?
如果目标进程已关闭，但标准输入管道未释放仍可能返�?true�?
waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，

或readAll �?read 函数参数�?-1 �?
会自动关闭目标进程标准输入管�?
并导�?write 函数返回 null �?
### processPopenObject.writeClose()

写数据并关闭进程输入�?

可选指定一个或多个参数

不指定参数则直接关闭输入�?
注意:有些进程会一直等待输入流关闭再继续下一下操�?
### processPopenObject.writeUtf8()

写入 UTF8 编码数据，不作编码转换，支持一个或多个参数�?
成功返回 true，失败返�?null ，错误代码，错误信息�?
如果目标进程已关闭，但标准输入管道未释放仍可能返�?true�?
waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，

或readAll �?read 函数参数�?-1 �?
会自动关闭目标进程标准输入管�?
并导�?write 函数返回 null �?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.md)

