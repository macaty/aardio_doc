# System.Numerics 库模块帮助文档

<a id="System.Numerics"></a>
## System.Numerics 成员列表

.NET 数值扩展类型名字空间 System.Numerics。  
.NET 4.0 开始支持。Win10 开始自带 .NET 4.6 。

<a id="System.Numerics.?"></a>
### System.Numerics.? 
 .NET 名字空间、类、结构体的成员，  
可访问成员名字空间、类、枚举、静态属性或字段，  
导入的类可用于构造 .NET 对象，传回 .NET 则自动转为该类的 Type 对象  
  
[返回对象:dotNetNameSpaceObject](https://www.aardio.com/zh-cn/doc/library-reference/dotNet/appDomain.html#dotNetNameSpaceObject)

<a id="System.Numerics.BigInteger"></a>
### System.Numerics.BigInteger() 
 创建大整数。  
参数 @1 指定字符串时调用 TryParse 函数创建对象，失败返回 null。  
否则调用 System.Numerics.BigInteger 构造函数，  
非字符串参数用法参考 .NET 文档。  
  
参数 @1 如果为 0x前缀的字符串，则以16进制解析为数值。  
16进制字符串首个数字为0则总是解析为正数，  
否则开始的数值大于0x80时生成负数。

[返回对象:sysNumericsBigIntgerObject](#sysNumericsBigIntgerObject)

<a id="System.Numerics.Complex"></a>
### System.Numerics.Complex() 
 [返回对象:sysNumericsComplexObject](#sysNumericsComplexObject)

<a id="System.Numerics.Complex"></a>
### System.Numerics.Complex(实部,虚部) 
 创建复数。  
支持常用运算符，参与运算的数必须也是 System.Numerics.Complex 。  
支持用 tostring 函数转换为 aardio 字符串。

<a id="System.Numerics.assembly"></a>
### System.Numerics.assembly 
 导入此 .NET 名字空间的程序集对象。  
  
[返回对象:dotNetCrlAssemblyObject](#dotNetCrlAssemblyObject)

<a id="System.Numerics.BigInteger"></a>
## System.Numerics.BigInteger 成员列表

支持任意大整数的数值类型。  
没有下限或上限，可以包含任何整数的值。  
支持常用运算符，参与运算的数必须也是 System.Numerics.BigInteger 。  
支持用 tostring 函数转换为 aardio 字符串。  
tostring 第 2 个参数为 "x"或"X"时返回 16 进制字符串。  
  
大数运算也可以使用 math.bignum 扩展库。

<a id="System.Numerics.BigInteger.Parse"></a>
### System.Numerics.BigInteger.Parse() 
 参数 @1 指定字符串。  
解析字符串中的整数值。

参数 @1 指定字符串。  
解析字符串中的整数值。

<a id="System.Numerics.BigInteger.TryParse"></a>
### System.Numerics.BigInteger.TryParse() 
 参数 @1 指定字符串。  
解析字符串中的整数值，失败返回 null

<a id="System.Numerics.Complex"></a>
## System.Numerics.Complex 成员列表

复数。  
可参考：math.complex 扩展库。

<a id="System.Numerics.Complex.?"></a>
### System.Numerics.Complex.? 
 更多复数函数用法请参考 .NET 文档

<a id="sysNumericsBigIntgerObject"></a>
## sysNumericsBigIntgerObject 成员列表


<a id="sysNumericsBigIntgerObject.?"></a>
### sysNumericsBigIntgerObject.? 
 此对象的其他可用函数请参考 .NET 文档

<a id="sysNumericsBigIntgerObject.ToString"></a>
### sysNumericsBigIntgerObject.ToString("X") 
 转换为 16 进制字符串

<a id="sysNumericsBigIntgerObject.ToString"></a>
### sysNumericsBigIntgerObject.ToString() 
 转换为字符串

<a id="sysNumericsBigIntgerObject.byRef"></a>
### sysNumericsBigIntgerObject.byRef(true) 
 传参方式设为传址（用于引用或输出参数）

<a id="sysNumericsComplex"></a>
## sysNumericsComplex 成员列表


<a id="sysNumericsComplex.?"></a>
### sysNumericsComplex.? 
 此对象的其他可用函数请参考 .NET 文档

<a id="sysNumericsComplex.Imaginary"></a>
### sysNumericsComplex.Imaginary 
 获取虚部。

<a id="sysNumericsComplex.Magnitude"></a>
### sysNumericsComplex.Magnitude 
 获取复数的量值（或绝对值）。

<a id="sysNumericsComplex.Phase"></a>
### sysNumericsComplex.Phase 
 获取复数的相位。

<a id="sysNumericsComplex.Real"></a>
### sysNumericsComplex.Real 
 获取实部。

<a id="sysNumericsComplex.ToString"></a>
### sysNumericsComplex.ToString() 
 转换为字符串。  
参数可用字符串指定 .NET 字符串标准或自定义格式化串。  
用法请参考 .NET 文档。

<a id="sysNumericsComplex.byRef"></a>
### sysNumericsComplex.byRef(true) 
 传参方式设为传址（用于引用或输出参数）
