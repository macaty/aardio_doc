# System.Type 库模块帮助文档

<a id="System.Type"></a>
## System.Type 成员列表

.NET 类型类

<a id="System.Type.?"></a>
### System.Type.? 
 .NET 名字空间、类、结构体的成员，  
可访问成员名字空间、类、枚举、静态属性或字段，  
导入的类可用于构造 .Net 对象，传回 .Net 则自动转为该类的 Type 对象  
  
[返回对象:dotNetNameSpaceObject](https://www.aardio.com/zh-cn/doc/library-reference/dotNet/appDomain.html#dotNetNameSpaceObject)

<a id="System.Type.GetType"></a>
### System.Type.GetType("字符串参数") 
 获取指定的类型，参数指定类型完整名称。  
所有 .NET 对象提供 GetType 函数可获取对象类型。  
System 库也自动导入了常用的 .NET 基础数据类型。  
aardio 中导入的 .NET 类也可直接作为 System.Type 类型的调用参数使用