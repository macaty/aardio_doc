# fsys.safepath 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.safepath"></a>
### fsys.safepath() 
 参数@1指定的文件路径转换为完整路径返回,  
如果完整路径自盘符开始（例如以 C:\ 开始的路径）则返回路径加上 \\?\ 前缀。  
可用于访问畸形路径
