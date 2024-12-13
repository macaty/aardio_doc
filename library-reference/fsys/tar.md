# fsys.tar 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.tar"></a>
### fsys.tar 
 tar文件打包

<a id="fsys.tar"></a>
### fsys.tar("tar文件路径","打包根目录") 
 参数一可以是tar文件或tar.gz文件路径,  
如果省略根目录参数,打包首个文件则取其父目录为根目录

<a id="fsys.tar"></a>
### fsys.tar() 
 [返回对象:fsysTarfileObject](#fsysTarfileObject)

<a id="fsysTarfileObject"></a>
## fsysTarfileObject 成员列表


<a id="fsysTarfileObject.addFile"></a>
### fsysTarfileObject.addFile("文件路径") 
 添加文件,  
必须是指定根目录下的文件

<a id="fsysTarfileObject.addFolder"></a>
### fsysTarfileObject.addFolder("文件路径") 
 添加文件,  
必须是指定根目录下的子目录

<a id="fsysTarfileObject.close"></a>
### fsysTarfileObject.close() 
 关闭文件

<a id="fsysTarfileObject.onWriteDir"></a>
### fsysTarfileObject.onWriteDir 
 

```aardio
fsysTarfileObject.onWriteDir = function( filename ){
	/*添加目录回调函数*/
}
```



<a id="fsysTarfileObject.onWriteFile"></a>
### fsysTarfileObject.onWriteFile 
 

```aardio
fsysTarfileObject.onWriteFile = function( filename ){
	/*添加目录回调函数*/
}
```



<a id="fsysTarfileObject.onWriteFileBock"></a>
### fsysTarfileObject.onWriteFileBock 
 

```aardio
fsysTarfileObject.onWriteFileBock = function( filename,writeSize,fileSize){
	io.print( filename,writeSize,fsys.formatSize(fileSize) );/*写入文件块回调函数*/
}
```



<a id="fsysTarfileObject.pack"></a>
### fsysTarfileObject.pack(目录路径,文件通配符,是否添加该目录名字) 
 打包目录下的所有文件

<a id="fsysTarfileObject.utf8"></a>
### fsysTarfileObject.utf8 
 是否使用 UTF8 编码文件名。  
默认启用 UTF8 编码，建议保持默认值。
