# chm.compiler 库模块帮助文档

<a id="chm"></a>
## chm 成员列表


<a id="chm.compiler"></a>
### chm.compiler("HHP文件路径") 
 创建可打开CHM工程文件

<a id="chm.compiler"></a>
### chm.compiler() 
 [返回对象:chmCompilerObject](#chmCompilerObject)

<a id="chmCompilerObject"></a>
## chmCompilerObject 成员列表


<a id="chmCompilerObject.compile"></a>
### chmCompilerObject.compile() 
 编译生成CHM文件  
可选在参数中指定输出CHM文件路径

<a id="chmCompilerObject.compiledFile"></a>
### chmCompilerObject.compiledFile 
 输出的CHM文件路径

<a id="chmCompilerObject.contentsFile"></a>
### chmCompilerObject.contentsFile 
 目录文件

<a id="chmCompilerObject.defaultFont"></a>
### chmCompilerObject.defaultFont 
 默认字体,默认为 "Tahoma,10,0"

<a id="chmCompilerObject.defaultTopic"></a>
### chmCompilerObject.defaultTopic 
 默认首页

<a id="chmCompilerObject.defaultWindow"></a>
### chmCompilerObject.defaultWindow 
 默认窗体名字

<a id="chmCompilerObject.displayCompileProgress"></a>
### chmCompilerObject.displayCompileProgress 
 是否显示进度,默认为"Yes"

<a id="chmCompilerObject.fullTextSearch"></a>
### chmCompilerObject.fullTextSearch 
 是否全文搜索,默认为 "Yes"

<a id="chmCompilerObject.hhpInfo"></a>
### chmCompilerObject.hhpInfo 
 配置文件  
  
[返回对象:iniObject](#iniObject)

<a id="chmCompilerObject.indexFile"></a>
### chmCompilerObject.indexFile 
 索引文件

<a id="chmCompilerObject.language"></a>
### chmCompilerObject.language 
 LCID 语言代码

<a id="chmCompilerObject.navigationPaneWidth"></a>
### chmCompilerObject.navigationPaneWidth 
 左侧导航栏宽度,默认为 220

<a id="chmCompilerObject.navigationStyle"></a>
### chmCompilerObject.navigationStyle 
 左侧导航栏样式,数值,  
默认为 0x60420

<a id="chmCompilerObject.onPrint"></a>
### chmCompilerObject.onPrint 
 

```aardio
chmCompilerObject.onPrint = function( str ){
	io.print( str )/*参数为输出信息,  
此回调函数返回 true 继续编译*/
	return true;
}
```



<a id="chmCompilerObject.onProgress"></a>
### chmCompilerObject.onProgress 
 

```aardio
chmCompilerObject.onProgress = function( str ){
	io.print( str )/*参数指示进度,  
此回调函数返回 true 继续编译*/
	return true;
}
```



<a id="chmCompilerObject.title"></a>
### chmCompilerObject.title 
 窗口标题
