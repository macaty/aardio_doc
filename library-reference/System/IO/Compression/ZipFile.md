# System.IO.Compression.ZipFile 库模块帮助文档

<a id="System.IO.Compression.ZipFile"></a>
## System.IO.Compression.ZipFile 成员列表

.Net System.IO.Compression.ZipFile 名字空间  
支持 .NET 4.5 及以上，Win10 以及更新的系统已自带

<a id="System.IO.Compression.ZipFile.?"></a>
### System.IO.Compression.ZipFile.? 
 .NET 名字空间、类、结构体的成员，  
可访问成员名字空间、类、枚举、静态属性或字段，  
导入的类可用于构造 .NET 对象，传回 .NET 则自动转为该类的 Type 对象  
  
[返回对象:dotNetNameSpaceObject](https://www.aardio.com/zh-cn/doc/library-reference/dotNet/appDomain.html#dotNetNameSpaceObject)

<a id="System.IO.Compression.ZipFile.CreateFromDirectory"></a>
### System.IO.Compression.ZipFile.CreateFromDirectory 
 简单压缩目录到 zip 文件，  
如果需要更多功能请改用 zlib.zip 库

<a id="System.IO.Compression.ZipFile.CreateFromDirectory"></a>
### System.IO.Compression.ZipFile.CreateFromDirectory(源目录路径,zip文件路径,压缩级别,是否包含根目录名) 
 简单压缩目录到 zip 文件  
如果 zip 文件存在会报错，请先用 io.exist 判断一下,  
路径请用 io.fullpath 转换为绝对路径。  
压缩级别为 0 表示优化，为 1 表示速度优化，为 2 不压缩

<a id="System.IO.Compression.ZipFile.ExtractToDirectory"></a>
### System.IO.Compression.ZipFile.ExtractToDirectory 
 简单解压缩 zip 文件，  
如果需要更多功能请改用 zlib.unzip 库

<a id="System.IO.Compression.ZipFile.ExtractToDirectory"></a>
### System.IO.Compression.ZipFile.ExtractToDirectory(zip文件路径,目标目录路径) 
 简单解压缩 zip 文件  
路径请用 io.fullpath 转换为绝对路径

<a id="System.IO.Compression.ZipFile.assembly"></a>
### System.IO.Compression.ZipFile.assembly 
 导入此 .NET 名字空间的程序集对象。  
  
[返回对象:dotNetCrlAssemblyObject](#dotNetCrlAssemblyObject)
