# zbar.iconv 库模块帮助文档

<a id="zbar"></a>
## zbar 成员列表


<a id="zbar.iconv"></a>
### zbar.iconv() 
 [返回对象:zbarIconvObject](#zbarIconvObject)

<a id="zbar.iconv"></a>
### zbar.iconv(fromCode,toCode) 
 创建转换对象,  
建议直接使用标准库函数 string.fromto 转换编码

<a id="zbarIconvObject"></a>
## zbarIconvObject 成员列表


<a id="zbarIconvObject.close"></a>
### zbarIconvObject.close() 
 关闭对象

<a id="zbarIconvObject.convert"></a>
### zbarIconvObject.convert(str) 
 转换参数str指定的字符串编码，成功返回新的字符串,  
此函数不会自动设置UTF标记，  
建议改用标准库函数 string.fromto
