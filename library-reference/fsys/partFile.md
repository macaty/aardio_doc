# fsys.partFile 库模块帮助文档

<a id="fsys.partFile"></a>
## fsys.partFile 成员列表

分卷文件操作

<a id="fsys.partFile.group"></a>
### fsys.partFile.group("分卷文件路径") 
 自动查找关联分卷文件  
并返回排序好的文件名数组  
文件名数组序号最小的在数组开始  
数组包含文件名到完整路径的键值映射  
返回值2为去掉分卷号路径,可作为合并目标路径

<a id="fsys.partFile.join"></a>
### fsys.partFile.join("合并目标文件",待合并文件) 
 合并文件,成功返回true  
待合并文件可以是一个数组或多个参数  
如果未指定参数@2,则参数@1必须是一个分卷文件路径  
仅指定一个分卷路径时自动设定所有参数  
该函数使用追加模式,不清空目标文件  
可选用 fsys.partFile.onCopyData 显示进度

<a id="fsys.partFile.joiner"></a>
### fsys.partFile.joiner("目标文件路径","w+b",读写块大小) 
 创建合并文件对象  
除参数@1以外其他参数可选  
参数@2为打开文件模式,默认为"w+b"即重建目标文件  
块大小默认为10MB

<a id="fsys.partFile.joiner"></a>
### fsys.partFile.joiner() 
 [返回对象:partFileJoinerObject](#partFileJoinerObject)

<a id="fsys.partFile.onCopyData"></a>
### fsys.partFile.onCopyData 
 

```aardio
fsys.partFile.onCopyData = function(path,writeSize,blocks,count){
	io.print( path,fsys.formatSize(writeSize),blocks,count )
}
```



<a id="fsys.partFile.search"></a>
### fsys.partFile.search("搜索目录",是否查找子目录) 
 查找分卷文件,  
返回一个表,键为未分卷文件名,值为分卷文件路径数组,该数组已排序  
除参数一以外,其他参数可选,默认不查找子目录  
参数3,4请保持默认值,高级用法请查看该函数源码

<a id="fsys.partFile.split"></a>
### fsys.partFile.split("被拆分文件路径",分卷文件大小,存储目录) 
 拆分文件,成功返回true  
不指定目录则取被拆分文件所在目录  
可选用 fsys.partFile.onCopyData 显示进度

<a id="fsys.partFile.splitter"></a>
### fsys.partFile.splitter("拆分源文件路径",分卷文件大小,读写块大小) 
 拆分文件  
读写块大小默认为10MB

<a id="fsys.partFile.splitter"></a>
### fsys.partFile.splitter() 
 [返回对象:partFileSplitterObject](#partFileSplitterObject)

<a id="partFileJoinerObject"></a>
## partFileJoinerObject 成员列表


<a id="partFileJoinerObject.append"></a>
### partFileJoinerObject.append("合并文件路径") 
 支持不定个参数指定的文件路径  
或者使用一个参数传入待合并文件路径数组  
将参数传入的文件读取并追加到合并目标文件  
成功返回true

<a id="partFileJoinerObject.close"></a>
### partFileJoinerObject.close() 
 关闭合并目标文件

<a id="partFileJoinerObject.onCopyData"></a>
### partFileJoinerObject.onCopyData 
 

```aardio
partFileJoinerObject.onCopyData = function(path,writeSize,blocks,count){
	io.print( path,fsys.formatSize(writeSize),blocks,count )
}
```



<a id="partFileSplitterObject"></a>
## partFileSplitterObject 成员列表


<a id="partFileSplitterObject.close"></a>
### partFileSplitterObject.close() 
 关闭源文件

<a id="partFileSplitterObject.formatName"></a>
### partFileSplitterObject.formatName 
 生成分卷文件名的格式化串  
默认为 "源文件名" + ".%03d"

<a id="partFileSplitterObject.onCopyData"></a>
### partFileSplitterObject.onCopyData 
 

```aardio
partFileSplitterObject.onCopyData = function(path,writeSize,blocks,count){
	io.print( path,fsys.formatSize(writeSize),blocks,count )
}
```



<a id="partFileSplitterObject.split"></a>
### partFileSplitterObject.split("创建分卷文件目录",分卷初始序号) 
 拆分文件,所有参数可选  
默认使用源文件所在目录存储分卷文件,  
初始分卷序号默认为1
