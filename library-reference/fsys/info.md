# fsys.info 库模块帮助文档

<a id="fsys.info"></a>
## fsys.info 成员列表


<a id="fsys.info.get"></a>
### fsys.info.get 
 返回文件信息

<a id="fsys.info.get"></a>
### fsys.info.get("路径",SHGFI_... ) 
 参数@2指定一个或多个选项,多个选项用|连接,  
如果参数@2指定了_SHGFI_USEFILEATTRIBUTES,  
则参数@3必须用 _FILE_ATTRIBUTE_ 前缀常量指定文件属性

<a id="fsys.info.get"></a>
### fsys.info.get() 
 [返回对象:shFileInfoObject](#shFileInfoObject)

<a id="fsys.info.getExeType"></a>
### fsys.info.getExeType() 
 [返回对象:fsysExeInfoExeTypeObject](#fsysExeInfoExeTypeObject)

<a id="fsys.info.getExeType"></a>
### fsys.info.getExeType(文件路径) 
 检测是否EXE文件  
失败返回空

<a id="fsysExeInfoExeTypeObject"></a>
## fsysExeInfoExeTypeObject 成员列表


<a id="fsysExeInfoExeTypeObject.magic"></a>
### fsysExeInfoExeTypeObject.magic 
 DOS程序为"MZ"  
非DOS程序为"PE"

<a id="fsysExeInfoExeTypeObject.winVer"></a>
### fsysExeInfoExeTypeObject.winVer 
 控制台程序为0  
GUI 程序为 Windows 版本号,  
Windows 版本号参考： https://docs.microsoft.com/en-us/windows/win32/winprog/using-the-windows-headers

<a id="shFileInfoObject"></a>
## shFileInfoObject 成员列表


<a id="shFileInfoObject.dwAttributes"></a>
### shFileInfoObject.dwAttributes 
 文件属性

<a id="shFileInfoObject.hIcon"></a>
### shFileInfoObject.hIcon 
 图标句柄  
如果不为空要负责释放该句柄

<a id="shFileInfoObject.iIcon"></a>
### shFileInfoObject.iIcon 
 在图像列表中的索引

<a id="shFileInfoObject.returnValue"></a>
### shFileInfoObject.returnValue 
 SHGetFileInfo的返回值

<a id="shFileInfoObject.szDisplayName"></a>
### shFileInfoObject.szDisplayName 
 文件名

<a id="shFileInfoObject.szTypeName"></a>
### shFileInfoObject.szTypeName 
 类型名
