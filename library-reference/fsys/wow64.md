# fsys.wow64 库模块帮助文档

<a id="fsys.wow64"></a>
## fsys.wow64 成员列表

64 位文件与注册表重定位管理

<a id="fsys.wow64.disableRedirection"></a>
### fsys.wow64.disableRedirection( 回调函数 ) 
 

```aardio
fsys.wow64.disableRedirection(  
    function(){  
        /*如果运行于64位暂时禁用文件与注册表重定向  
此函数兼容32位系统  
返回回调函数的首个返回值*/  
    }  
)
```



<a id="fsys.wow64.disableRedirectionEx"></a>
### fsys.wow64.disableRedirectionEx( 回调函数 ) 
 返回一个调用回调函数并与回调函数拥有相同功能的新函数,  
执行返回函数时禁用文件与注册表重定向

<a id="fsys.wow64.process"></a>
### fsys.wow64.process 
 禁用64位文件重定向并运行执行文件或关联文档，兼容32位系统,  
失败则返回 null,错误信息,错误代码  
成功返回进程对象

<a id="fsys.wow64.process"></a>
### fsys.wow64.process( ,系统命令行) 
 如果省略第一个参数,并仅指定命令行,则作为系统命令行启动运行

<a id="fsys.wow64.process"></a>
### fsys.wow64.process() 
 [返回对象:processObject](https://www.aardio.com/zh-cn/doc/library-reference/process/_.html#processObject)

<a id="fsys.wow64.process"></a>
### fsys.wow64.process(执行文件,参数,STARTUPINFO) 
 STARTUPINFO 参数为 process.STARTUPINFO 结构体,可选参数  
如果该参数是普通 table 对象.将自动创建为 STARTUPINFO 结构体

<a id="fsys.wow64.process"></a>
### fsys.wow64.process(执行文件,命令行参数,更多命令行参数,...) 
 命令行参数可以是一个数组或多个字符串参数  
如果命令行参数有多个,则以空格分隔自动合并,  
合并时遇到需要转义的参数则进行转义处理并且首尾添加双引号  
首尾已经有引号的参数不作转义处理,  
命令参数最大长度为8191/0x1FFFF个字符
