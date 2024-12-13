# fsys.fileInfo 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.fileInfo"></a>
### fsys.fileInfo() 
 [返回对象:fsysfileinfoObject](#fsysfileinfoObject)

<a id="fsys.fileInfo"></a>
### fsys.fileInfo(文件或目录路径) 
 获取文件信息,唯一ID，  
即使传入空路径，或不存在的路径,都会返回对象(但id属性为空),  
可用于判断文件路径是否指向同一真实文件

<a id="fsys.fileInfo"></a>
## fsys.fileInfo 成员列表

获取文件信息(包含唯一ID)

<a id="fsys.fileInfo.same"></a>
### fsys.fileInfo.same(文件路径,文件路径2) 
 检测两个文件路径是否指向同一真实文件

<a id="fsysfileinfoObject"></a>
## fsysfileinfoObject 成员列表


<a id="fsysfileinfoObject.accessTime"></a>
### fsysfileinfoObject.accessTime 
 文件最后访问时间  
!filefiletimes.;

<a id="fsysfileinfoObject.attributes"></a>
### fsysfileinfoObject.attributes 
 文件属性，数值

<a id="fsysfileinfoObject.creationTime"></a>
### fsysfileinfoObject.creationTime 
 文件创建时间  
  
[返回对象:filefiletimesObject](#filefiletimesObject)

<a id="fsysfileinfoObject.id"></a>
### fsysfileinfoObject.id 
 文件唯一ID，字符串值  
可用于唯一标识一个硬盘文件

<a id="fsysfileinfoObject.index"></a>
### fsysfileinfoObject.index 
 文件索引,math.size64对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="fsysfileinfoObject.numberOfLinks"></a>
### fsysfileinfoObject.numberOfLinks 
 链接数

<a id="fsysfileinfoObject.size"></a>
### fsysfileinfoObject.size 
 文件大小,math.size64对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="fsysfileinfoObject.volumeSerial"></a>
### fsysfileinfoObject.volumeSerial 
 所在分区序列号

<a id="fsysfileinfoObject.writeTime"></a>
### fsysfileinfoObject.writeTime 
 文件最后修改时间  
  
[返回对象:filefiletimesObject](#filefiletimesObject)
