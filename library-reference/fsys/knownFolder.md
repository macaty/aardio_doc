# fsys.knownFolder 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.knownFolder"></a>
### fsys.knownFolder(guid,path,flags,token) 
 返回 @guid 参数指定 GUID 的 已知文件夹，  
GUID 可以是 16 字节的字符串，也可以是 win.guid 支持的格式。  
可选用 @path 参数指定要拼接的子路径。  
@flags,@token 为可选参数，  
用法请参考 ::Shell32.SHGetKnownFolderPath 函数文档

<a id="fsys.knownFolder"></a>
## fsys.knownFolder 成员列表

用于获取已知的特殊文件夹  
作用类似 fsys.getSpecial 函数  
不支持 XP，支持 XP 以后的系统

获取已知的特殊文件夹

<a id="fsys.knownFolder.default"></a>
### fsys.knownFolder.default(guid,path,flags) 
 返回默认用户由 @guid 参数指定 GUID 的 已知文件夹，  
参数用法与 fsys.knownFolder 相同
