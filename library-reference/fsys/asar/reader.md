# fsys.asar.reader 库模块帮助文档

<a id="fsys.asar"></a>
## fsys.asar 成员列表

asar是electron里的一种打包文件格式

<a id="fsys.asar.reader"></a>
### fsys.asar.reader 
 asar是electron里的一种打包文件格式

asar格式文件解析器  
支持内存文件,资源文件,硬盘文件等  
支持解析asar格式文件，直接加载到treeview控件，单独提取文件，  
提取全部文件并获取展开进度，支持直接编辑文件数据，  
替换文件内容(不用解包再打包)

<a id="fsys.asar.reader"></a>
### fsys.asar.reader() 
 创建asar格式文件解析器,  
参数中输入asar文件路径

[返回对象:fsysUnasarReaderObject](#fsysUnasarReaderObject)

<a id="fsysUnasarReaderObject"></a>
## fsysUnasarReaderObject 成员列表


<a id="fsysUnasarReaderObject.eachFile"></a>
### fsysUnasarReaderObject.eachFile 
 

```aardio
for path,size,offset,executable,unpacked in fsysUnasarReaderObject.eachFile(){
	/*path:包含上层目录的相对路径  
size:文件大小,已自动移动文件指针到文件所在的偏移位置  
offset: 文件偏移位置,offset为null则为目录或 unpacked 文件,  
executable:是否可执行文件  
unpacked 为true的文件未包含在asar文件内*/	
}
```



<a id="fsysUnasarReaderObject.eachReadBuffer"></a>
### fsysUnasarReaderObject.eachReadBuffer(缓冲区,文件路径) 
 

```aardio
for readSize in fsysUnasarReaderObject.eachReadBuffer(缓冲区对象,"要读取取的文件相对路径") {
	/*迭代器的第一个参数应当是缓冲区  
第二个参数可选指定要读取的文件相对路径,也可以指定要读取的大小  
迭代变量 readSize 表示本次读取的长度*/
}
```



<a id="fsysUnasarReaderObject.eachUnpack"></a>
### fsysUnasarReaderObject.eachUnpack(解压目录,缓冲区) 
 

```aardio
for path,size,progress in fsysUnasarReaderObject.eachUnpack("/ExtractDir") {
	/*迭代器的第一个参数应指下要解压的目录  
可选使用第二个参数定定缓冲区对象  
path为当前正在处理的文件路径,size为已解包总大小,  
progress是使用小数表示的进度,1为已完成  
*/
}
```



<a id="fsysUnasarReaderObject.enum"></a>
### fsysUnasarReaderObject.enum 
 

```aardio
fsysUnasarReaderObject.enum(  
	function(fileName,path,offset,size,executable,unpacked){  
		/*fileName:文件名  
path:包含上层目录的相对路径  
offset:如果是包内文刚表示偏移位置,并已移动文件指针到这里  
size:文件大小  
executable:是否可执行文件  
unpacked 是否外部 unpacked 目录下的文件*/  
	}  
)
```



<a id="fsysUnasarReaderObject.files"></a>
### fsysUnasarReaderObject.files 
 文件信息列表,这是一个数组

<a id="fsysUnasarReaderObject.headerSize"></a>
### fsysUnasarReaderObject.headerSize 
 asar文件头大

<a id="fsysUnasarReaderObject.info"></a>
### fsysUnasarReaderObject.info 
 文件系统信息,这是一个树形结构的表

<a id="fsysUnasarReaderObject.read"></a>
### fsysUnasarReaderObject.read() 
 这个函数的参数与fsys.stream参数的read函数一样用法,  
建议在这里指定要读取的长度  
不指定长度读取一行，但不可以指定负数  
可以指定结构体

<a id="fsysUnasarReaderObject.readFile"></a>
### fsysUnasarReaderObject.readFile() 
 参数中指定文件的相对路径,  
读取并返回文件的全部数据,返回值为字符串值

<a id="fsysUnasarReaderObject.readTo"></a>
### fsysUnasarReaderObject.readTo() 
 读取直到以参数指定的字符串结束,不包含束字符串  
这个函数会一直向后读,而不考虑是不是越过了当前的文件块

<a id="fsysUnasarReaderObject.replace"></a>
### fsysUnasarReaderObject.replace("文件相对路径",替换数据) 
 写入替换数据长度不能大于原数据长度

<a id="fsysUnasarReaderObject.replaceText"></a>
### fsysUnasarReaderObject.replaceText("文件相对路径",替换数据) 
 替换文本并移除回车使用'  
'单换行

<a id="fsysUnasarReaderObject.seek"></a>
### fsysUnasarReaderObject.seek() 
 参数中指定文件的相对路径,  
移动文件指针到此文件在asar文件中的开始位置  
失败返回 null

<a id="fsysUnasarReaderObject.totalSize"></a>
### fsysUnasarReaderObject.totalSize 
 asar中所有文件的大小,不包含asar文件头大小

<a id="fsysUnasarReaderObject.treeData"></a>
### fsysUnasarReaderObject.treeData() 
 返回可以直接加载到treeview视图的数据表

<a id="fsysUnasarReaderObject.unpack"></a>
### fsysUnasarReaderObject.unpack(解压目录) 
 直接解压所有文件到指定目录下  
如果要获取解压的进度,建议使用eachUnpack迭代器

<a id="fsysUnasarReaderObject.this"></a>
## fsysUnasarReaderObject.this 成员列表


<a id="fsysUnasarReaderObject.this.header"></a>
### fsysUnasarReaderObject.this.header 
 文件头,fsys.unasar.header结构体
