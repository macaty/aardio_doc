# process.vswhere 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.vswhere"></a>
### process.vswhere() 
 获取 VS2017 以及之后版本的安装信息,返回表对象,  
参数可以是一个名多个字符串类型的命令行参数,  
只有一个参数时可以包含空格,不会添加双引号或转义符,  
如果有多个参数,则包含空格的参数按命令行参数规则添加双引号,  
不指定参数时默认为"-latest"

<a id="process.vswhere"></a>
## process.vswhere 成员列表

用于获取 VS2017 以及之后版本的安装信息  
[官网示例]( https://github.com/microsoft/vswhere/wiki/Examples )   
检测 VC++ 运行时请使用库 sys.vc14

<a id="process.vswhere.dev"></a>
### process.vswhere.dev() 
 打开 VS 开发人员命令行窗口进程,  
可选在参数中指定工作目录  
  
[返回对象:processObject](https://www.aardio.com/zh-cn/doc/library-reference/process/_.html#processObject)

<a id="process.vswhere.pdev"></a>
### process.vswhere.pdev() 
 打开 VS 开发人员命令行管道进程,  
可选在参数中指定工作目录  
  
[返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)
