[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# unqlite.script 库模块帮助文�?
## unqliteJx9Object 成员列表

### unqliteJx9Object.configErrLog()

返回错误信息

### unqliteJx9Object.configImportPath("搜索路径")

设置include,import搜索路径

默认为应用程序目�?
### unqliteJx9Object.configOutput(回调函数)

```aardio aardio
unqliteJx9Object.configOutput( function( output ){
    io.print( "脚本输出", output )
} )

```

### unqliteJx9Object.context()

[返回对象:unqliteJx9contextObject](#unqliteJx9contextObject)

### unqliteJx9Object.context(pCtx)

用于自定义函数中创建context对象

### unqliteJx9Object.createFunction(函数�?回调函数)

```aardio aardio
unqliteJx9Object.createFunction("/*指定函数�?/",function(pCtx,...){
    var ctx = unqliteJx9Object.context(pCtx);

} )

```

### unqliteJx9Object.deleteFunction("函数�?)

删除自定义函�?
### unqliteJx9Object.exec()

执行脚本

### unqliteJx9Object.extractVariable("变量�?)

获取变量的�?
### unqliteJx9Object.release()

关闭虚拟�?
### unqliteJx9Object.reset()

重置

## unqliteJx9contextObject 成员列表

### unqliteJx9contextObject.functionName()

返回当前函数�?
### unqliteJx9contextObject.print("信息", ... )

用于输出信息,

等价于在Jx9脚本中调用print函数

### unqliteJx9contextObject.rand()

返回随机�?
### unqliteJx9contextObject.randStr(长度)

返回随机字符�?
### unqliteJx9contextObject.throwError("错误信息",错误代码 )

抛出Jx9脚本异常,

参数2�?_SXERR_ 前缀常量指定错误代码

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/unqlite/script.md)

