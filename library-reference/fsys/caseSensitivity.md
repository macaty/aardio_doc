# fsys.caseSensitivity 库模块帮助文档

<a id="fsys.caseSensitivity"></a>
## fsys.caseSensitivity 成员列表

用于获取或设置指定目录下路径是否分区大小写

<a id="fsys.caseSensitivity.get"></a>
### fsys.caseSensitivity.get(dirPath) 
 指定目录下路径是否分区大小写,  
@dirPath 参数指定目录路径  
  
区分大小写返回 true，不区分返回 false，  
发生错误返回 null,错误代码  
错误代码参考 错误代码参考 https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-erref/596a1078-e883-4972-9bbc-49e60bebca55

<a id="fsys.caseSensitivity.get"></a>
### fsys.caseSensitivity.get(dirPath,enabled) 
 设置指定目录下路径是否分区大小写,  
@dirPath 参数指定目录路径,@enabled 指定是否区分大小写  
  
成功返回 true,发生错误返回 null,错误代码。  
常见错误代码：  
0xC0000022 进程需要管理权限  
0xC000000D 参数错误  
0xC00000BB 不支持，需要安装 WSL（Windows Subsystem for Linux）

<a id="fsys.caseSensitivity.getName"></a>
### fsys.caseSensitivity.getName() 
 获取参数@1指定路径的大小写敏感的文件名。  
参数支持文件搜索通配符（与 fsys.enum 相同）。  
此函数不需要系统安装 WSL
