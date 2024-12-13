# fsys.shelled 库模块帮助文档

<a id="fsys.shelled"></a>
## fsys.shelled 成员列表


<a id="fsys.shelled.folderIds"></a>
### fsys.shelled.folderIds() 
 返回一个数组,  
数组中包含所有 所有 Shell 文件夹 CLSID 与 名称组成的数组

<a id="fsys.shelled.lock"></a>
### fsys.shelled.lock 
 设置为保护目录

<a id="fsys.shelled.lock"></a>
### fsys.shelled.lock(path,shellFolderId) 
 设置为保护目录。  
成功返回保护目录路径，失败返回 null。  
@path 指定设为保护目录之前的原始路径,@shellId 指定 Shell 文件夹 CLSID

<a id="fsys.shelled.unlock"></a>
### fsys.shelled.unlock 
 取消设置为保护目录。  
成功返回恢复后的目录路径，失败返回 null。

<a id="fsys.shelled.unlock"></a>
### fsys.shelled.unlock(path,shellFolderId) 
 取消设置为保护目录。  
成功返回恢复后的目录路径，失败返回 null。  
  
@path 指定设为保护目录之前的原始路径,@shellId 指定 Shell 文件夹 CLSID

<a id="fsys.shelled.unlock"></a>
### fsys.shelled.unlock(shelledPath) 
 取消设置为保护目录。  
成功返回恢复后的目录路径，失败返回 null。  
  
@shelledPath 指定保护目录路径
