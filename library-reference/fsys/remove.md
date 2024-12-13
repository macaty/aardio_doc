# fsys.remove 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.remove"></a>
### fsys.remove 
 用于删除目录或文件  
支持 fsys.delete 函数无法删除的畸形路径,  
此函数库不在 fsys 库内需要单独导入

<a id="fsys.remove"></a>
### fsys.remove(path) 
 移除参数 @1 指定路径的目录或文件

<a id="fsys.remove"></a>
### fsys.remove(path,true) 
 清空参数 @1 指定路径的目录，但不删除目录本身。  
如果参数 @1 指定的不是一个存在的目录，忽略不执行任何操作
