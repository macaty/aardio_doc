# fsys.latest 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.latest"></a>
### fsys.latest 
 获取最新文件路径。  
这是一个独立的标准库，需要用 import 语句导入才能使用。

<a id="fsys.latest"></a>
### fsys.latest(目录,文件名,搜索所有下级目录) 
 搜索目录下符合条件的文件中最后一个被修改过的文件路径。  
参数 @2 支持通配符，默认为 "*.*"。  
参数 @3 指定是否搜索所有下级子目录，默认为 false
