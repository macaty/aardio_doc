# process.popen 库模块帮助文档


<details>  <summary>相关范例</summary>  <p>
[范例程序/进程/管道](https://www.aardio.com/zh-cn/doc/example/Process/Pipe/QuickStart.html)
[范例程序/调用其他语言/批处理与命令行](https://www.aardio.com/zh-cn/doc/example/Languages/Bat/popen.html)
[范例程序/文件操作/文件权限](https://www.aardio.com/zh-cn/doc/example/File/Permissions/cacls.html)
</p></details>


<a id="process"></a>
## process 成员列表


<a id="process.popen"></a>
### process.popen( ,系统命令行) 
 创建可读写的进程管道对象。  
如果省略第一个参数,并仅指定命令行,则作为系统命令行启动运行

<a id="process.popen"></a>
### process.popen() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen"></a>
### process.popen(执行文件,命令行参数,startupInfo) 
 命令行参数可以是字符串或由多个字符串组成的数组,  
数组参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,  
命令参数最大长度为 32765 个字符。  
STARTUPINFO参数为 process.STARTUPINFO 结构体,可选参数  
如果该参数是普通 table 对象.将自动转换为 STARTUPINFO 结构体。  
//@startupInfo 指定{ showWindow = 1/*_SW_NORMAL*/ } 可显示控制台以外的窗口

<a id="process.popen"></a>
### process.popen(执行文件,命令行参数,更多命令行参数,...) 
 命令行参数可以是一个数组、一个或多个字符串参数,  
  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,  
命令参数最大长度为 32765 个字符

<a id="process.popen"></a>
## process.popen 成员列表

创建进程管道并调用目标程序，  
可隐藏子进程的控制台黑窗口。  
  
成功返回可读写的进程管道对象，  
失败返回 3 个值：null,错误信息,错误代码

创建进程管道并调用目标程序，  
可隐藏子进程的控制台黑窗口。  
  
成功返回可读写的进程管道对象，  
失败返回 3 个值：null,错误信息,错误代码。  
  
个别系统 64 位程序，需要改用 process.popen.wow64 以避免目录重定向。

<a id="process.popen.bind64"></a>
### process.popen.bind64 
 禁用 64 位重定向绑定并返回执行命令行的函数，  
该函数的命令行参数可以是一个数组、一个或多个字符串参数,  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.bind64"></a>
### process.popen.bind64(fileName,codepage) 
 fileName 指定要执行的命令文件名，  
可选用 codepage 参数指定代码页，默认为 0（ANSI）。

<a id="process.popen.cmd"></a>
### process.popen.cmd 
 创建管道按命令行方式调用控制台类型应用程序,  
可隐藏子进程的控制台黑窗口,并支持管道读写。

<a id="process.popen.cmd"></a>
### process.popen.cmd() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.cmd"></a>
### process.popen.cmd(命令行参数,...) 
 如果第一个参数包含换行,则替换为批处理命令分隔符&,  
如果传入多个命令行参数，或者命令行参数是个数组，则合并为单个命令行,  
合并时不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.cmd64"></a>
### process.popen.cmd64 
 创建管道按命令行方式调用控制台类型应用程序,  
可隐藏子进程的控制台黑窗口,并支持管道读写。  
  
此函数禁用64位系统文件与注册表重定向,  
在64位系统会返回64位进程,兼容32位系统。  
  
如果不需要读写管道，应当改用 process.wow64

<a id="process.popen.cmd64"></a>
### process.popen.cmd64() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.cmd64"></a>
### process.popen.cmd64(命令行参数,...) 
 如果第一个命令行参数包含换行,则替换为批处理命令分隔符&,  
如果传入多个命令行参数，或者命令行参数是个数组，则合并为单个命令行,  
合并时不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.detached"></a>
### process.popen.detached() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.is"></a>
### process.popen.is() 
 传入参数是否 process.popen 对象

<a id="process.popen.ps"></a>
### process.popen.ps() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.ps"></a>
### process.popen.ps(`-Command`,`&{}`) 
 

```aardio
process.popen.ps(`-Command`,`&{/*请输入要执行的 PowerShell 语句，  
返回 process.popen 进程管道对象。 */}`)
```



<a id="process.popen.ps"></a>
### process.popen.ps(命令行参数,...) 
 创建进程执行 PowerShell 命令,返回可读写进程管道,  
命令行参数可以是一个数组、一个或多个字符串参数,  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.ps1("></a>
### process.popen.ps1((ps1脚本路径,...) 
 创建进程执行 PowerShell *.ps1 脚本,返回可读写进程管道,  
可添加一个或多个其他命令行参数,  
所有命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.ps1"></a>
### process.popen.ps1() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.win"></a>
### process.popen.win 
 创建进程管道调用目标程序。  
隐藏控制台窗口，但允许显示其他图形界面。  
  
成功返回可读写的进程管道对象（process.popen 对象），  
失败返回 3 个值：null,错误信息,错误代码。

<a id="process.popen.win"></a>
### process.popen.win() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.win"></a>
### process.popen.win(执行文件,命令行参数,...) 
 命令行参数可以是一个数组、一个或多个字符串参数,  
  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号,  
命令参数最大长度为 32765 个字符。

<a id="process.popen.wow64"></a>
### process.popen.wow64() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.wow64"></a>
### process.popen.wow64(执行文件,命令行参数,...) 
 创建子进程,返回可读写进程管道,  
此函数禁用64位系统文件与注册表重定向,  
在64位系统会返回64位进程,兼容32位系统,  
命令行参数可以是一个数组、一个或多个字符串参数,  
  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="process.popen.wsl"></a>
### process.popen.wsl() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.popen.wsl"></a>
### process.popen.wsl(命令行参数,...) 
 创建进程执行 WSL 命令,并支持管道读写,  
命令行参数可以是一个数组、一个或多个字符串参数,  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号

<a id="processPopenObject"></a>
## processPopenObject 成员列表


<a id="processPopenObject.assignToJobObject"></a>
### processPopenObject.assignToJobObject(process.job.limitKill) 
 绑定到作业对象,成功返回 true  
作业对象示例请参考标准库 process.job.limitKill 的源码。  
也可直接调用 killOnExit 函数绑定 process.job.limitKill

<a id="processPopenObject.beforeClose"></a>
### processPopenObject.beforeClose 
 

```aardio
processPopenObject.beforeClose = function(){
	owner.process.terminate();/*释放管道以前触发此事件,可强制关闭进程*/
}
```



<a id="processPopenObject.close"></a>
### processPopenObject.close() 
 关闭当前对象，释放读写管道。  
当前对象释放时会自动调用此函数。  
readAll,terminate 等函数会自动调用此函数  
  
注意此函数并不会关闭目标进程。

<a id="processPopenObject.closeMainWindow"></a>
### processPopenObject.closeMainWindow() 
 关闭进程的主窗口，忽略隐藏窗口

<a id="processPopenObject.codepage"></a>
### processPopenObject.codepage 
 进程输入输出使用的代码页,默认为 0（系统默认 ANSI 编码）。  
UTF-8 编码的程序必须指定为 65001 ，否则可能会出现乱码。  
  
传统命令行程序通常使用 ANSI 编码。  
而一些跨平台的语言编写的命令行程序通常会使用 UTF-8 编码。

<a id="processPopenObject.ctrlEvent"></a>
### processPopenObject.ctrlEvent(0) 
 发送 Ctrl+C（SIGINT信号）  
信号将传递到与目标进程控制台连接的所有非分离控制台进程  
64位目标进程会导致当前控制台暂时关闭

<a id="processPopenObject.ctrlEvent"></a>
### processPopenObject.ctrlEvent(1) 
 发送 Ctrl+Break（SIGINT信号）  
信号将传递到与目标进程控制台连接的所有非分离控制台进程  
64位目标进程会导致当前控制台暂时关闭

<a id="processPopenObject.each"></a>
### processPopenObject.each( 间隔时间,超时时间 ) 
 

```aardio
for( all,out,err in processPopenObject.each() ){
    io.stdout.write( out,err );/*读取进程输出直到进程关闭，不阻塞界面线程消息*/
}
```



<a id="processPopenObject.expect"></a>
### processPopenObject.expect 
 等待直到模式匹配标准输出成功，返回匹配结果。  
如果遇到错误输出返回null以及错误信息。  
此函数不阻塞界面线程消息

<a id="processPopenObject.expect"></a>
### processPopenObject.expect("模式串",超时,文本最大长度) 
 超时参数是以毫秒为单位的估算值，可省略。  
参数@3可省略，默认为1024

<a id="processPopenObject.expect2"></a>
### processPopenObject.expect2 
 等待直到模式匹配标准输出成功，返回匹配结果。  
注意 expect2 函数会匹配标准输出与错误输出，  
而不是像 expect 函数那样遇到错误输出会返回 null。

<a id="processPopenObject.expect2"></a>
### processPopenObject.expect2("模式串",超时,文本最大长度) 
 超时参数是以毫秒为单位的估算值，可省略。  
参数@3可省略，默认为1024

<a id="processPopenObject.getExitCode"></a>
### processPopenObject.getExitCode() 
 该函数调用成功有两个返回值:进程退出代码,进程是否已退出

<a id="processPopenObject.getMainWindow"></a>
### processPopenObject.getMainWindow() 
 返回进程的主窗口以及窗口进程 ID，找不到则搜寻子进程主窗口。  
查找时忽略隐藏窗口。

<a id="processPopenObject.getMainWindow"></a>
### processPopenObject.getMainWindow(类名,标题) 
 返回进程的指定类名的主窗口以及窗口进程 ID，找不到则搜寻子进程主窗口。  
类名与标题支持完全匹配与模式匹配，忽略大小写。  
所有参数可选，不指定类名或标题时忽略隐藏窗口。

<a id="processPopenObject.json"></a>
### processPopenObject.json() 
 等待并读取进程输出的一行 JSON ，并解析为对象。  
成功返回对象，失败返回 null,错误信息。  
此函数不阻塞界面线程消息。  
  
JSON 最外层必须是大括号 {} 或中括号 []，JSON不能包含非转义换行，且必须以换行结束。  
自动忽略不符合要求的其他输出。  
  
使用此函数前必须导入 web.json 库，  
注意 process.popen 并不导入 web.json

<a id="processPopenObject.jsonAll"></a>
### processPopenObject.jsonAll() 
 读取进程的全部输出，并用 JSON 解析为 aardio 对象。  
成功返回对象，失败返回 null,错误信息。  
此函数会等待进程结束，但不会阻塞当前线程窗口消息。  
  
进程输出应符合 JSON 语法。  
如果参数 @1 为 true 或省略，读取后关闭进程管道。  
  
使用此函数前必须导入 web.json 库，  
注意 process.popen 并不导入 web.json

<a id="processPopenObject.jsonWrite"></a>
### processPopenObject.jsonWrite() 
 将对象转换为 JSON 并写入进程标准输入，  
JSON 不包含换行，且以换行结尾。  
最好统一为输入对象生成的JSON 最外层是大括号 {} 或中括号 []  
  
使用此函数前必须导入 web.json 库，  
注意 process.popen 并不导入 web.json  
  
成功返回 true，失败返回 null ，错误代码，错误信息。

<a id="processPopenObject.killOnExit"></a>
### processPopenObject.killOnExit() 
 主进程退出时自动退出此进程

<a id="processPopenObject.lines"></a>
### processPopenObject.lines(模式串,允许处理窗口消息) 
 

```aardio
for i,k,v in processPopenObject.lines("^(\s*)(\S.*?)[\s.]*\:\s*(.*)"){
	/*按行读取进程输出,移除每行尾部的空白字符,  
指定模式串则返回匹配结果，否则直接返回当前读取的文本。  
如果模式匹配用圆括号创建捕获分组，则每个捕获分组对应一个返回值。  
  
以上示例模式串匹配用 : 号分隔键值对的行，  
其中 \s 匹配空白字符，大写的 \S 匹配非空白字符  
  
如果参数 @2 为 true 则读取进程输出时不会阻塞窗口消息*/
}
```



<a id="processPopenObject.logResponse"></a>
### processPopenObject.logResponse 
 回显进程的标准输出以及错误输出

<a id="processPopenObject.logResponse"></a>
### processPopenObject.logResponse(回显函数,间隔时间) 
 自动同动获取进程输出,并直到进程结束,所有参数可省略。  
  
回显函数有 3 个回调参数 all,out,err。  
all 为所有输出,out 为标准输出，err 为错误输出。  
可用 #err 判断是否出错。  
  
如果不指定回显函数，且之前定义了 logger 属性，则调用 logger 对象输出进程回显。  
未指定 logger 对象则默认回显到控制台。  
此函数不会自动打开控制台

<a id="processPopenObject.logResponse"></a>
### processPopenObject.logResponse(异步回显文本框,间隔时间) 
 不会阻塞并等待进程结束,  
而是在传入文本框控件上创建定时器异步回显进程输出,  
回显文本框必须指定edit或richedit控件,间隔时间可省略。  
  
如果正在进行异步回显，则调用 waitOne 函数不会读取任何输出。  
并且 waitOne 函数会等待异步回显结束

<a id="processPopenObject.logger"></a>
### processPopenObject.logger 
 指定 logResponse 的默认回显对象  
该对象必须有log或write成员函数用于输出回显  
logger 对象用于logResponse 时将同步获取输出并等待进程结束  
  
如果不指定此属性,且已导入 console 则默认输出到控制台

<a id="processPopenObject.ndjsonAll"></a>
### processPopenObject.ndjsonAll() 
 读取进程的全部输出，并将多行 JSON 解析为 aardio 对象。  
有效的 JSON 必须是JSON 对象或数组，忽略其他 JSON 类型或无效的行。  
成功返回对象，失败返回 null,错误信息。  
此函数会等待进程结束，但不会阻塞当前线程窗口消息。  
如果参数 @1 为 true 或省略，读取后关闭进程管道。  
  
使用此函数前必须导入 web.json 库，  
注意 process.popen 并不导入 web.json

<a id="processPopenObject.onResponseEnd"></a>
### processPopenObject.onResponseEnd() 
 

```aardio
processPopenObject.onResponseEnd = function(){
	/*被调用进程结束，异步或同步调用 logResponse 函数结束后触发此回调*/
}
```



<a id="processPopenObject.peek"></a>
### processPopenObject.peek() 
 检测标准输出管道中可读取的数据长度。  
有数据则读取数据,无数据则返回空值  
如果 stderr 中有错误信息,则第二个返回值为错误信息  
此函数不会因为等待输入而阻塞  
参数可指定等待目标进程执行的延时时间

<a id="processPopenObject.peekErr"></a>
### processPopenObject.peekErr() 
 检测标准错误输出管道中可读取的数据长度。  
有数据则读取错误信息,无数据则返回空值  
此函数不会因为等待输入而阻塞  
参数可指定等待目标进程执行的延时时间

<a id="processPopenObject.peekTo"></a>
### processPopenObject.peekTo 
 读取数据直到数据以指定的字符串结束

<a id="processPopenObject.peekTo"></a>
### processPopenObject.peekTo(">",回显函数,超时) 
 读取数据，直到数据以 参数@1 指定的字符串结束。  
不阻塞当前线程窗口消息。  
  
返回标准输出,第二个返回值为错误信息  
可选使用参数@2指定回显函数,回显函数有两个参数,分别为标准输出,错误信息  
可选用参数@3指定无输出时的超时限制  
该函数在进程退出后也会返回

<a id="processPopenObject.print"></a>
### processPopenObject.print() 
 清空标准输出然后写数据  
多个参数中间添加空格,尾部添加换行  
  
成功返回 true，失败返回 null ，错误代码，错误信息。

<a id="processPopenObject.printf"></a>
### processPopenObject.printf() 
 清空标准输出然后写数据  
调用string.format函数格式化全部参数,尾部添加换行  
  
成功返回 true，失败返回 null ，错误代码，错误信息。

<a id="processPopenObject.process"></a>
### processPopenObject.process 
 [返回对象:processObject](https://www.aardio.com/zh-cn/doc/library-reference/process/_.html#processObject)

<a id="processPopenObject.reaUtf8"></a>
### processPopenObject.reaUtf8() 
 所有参数用法与 read 函数相同。  
此函数直接读入，不作任何编码转换。

<a id="processPopenObject.read"></a>
### processPopenObject.read("%d") 
 从当前位置,向后读取下一个数值  
支持多参数

<a id="processPopenObject.read"></a>
### processPopenObject.read("%s") 
 从当前位置,向后读取下一行  
支持多参数

<a id="processPopenObject.read"></a>
### processPopenObject.read() 
 正数参数表示从当前位置向后读取n个字节，  
支持多参数。

从当前位置,向后读取下一行  
默认为二进制模式,行尾可能有回车符号,  
可使用 textMode 函数修改

<a id="processPopenObject.read"></a>
### processPopenObject.read(-1) 
 向后读取到文件尾部  
负数表示从文件尾部倒计数位置  
如果第一个参数为-1，则自动调用 writeClose 关闭输出流,  
支持多参数

<a id="processPopenObject.read"></a>
### processPopenObject.read(0) 
 检测是否读取到文件尾

<a id="processPopenObject.readAll"></a>
### processPopenObject.readAll 
 关闭进程输入，并读取所有输出。  
返回值 1 包含标准输出与错误输出。  
不阻塞当前线程窗口消息

<a id="processPopenObject.readAll"></a>
### processPopenObject.readAll(匹配模式串,是否关闭) 
 读取所有输出,所有参数可选。  
返回值 1 包含标准输出与错误输出。  
  
不指定参数 @1 时会清除返回值 1 文本首尾的空白字符,  
返回值 2 为错误输出（无错为 null），返回值 3 为进程退出代码。  
如果有输出文本且指定了参数@1，  
则按指定的模式串返回匹配的输出文本，此时无返回值 2、返回值 3。  
  
参数 @2 指定是否关闭进程对象,默认为 true

<a id="processPopenObject.readErr"></a>
### processPopenObject.readErr(-1) 
 读取所有错误输出

<a id="processPopenObject.resume"></a>
### processPopenObject.resume() 
 恢复运行

<a id="processPopenObject.stdErr"></a>
### processPopenObject.stdErr 
 进程标准错误输出  
  
[返回对象:ioFileObject](https://www.aardio.com/zh-cn/doc/library-reference/io/_.html#ioFileObject)

<a id="processPopenObject.stdIn"></a>
### processPopenObject.stdIn 
 进程标准输入  
  
waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，  
或readAll 或 read 函数参数为 -1 时  
会自动关闭目标进程标准输入管道  
  
[返回对象:ioFileObject](https://www.aardio.com/zh-cn/doc/library-reference/io/_.html#ioFileObject)

<a id="processPopenObject.stdOut"></a>
### processPopenObject.stdOut 
 进程标准输出  
  
[返回对象:ioFileObject](https://www.aardio.com/zh-cn/doc/library-reference/io/_.html#ioFileObject)

<a id="processPopenObject.stillActive"></a>
### processPopenObject.stillActive() 
 检查进程是否仍在运行，仍在运行返回 true

<a id="processPopenObject.stopLogResponse"></a>
### processPopenObject.stopLogResponse() 
 清除异步回显文本框的定时器。  
关闭进程对象时也会自动清除此定时器

<a id="processPopenObject.suspend"></a>
### processPopenObject.suspend() 
 暂停进程

<a id="processPopenObject.terminate"></a>
### processPopenObject.terminate() 
 强制关闭进程并释放进程对象

<a id="processPopenObject.textMode"></a>
### processPopenObject.textMode(output,input) 
 参数 @output 指定进程输出是否使用文本模式  
参数 @input 指定进程输入是否使用文本模式  
输入输出默认都是二进制模式  
  
文本模式下`'\x1A'`(CTRL+Z),`'\0'`表示终止文本,  
并且读入时自动转换回车换行为换行,  
写出时自动转换换行符为回车换行

<a id="processPopenObject.wait"></a>
### processPopenObject.wait() 
 等待进程关闭,可选使用一个毫秒值参数设定超时。  
超时或失败返回 null，进程退出则返回值1为true，  
返回值2为标准输出，返回值3为错误输出，返回值4为退出代码  
  
如被调用进程写满输出缓冲区，而调用进程没有读取，  
则被调用进程会一直等待，此函数将无法返回。  
改用 readAll 函数读取输入可避免该问题。

<a id="processPopenObject.waitMainWindow"></a>
### processPopenObject.waitMainWindow 
 等待并返回进程主窗口以及窗口进程ID。

<a id="processPopenObject.waitMainWindow"></a>
### processPopenObject.waitMainWindow(类名,等待窗口句柄) 
 等待并返回进程主窗口以及窗口进程ID。  
所有参数可选。  
可选指定要等待的类名，类名支持完全匹配与模式匹配，忽略大小写。  
不指定类名时忽略隐藏窗口,  
可选指定等待窗口句柄,该窗口关闭时些函数不再等待并直接返回结果

<a id="processPopenObject.waitOne"></a>
### processPopenObject.waitOne() 
 等待进程关闭，不会阻塞当前线程窗口消息。  
可用一个毫秒值参数设定超时。  
  
超时或失败返回 null，进程已退出则返回值1为true，  
返回值2为标准输出,返回值3为错误输出,返回值4为退出代码  
  
如果被调用进程写满输出缓冲区，而调用进程没有读取，  
则被调用进程会一直等待，此函数将无法返回。  
改用 readAll 函数读取输入可避免该问题。  
  
注意如果正在调用异步 logResponse 回显到窗口对象。  
则 waitOne 函数仅返回单个值，不读取任何输出

<a id="processPopenObject.write"></a>
### processPopenObject.write() 
 写数据,支持一个或多个参数。  
成功返回 true，失败返回 null ，错误代码，错误信息。  
如果目标进程已关闭，但标准输入管道未释放仍可能返回 true。  
  
  
waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，  
或readAll 或 read 函数参数为 -1 时  
会自动关闭目标进程标准输入管道  
并导致 write 函数返回 null 值

<a id="processPopenObject.writeClose"></a>
### processPopenObject.writeClose() 
 写数据并关闭进程输入流,  
可选指定一个或多个参数  
不指定参数则直接关闭输入流  
注意:有些进程会一直等待输入流关闭再继续下一下操作

<a id="processPopenObject.writeUtf8"></a>
### processPopenObject.writeUtf8() 
 写入 UTF8 编码数据，不作编码转换，支持一个或多个参数。  
成功返回 true，失败返回 null ，错误代码，错误信息。  
如果目标进程已关闭，但标准输入管道未释放仍可能返回 true。  
  
  
waitOne 函数返回 true，或 each ，expect 等函数检测到进程退出，  
或readAll 或 read 函数参数为 -1 时  
会自动关闭目标进程标准输入管道  
并导致 write 函数返回 null 值
