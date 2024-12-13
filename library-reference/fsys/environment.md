# fsys.environment 库模块帮助文档

<a id="fsys.environment"></a>
## fsys.environment 成员列表


<a id="fsys.environment.expand"></a>
### fsys.environment.expand(路径) 
 展开路径中的环境变量  
如果是斜杠或~开关的路径直接调用 io.localpath 函数转换为绝对路径

<a id="fsys.environment.unExpand"></a>
### fsys.environment.unExpand(路径) 
 将路径中适合的部分替换为环境变量格式
