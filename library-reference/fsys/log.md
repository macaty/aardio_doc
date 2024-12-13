# fsys.log 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.log"></a>
### fsys.log("日志文件路径") 
 创建日志文件

<a id="fsys.log"></a>
### fsys.log() 
 [返回对象:fsyslogObject](#fsyslogObject)

<a id="fsys.log"></a>
## fsys.log 成员列表

日志文件  
用于代替控制台在文件中输出变量或文本

<a id="fsys.log.dump"></a>
### fsys.log.dump(变量) 
 显示变量的值,支持多参数  
注意仅显示普通table,string,number等类型的值,不显示函数等

<a id="fsys.log.dumpJson"></a>
### fsys.log.dumpJson(变量) 
 将对像转换为格式化的JSON文本并输出到控制台

<a id="fsys.log.print"></a>
### fsys.log.print() 
 输出一行文本,支持多参数

<a id="fsys.log.printf"></a>
### fsys.log.printf("%s", ) 
 输出格式化字符串,  
格式化语法与string.format相同

<a id="fsys.log.setPath"></a>
### fsys.log.setPath("/config/app$.log") 
 设志日志文件路径,进程内全局有效,  
如果不指定路径,默认设置为 /config/app$.log

<a id="fsyslogObject"></a>
## fsyslogObject 成员列表


<a id="fsyslogObject.close"></a>
### fsyslogObject.close() 
 关闭对象

<a id="fsyslogObject.dump"></a>
### fsyslogObject.dump(变量) 
 显示变量的值,支持多参数  
注意仅显示普通table,string,number等类型的值,不显示函数等

<a id="fsyslogObject.dumpJson"></a>
### fsyslogObject.dumpJson(变量) 
 将对像转换为格式化的JSON文本并输出到控制台  
支持多参数

<a id="fsyslogObject.print"></a>
### fsyslogObject.print() 
 输出一行文本,支持多参数

<a id="fsyslogObject.printf"></a>
### fsyslogObject.printf("%s", ) 
 输出格式化字符串,  
格式化语法与string.format相同
