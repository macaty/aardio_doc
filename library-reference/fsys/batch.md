# fsys.batch 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.batch"></a>
### fsys.batch 
 批量替换文件数据

创建批处理对象。

<a id="fsys.batch"></a>
### fsys.batch() 
 [返回对象:fsysBatchObject](#fsysBatchObject)

<a id="fsys.batch"></a>
### fsys.batch(批处理目录,文件名,文件编码) 
 创建批处理对象。  
参数 @1 指定目标目录。  
参数 @2 指定文件名，支持通配符，例如 "*.*"，也可以指定文件名数组。  
参数 #2 可选指定 enumText 函数读取文件的默认编码。

<a id="fsysBatchObject"></a>
## fsysBatchObject 成员列表


<a id="fsysBatchObject.dir"></a>
### fsysBatchObject.dir 
 设置批处理目录

<a id="fsysBatchObject.enumBinary"></a>
### fsysBatchObject.enumBinary(回调函数,路径模式匹配串) 
 

```aardio
fsysBatchObject.enumBinary(  
	function(content,fullpath){   
		return /*返回 string 类型数据新文件,返回false 终止,返回空忽略*/;   
	}   
	/*,可选指定路径模式匹配串,可选指定文件编码*/  
)
```



<a id="fsysBatchObject.enumText"></a>
### fsysBatchObject.enumText(回调函数,路径模式匹配串,文件编码) 
 

```aardio
fsysBatchObject.enumText(  
	function(utf8Text,codepage,fullpath){   
		var utf8Text,count = string.replace(utf8Text,"@查找字符串","替换字符串");  
		if(count){  
			return utf8Text,codepage;/*返回文本与 codepage 以指定内码更新文件。  
返回值 2 也可返回指定 Unicode 编码的字符串，例如 "UTF-8-NOBOM"。  
仅返回文本以 UTF-8 编码更新文件,  
返回 false 终止,返回空忽略*/  
		}   
	}   
)
```



<a id="fsysBatchObject.enumTo"></a>
### fsysBatchObject.enumTo(回调函数,目标目录,路径模式匹配串) 
 

```aardio
fsysBatchObject.enumTo(  
	function(dstPath,srcPath){  
		fsys.copy(srcPath,dstPath);  
		return /*srcPath 为源文件路径,  
dstPath 为目标文件路径,  
此函数根据源目录生成目标目录下相同结构的路径,  
自动在目标目录下建立相同的子目录结构,  
得不会复制或删除文件文件  
返回 false 终止*/    
	},"/目标目录"  
)
```



<a id="fsysBatchObject.wildcard"></a>
### fsysBatchObject.wildcard 
 设置批处理文件名掩码  
默认为"*.*"
