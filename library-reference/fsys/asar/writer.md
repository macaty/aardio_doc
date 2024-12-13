# fsys.asar.writer 库模块帮助文档

<a id="fsys.asar"></a>
## fsys.asar 成员列表


<a id="fsys.asar.writer"></a>
### fsys.asar.writer() 
 创建asar文件打包生成器  
  
[返回对象:fsysAsarWriterObject](#fsysAsarWriterObject)

<a id="fsysAsarWriterObject"></a>
## fsysAsarWriterObject 成员列表


<a id="fsysAsarWriterObject.add"></a>
### fsysAsarWriterObject.add() 
 添加文件或目录到asar文件

<a id="fsysAsarWriterObject.allFiles"></a>
### fsysAsarWriterObject.allFiles 
 所有准备添加到asar文件中的文件路径

<a id="fsysAsarWriterObject.clear"></a>
### fsysAsarWriterObject.clear() 
 清空所有文件

<a id="fsysAsarWriterObject.createInfo"></a>
### fsysAsarWriterObject.createInfo() 
 创建文件目录,成功返回this.info  
失败返回null,错误信息

<a id="fsysAsarWriterObject.eachPack"></a>
### fsysAsarWriterObject.eachPack(输出路径,buffer) 
 

```aardio
for(path,size,progress in fsysAsarWriterObject.eachPack("/test.asar")){
	/*path为正在处理的文件相对路径  
size是已处理的文件大小  
progress是进度,0到1之间的小数  
输出路径必须使用.asar后缀,可选在参数@2中指定 buffer*/
}
```



<a id="fsysAsarWriterObject.filter"></a>
### fsysAsarWriterObject.filter 
 

```aardio
fsysAsarWriterObject.filter = function(path){ 
	return /*参数为待添加文件路径,返回布尔值控制是否继续添加*/;
}
```



<a id="fsysAsarWriterObject.info"></a>
### fsysAsarWriterObject.info 
 createInfo函数生成的asar文件目录

<a id="fsysAsarWriterObject.lasterr"></a>
### fsysAsarWriterObject.lasterr 
 执行成功此属性为空,否则是错误信息

<a id="fsysAsarWriterObject.pack"></a>
### fsysAsarWriterObject.pack(输出路径) 
 直接打包为asar文件  
输出路径必须使用.asar后缀  
如果需要获取进度,请使用eachPack迭代器

<a id="fsysAsarWriterObject.remove"></a>
### fsysAsarWriterObject.remove() 
 在已添加的asar的文件列表中移除文件或目录  
返回删除的文件数目

<a id="fsysAsarWriterObject.rootDirectory"></a>
### fsysAsarWriterObject.rootDirectory 
 指定根目录,如果不指定则自动生成此属性  
  
自动生成规则为：  
所有添加的文件路径中取最短路径,如果是目录则设为根路径,  
否则将其父目录设为根路径

<a id="fsysAsarWriterObject.totalSize"></a>
### fsysAsarWriterObject.totalSize 
 在写入asar文件之前,totalSize会更新为所有文件的字节数总和

<a id="fsysAsarWriterObject.treeData"></a>
### fsysAsarWriterObject.treeData() 
 对已添加的文件生成可在treeview控件中显示的数据表
