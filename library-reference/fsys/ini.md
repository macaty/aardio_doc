# fsys.ini 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.ini"></a>
### fsys.ini 
 用于 ini 文件读写  
fsys.ini 使用 UTF-8 编码读写 ini 文件，  
但操作系统自动转换为 ANSI 编码存储。  
  
如果不是为了兼容原来的 ANSI 程序，不必要使用 ini 文件格式。  
web.json, fsys.config 这些格式使用的都是 UTF-8 编码，  
使用也更方便。

<a id="fsys.ini"></a>
### fsys.ini("字符串参数") 
 打开 ini 文件对象

<a id="fsys.ini"></a>
### fsys.ini() 
 [返回对象:fsysiniObject](#fsysiniObject)

<a id="fsysiniObject"></a>
## fsysiniObject 成员列表


<a id="fsysiniObject.eachSection"></a>
### fsysiniObject.eachSection() 
 [返回对象:inisectionObject](#inisectionObject)



```aardio
for section in fsysiniObject.eachSection(/*可选用模式匹配搜索*/) { 
	for(k,v in section){
		/*k为键,为值,section为当前遍历到的小节*/
	}
}
```



<a id="fsysiniObject.getSection"></a>
### fsysiniObject.getSection("字符串参数") 
 读取或添加小节对象,可直接读写成员

<a id="fsysiniObject.getSection"></a>
### fsysiniObject.getSection() 
 [返回对象:inisectionObject](#inisectionObject)

<a id="fsysiniObject.getSectionNames"></a>
### fsysiniObject.getSectionNames() 
 获取所有小节名字,返回字符串数组.

<a id="fsysiniObject.read"></a>
### fsysiniObject.read("小节名","键名") 
 读取 ini 指字小节的指键键  
可选使用参数 @3 指定默认值  
成功返回读取的值,失败返回 null  
  
如果指定键名成功应返回字符串值  
不指定键名成功返回小节下所有键值组成的字符串数组  
返回字符串、数组、null 时都可以使用#操作符取长度,null 的长度为0，  
null,0 转换为逻辑值都等价于 false

<a id="fsysiniObject.readKeys"></a>
### fsysiniObject.readKeys("小节名") 
 返回指定小节中所有键名组成的字符串数组

<a id="fsysiniObject.readSectionNames"></a>
### fsysiniObject.readSectionNames() 
 返回小节名称组成的字符串数组

<a id="fsysiniObject.write"></a>
### fsysiniObject.write("小节名","键名","新值") 
 写 ini 文件  
健名为 null 删除指定的小节  
值为 null 删除指定的键名

<a id="inisectionObject"></a>
## inisectionObject 成员列表


<a id="inisectionObject.?"></a>
### inisectionObject.? 
 可输入任意属性名,读写小节属性,  
成功返回字符串值,失败返回null

<a id="inisectionObject.name"></a>
### inisectionObject.name() 
 返回小节名称

<a id="inisectionObject.save"></a>
### inisectionObject.save() 
 保存更改到ini文件
