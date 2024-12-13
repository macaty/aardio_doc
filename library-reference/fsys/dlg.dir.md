# fsys.dlg.dir 库模块帮助文档

<a id="fsys.dlg"></a>
## fsys.dlg 成员列表


<a id="fsys.dlg.dir"></a>
### fsys.dlg.dir 
 打开新版目录对话框,  
XP 系统自动降级为 fsys.dlg.openDir。  
  
需要导入 fsys.dlg.dir 库。

<a id="fsys.dlg.dir"></a>
### fsys.dlg.dir(path,hwndOwner,title,okLabel,clientGuid,multiSel) 
 打开目录对话框，所有参数可省略。  
参数@path 指定打开的目录,  
参数@hwndOwner 指定父窗口,  
参数@title 指定窗口标题  
参数@okLabel 指定确定按钮上的文本,  
参数 @clientGuid 指定单独存储对话框状态的 GUID，  
GUID 可以是 win.guid.valid 函数支持的参数类型（例如字符串格式） 。  
参数@multiSel 如果为 true，则允许选择多目录并返回数组,  
默认仅能选择单个目录并返回选中的路径,  
取消返回 null

<a id="fsys.dlg.dirs"></a>
### fsys.dlg.dirs 
 打开新版目录对话框,允许多选。  
不支持 XP 系统。  
  
需要导入 fsys.dlg.dir 库。

<a id="fsys.dlg.dirs"></a>
### fsys.dlg.dirs(path,hwndOwner,title,okLabel,clientGuid) 
 打开新版目录对话框，允许多选。  
所有参数可省略。  
  
参数@path 指定打开的目录,  
参数@hwndOwner 指定父窗口,  
参数@title 指定窗口标题  
参数@okLabel 指定确定按钮上的文本,  
参数 @clientGuid 指定单独存储对话框状态的 GUID，  
GUID 可以是 win.guid.valid 函数支持的参数类型（例如字符串格式）。  
参数@multiSel 如果为true，则允许选择多目录并返回数组,  
默认仅能选择单个目录并返回选中的路径,  
取消返回 null
