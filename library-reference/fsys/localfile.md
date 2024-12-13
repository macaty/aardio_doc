# fsys.localfile 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.localfile"></a>
### fsys.localfile 
 如果参数传入的不是硬盘文件路径,而是资源文件或内存数据  
则创建临时文件以获取本地路径

<a id="fsys.localfile"></a>
### fsys.localfile("/res/...") 
 创建资源文件路径本地化对象,  
该对象用于保证资源文件返回的是本地路径  
路径会保持原来的文件名

<a id="fsys.localfile"></a>
### fsys.localfile() 
 [返回对象:fsysLocalfileObject](#fsysLocalfileObject)

<a id="fsys.localfile"></a>
### fsys.localfile(内存数据,".默认后缀名") 
 参数@1长度大于260字节,  
则使用指定的后缀名生成临时文件保存该数据

<a id="fsysLocalfileObject"></a>
## fsysLocalfileObject 成员列表


<a id="fsysLocalfileObject.bindObject"></a>
### fsysLocalfileObject.bindObject(对象) 
 绑定使用该文件的对象

<a id="fsysLocalfileObject.free"></a>
### fsysLocalfileObject.free() 
 删除临时文件

<a id="fsysLocalfileObject.loadDll"></a>
### fsysLocalfileObject.loadDll() 
 [返回对象:dllModuleObject](https://www.aardio.com/zh-cn/doc/library-reference/raw/_.html#dllModuleObject)

<a id="fsysLocalfileObject.loadDll"></a>
### fsysLocalfileObject.loadDll(调用约定) 
 加载 DLL

<a id="fsysLocalfileObject.path"></a>
### fsysLocalfileObject.path() 
 本地化的完整路径

<a id="fsysLocalfileObject.temp"></a>
### fsysLocalfileObject.temp() 
 如果创建了临时文件则返回临时目录  
如果该函数返回值为空则path为普通路径
