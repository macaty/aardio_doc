# fsys.version 库模块帮助文档


<details>  <summary>转换字符串规则</summary>  <p>
fsys.version 对象可作为参数传入 tostring 函数转换为字符串格式。
tostring 函数的第 2 个参数可选指定格式化串（ 语法与 string.format 函数相同）。
如果不指定格式化串，默认格式化串为 "%d.%d.%d.%d"，
如果 revision 为 0 ，默认格式化串为 "%d.%d.%d"。
如果同时 build 也为 0，默认格式化串为 "%d.%d"。
</p></details>


<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.version"></a>
### fsys.version("0.0.0.0") 
 创建版本号,支持大于小于相等比较,可转换为字符串或数值,  
参数可以为空,或者数值,字符串,表对象等  
如果参数为字符串,忽略无关文本,版本号后的文本提取为releaseType  
文本中提取的版本号为2~4组以圆点、或其他标点、空格分隔的数值

<a id="fsys.version"></a>
### fsys.version() 
 [返回对象:fsysVersionObject](#fsysVersionObject)

<a id="fsys.version"></a>
## fsys.version 成员列表

用于创建与解析版本号。  
fsys.version 对象可作为参数传入 tostring 函数转换为字符串格式。  
tostring 函数的第 2 个参数可选指定格式化串（ 语法与 string.format 函数相同）。  
如果不指定格式化串，默认格式化串为 "%d.%d.%d.%d"，  
如果 revision 为 0 ，默认格式化串为 "%d.%d.%d"。  
如果同时 build 也为 0，默认格式化串为 "%d.%d"

<a id="fsys.version.getInfo"></a>
### fsys.version.getInfo() 
 [返回对象:fsysVersionInfoObject](#fsysVersionInfoObject)

<a id="fsys.version.getInfo"></a>
### fsys.version.getInfo(执行文件路径) 
 返回版本信息

<a id="fsysVersionInfoObject"></a>
## fsysVersionInfoObject 成员列表


<a id="fsysVersionInfoObject.codePage"></a>
### fsysVersionInfoObject.codePage 
 代码页

<a id="fsysVersionInfoObject.companyName"></a>
### fsysVersionInfoObject.companyName 
 公司名

<a id="fsysVersionInfoObject.companyNameUnicode"></a>
### fsysVersionInfoObject.companyNameUnicode 
 公司名,Unicode编码

<a id="fsysVersionInfoObject.fileDescription"></a>
### fsysVersionInfoObject.fileDescription 
 文件描述

<a id="fsysVersionInfoObject.fileDescriptionUnicode"></a>
### fsysVersionInfoObject.fileDescriptionUnicode 
 文件描述,Unicode编码

<a id="fsysVersionInfoObject.fileVersion"></a>
### fsysVersionInfoObject.fileVersion 
 [返回对象:fsysVersionObject](#fsysVersionObject)

<a id="fsysVersionInfoObject.internalName"></a>
### fsysVersionInfoObject.internalName 
 内部名

<a id="fsysVersionInfoObject.internalNameUnicode"></a>
### fsysVersionInfoObject.internalNameUnicode 
 内部名,Unicode编码

<a id="fsysVersionInfoObject.language"></a>
### fsysVersionInfoObject.language 
 语言代码

<a id="fsysVersionInfoObject.originalFileName"></a>
### fsysVersionInfoObject.originalFileName 
 原始文件名

<a id="fsysVersionInfoObject.originalFileNameUnicode"></a>
### fsysVersionInfoObject.originalFileNameUnicode 
 原始文件名,Unicode编码

<a id="fsysVersionInfoObject.productName"></a>
### fsysVersionInfoObject.productName 
 产品名称

<a id="fsysVersionInfoObject.productNameUnicode"></a>
### fsysVersionInfoObject.productNameUnicode 
 产品名称,Unicode编码

<a id="fsysVersionInfoObject.productVersion"></a>
### fsysVersionInfoObject.productVersion 
 [返回对象:fsysVersionObject](#fsysVersionObject)

<a id="fsysVersionObject"></a>
## fsysVersionObject 成员列表


<a id="fsysVersionObject.build"></a>
### fsysVersionObject.build 
 发行版本号中用于表示编译版本或补丁版本,16位数值  
该版本号表示兼容的问题修正

<a id="fsysVersionObject.major"></a>
### fsysVersionObject.major 
 发行版本号中的主版本号,8位数值  
表示较大或不兼容的改动

<a id="fsysVersionObject.minor"></a>
### fsysVersionObject.minor 
 发行版本号中的副版本号,8位数值  
表示向下兼容的改动或新增功能

<a id="fsysVersionObject.releaseType"></a>
### fsysVersionObject.releaseType 
 发行版本类型,例如:"alpha", "beta","RC" 等  
可选字段,字符串类型

<a id="fsysVersionObject.revision"></a>
### fsysVersionObject.revision 
 内部修订版本号  
注意版本号转换为一个数值时忽略此版本号

<a id="fsysVersionObject.valid"></a>
### fsysVersionObject.valid() 
 版本号是否有效
