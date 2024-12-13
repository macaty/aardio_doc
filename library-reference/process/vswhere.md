[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.vswhere 库模块帮助文�?
## process 成员列表

### process.vswhere()

获取 VS2017 以及之后版本的安装信�?返回表对�?

参数可以是一个名多个字符串类型的命令行参�?

只有一个参数时可以包含空格,不会添加双引号或转义�?

如果有多个参�?则包含空格的参数按命令行参数规则添加双引�?

不指定参数时默认�?-latest"

## process.vswhere 成员列表

用于获取 VS2017 以及之后版本的安装信�?
[官网示例](https://github.com/microsoft/vswhere/wiki/Examples)

检�?VC++ 运行时请使用�?sys.vc14

### process.vswhere.dev()

打开 VS 开发人员命令行窗口进程,

可选在参数中指定工作目�?
[返回对象:processObject](_.html#processObject)

### process.vswhere.pdev()

打开 VS 开发人员命令行管道进程,

可选在参数中指定工作目�?
[返回对象:processPopenObject](popen.html#processPopenObject)

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/vswhere.md)

