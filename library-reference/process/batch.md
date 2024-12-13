[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.batch 库模块帮助文�?
aardio批处理模板语�?
[aardio 模板语法](../../language-reference/templating/syntax.html)

批处理代码中aardio代码必须置于 <? ..... ?> 内部，类�?PHP 的模板语�?
但是要注意与PHP的区别是，aardio规定开始标�?<? 必须独立不能紧跟英文字母�?例如 <?xml..... 不是合法的aardio代码段开始标�?aardio会认为这是一个XML标记)�?另外，aardio总是忽略文件开始的空白字符（包含空格、制表符，换行）�?
aardio�?? ..... ?> 之外的部分解析为�?print("批处理代�?) 以调用全局函数print输出批处理代码�?print允许接收多个参数，并且对每个参数调用tostring()转换为字符串�?
可以使用 <?=表达�?\> 输出文本，该代码的作用类似于 print( 表达�?) , 下面的写法也是允许的
<?
= 表达�??>

批处理文件应当并且建议以UTF-8编码保存，process.batch 会自动转换为 ANSI 编码执行�?
[aardio + 批处理混合编程指南](https://www.aardio.com/zh-cn/doc/library-guide/std/process/batch.md)

## process 成员列表

### process.batch()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.batch(script,ownerArgs,workDir)

```aardio aardio
script 参数可以是批处理脚本或批处理文件，支持资源文�?
支持使用 aardio 模板语法嵌入 aardio 代码,
批处理代码会使用自动生成的临时文件加载执�?对象释放时自动删除临时文�?
可选用 @ownerArgs 参数指定aardio 模板代码可以调用�?owner 参数,
@ownerArgs 的数组成员传递给批处理作为启动参�?可用%1 %2 ...接收,
可选用 @workDir 指定工作目录,默认为应用程序目�?
```

## process.batch 成员列表

用于加载批处理代码，支持使用 aardio 模板语法嵌入 aardio 代码

创建批处理管道进�?

用于加载批处理代码，支持使用 aardio 模板语法嵌入 aardio 代码

优先调用 64 位命令请改为 process.batch.wow64

### process.batch.wow64

创建批处理管道进�?

禁用64位文件与注册表重定向,

�?4位系统会返回64位进�?兼容32位系�?

用于加载批处理代码，支持使用 aardio 模板语法嵌入 aardio 代码

### process.batch.wow64()

[返回对象:processPopenObject](popen.html#processPopenObject)

### process.batch.wow64(script,ownerArgs,workDir)

```aardio aardio
script 参数可以是批处理脚本或批处理文件，支持资源文�?
支持使用 aardio 模板语法嵌入 aardio 代码,
批处理代码会使用自动生成的临时文件加载执�?对象释放时自动删除临时文�?
可选用 @ownerArgs 参数指定aardio 模板代码可以调用�?owner 参数,
@ownerArgs 的数组成员传递给批处理作为启动参�?可用%1 %2 ...接收,
可选用 @workDir 指定工作目录,默认为应用程序目�?
```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/batch.md)

