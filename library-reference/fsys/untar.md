# fsys.untar 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.untar"></a>
### fsys.untar 
 tar文件操作

<a id="fsys.untar"></a>
### fsys.untar("tar文件路径",存储路径) 
 参数@1可以是 *.tar, *.tar.gz, *.tgz 类型文件路径,  
参数 @1 也可以指定 fsys.stream 或 fsys.file,io.file 等文件对象,  
如果参数@1为文件路径,则参数@2为可选参数

<a id="fsys.untar"></a>
### fsys.untar() 
 [返回对象:fsysUntarfileObject](#fsysUntarfileObject)

<a id="fsysUntarfileObject"></a>
## fsysUntarfileObject 成员列表


<a id="fsysUntarfileObject.blocksCount"></a>
### fsysUntarfileObject.blocksCount 
 数据块总数,  
仅供进度条使用的估算值

<a id="fsysUntarfileObject.close"></a>
### fsysUntarfileObject.close() 
 关闭文件,  
如果解包完成返回true

<a id="fsysUntarfileObject.complete"></a>
### fsysUntarfileObject.complete 
 所有文件是否解包完成

<a id="fsysUntarfileObject.eachBlock"></a>
### fsysUntarfileObject.eachBlock(posRange) 
 

```aardio
for(fileName,writeSize,remainSize,pos in fsysUntarfileObject.eachBlock() ){
	 /*循环展开所有文件块,  
文件块较多时指定posRange参数可以减少循环次数以优化性能  
posRange参数可选指定一个表示进度上限的数值,  
指定posRange参数则返回值pos表示当前进度*/
}
```



<a id="fsysUntarfileObject.lastError"></a>
### fsysUntarfileObject.lastError 
 调用eachBlock解包时，可使用lastError获取错误信息

<a id="fsysUntarfileObject.nextBlock"></a>
### fsysUntarfileObject.nextBlock() 
 释放下一个块,  
成功返回文件名,释放大小,  
同一文件可能需要释放多个文件块

<a id="fsysUntarfileObject.onProgressFile"></a>
### fsysUntarfileObject.onProgressFile 
 

```aardio
fsysUntarfileObject.onProgressFile = function(path){
	/*正在创建文件*/
}
```



<a id="fsysUntarfileObject.onProgressFolder"></a>
### fsysUntarfileObject.onProgressFolder 
 

```aardio
fsysUntarfileObject.onProgressFolder = function(path){
	/*正在创建目录*/
}
```



<a id="fsysUntarfileObject.utf8"></a>
### fsysUntarfileObject.utf8 
 tar 文件名是否使用 UTF8 编码。  
设为 false ，表示文件名使用 ANSI 多字节编码。  
设为 true 表示文件名使用 utf8 编码,  
设为 null 则自动检测。  
目前 tar 文件一般使用 UTF-8 编码文件名，使用 ANSI 编码不常见。
