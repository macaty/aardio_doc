# unqlite.script 库模块帮助文档

<a id="unqliteJx9Object"></a>
## unqliteJx9Object 成员列表


<a id="unqliteJx9Object.configErrLog"></a>
### unqliteJx9Object.configErrLog() 
 返回错误信息

<a id="unqliteJx9Object.configImportPath"></a>
### unqliteJx9Object.configImportPath("搜索路径") 
 设置include,import搜索路径  
默认为应用程序目录

<a id="unqliteJx9Object.configOutput"></a>
### unqliteJx9Object.configOutput(回调函数) 
 

```aardio
unqliteJx9Object.configOutput( function( output ){  
	io.print( "脚本输出", output )  
} )
```



<a id="unqliteJx9Object.context"></a>
### unqliteJx9Object.context() 
 [返回对象:unqliteJx9contextObject](#unqliteJx9contextObject)

<a id="unqliteJx9Object.context"></a>
### unqliteJx9Object.context(pCtx) 
 用于自定义函数中创建context对象

<a id="unqliteJx9Object.createFunction"></a>
### unqliteJx9Object.createFunction(函数名,回调函数) 
 

```aardio
unqliteJx9Object.createFunction("/*指定函数名*/",function(pCtx,...){  
	var ctx = unqliteJx9Object.context(pCtx);  
	  
} )
```



<a id="unqliteJx9Object.deleteFunction"></a>
### unqliteJx9Object.deleteFunction("函数名") 
 删除自定义函数

<a id="unqliteJx9Object.exec"></a>
### unqliteJx9Object.exec() 
 执行脚本

<a id="unqliteJx9Object.extractVariable"></a>
### unqliteJx9Object.extractVariable("变量名") 
 获取变量的值

<a id="unqliteJx9Object.release"></a>
### unqliteJx9Object.release() 
 关闭虚拟机

<a id="unqliteJx9Object.reset"></a>
### unqliteJx9Object.reset() 
 重置

<a id="unqliteJx9contextObject"></a>
## unqliteJx9contextObject 成员列表


<a id="unqliteJx9contextObject.functionName"></a>
### unqliteJx9contextObject.functionName() 
 返回当前函数名

<a id="unqliteJx9contextObject.print"></a>
### unqliteJx9contextObject.print("信息", ... ) 
 用于输出信息,  
等价于在Jx9脚本中调用print函数

<a id="unqliteJx9contextObject.rand"></a>
### unqliteJx9contextObject.rand() 
 返回随机数

<a id="unqliteJx9contextObject.randStr"></a>
### unqliteJx9contextObject.randStr(长度) 
 返回随机字符串

<a id="unqliteJx9contextObject.throwError"></a>
### unqliteJx9contextObject.throwError("错误信息",错误代码 ) 
 抛出Jx9脚本异常,  
参数2以 _SXERR_ 前缀常量指定错误代码
