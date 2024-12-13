# fsys.codepage 库模块帮助文档

<a id="fsys.codepage"></a>
## fsys.codepage 成员列表


<a id="fsys.codepage.load"></a>
### fsys.codepage.load("文件路径",源编码,目标编码) 
 读取文件,参数2,3都是可选参数,  
可自动识别文件编码,并自动转换为目标编码,  
目标编码默认为65001

<a id="fsys.codepage.load"></a>
### fsys.codepage.load(文件路径,"unicode") 
 读取UNICODE（小尾序）编码文件  
并自动转换为UTF8编码,  
返回文件内容,以及读取内码

<a id="fsys.codepage.load"></a>
### fsys.codepage.load(文件路径,"unicodeFFFE") 
 读取UNICODE（大尾序）编码文件  
并自动转换为UTF8编码,返回文件内容,以及读取内码,  
  
注意 unicodeFFFE 的 BOM 是 '\xFE\xFF',反过来的！

<a id="fsys.codepage.load"></a>
### fsys.codepage.load(文件路径,"utf-8") 
 读取UTF-8编码文件  
并自动转换为UTF8编码,  
返回文件内容,读取内码

<a id="fsys.codepage.save"></a>
### fsys.codepage.save(文件路径,str,"unicode") 
 将参数@2指定的字符串存为UNICODE（小尾序）编码文件,并添加BOM编码标识  
可选以参数@4指定输入代码页,默认为65001。  
如果参数 @5 为 true 则禁用 BOM 头，默认为 false。

<a id="fsys.codepage.save"></a>
### fsys.codepage.save(文件路径,str,"unicodeFFFE") 
 将参数@2指定的字符串存为UNICODE（大尾序）编码文件,并添加BOM编码标识,  
注意 unicodeFFFE 的 BOM 是 '\xFE\xFF',反过来的！  
可选以参数@4指定输入代码页,默认为65001。  
如果参数 @5 为 true 则禁用 BOM 头，默认为 false。

<a id="fsys.codepage.save"></a>
### fsys.codepage.save(文件路径,str,"utf-8") 
 将参数@2指定的字符串存为UTF-8编码文件,并添加BOM编码标识  
可选以参数@4指定输入代码页,默认为65001。  
如果参数 @5 为 true 则禁用 BOM 头，默认为 false。

<a id="fsys.codepage.save"></a>
### fsys.codepage.save(文件路径,str,"utf-8-nobom") 
 将参数@2指定的字符串存为UTF-8编码文件,不添加BOM编码标识  
可选以参数@4指定输入代码页,默认为65001。  
如果参数 @5 为 true 则禁用 BOM 头，默认为 false。

<a id="fsys.codepage.save"></a>
### fsys.codepage.save(文件路径,str,0) 
 将参数@2指定的字符串以ANSI编码存为文件,参数@3指定输出代码页  
可选以参数@4指定输入代码页,默认为65001
