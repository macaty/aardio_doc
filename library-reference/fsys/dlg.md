# fsys.dlg 库模块帮助文档

<a id="fsys.dlg"></a>
## fsys.dlg 成员列表

系统文件对话框。  
  
请注意：文件对话框会改变当前目录，导致相对路径（例如 "./res/"）位置变化。  
路径首字符用单个斜杠或反斜杆表示「应用程序根目录」的写法更可靠，  
例如：（例如 "/res/"）。  
  
可以使用 fsys.setCurDir 函数设置当前目录，  
很多组件（例如文件对话框）都可能会悄悄改变当前目录。  
而「应用程序根目录」则是固定不变的

<a id="fsys.dlg.OPENFILENAME"></a>
### fsys.dlg.OPENFILENAME() 
 [返回对象:OPENFILENAMEObject](#OPENFILENAMEObject)

<a id="fsys.dlg.OPENFILENAME"></a>
### fsys.dlg.OPENFILENAME(缓冲区大小,默认文件名) 
 创建 OPENFILENAME 结构体

<a id="fsys.dlg.open"></a>
### fsys.dlg.open 
 打开选择单文件对话框

<a id="fsys.dlg.open"></a>
### fsys.dlg.open(指定文件类型,对话框标题,默认目录,父窗口,选项参数,默认文件名) 
 打开选择单文件对话框，所有参可选。  
文件类型以竖线分隔,并以坚线分隔类型说明与后缀名,例如  
"所有文件|*.*|文本文件|*.txt;*.md|"  
  
一个类型说明匹配多个后缀名应以分号分隔

<a id="fsys.dlg.openDir"></a>
### fsys.dlg.openDir 
 打开选择目录对话框，  
建议改用 fsys.dlg.dir

<a id="fsys.dlg.openDir"></a>
### fsys.dlg.openDir() 
 打开选择目录对话框。

<a id="fsys.dlg.openDir"></a>
### fsys.dlg.openDir(目录,父窗口,标题,窗口标题) 
 打开选择目录对话框,  
所有参数都是可选参数。

<a id="fsys.dlg.openEx"></a>
### fsys.dlg.openEx 
 打开选择多文件对话框

<a id="fsys.dlg.openEx"></a>
### fsys.dlg.openEx(指定文件类型,对话框标题,默认目录,父窗口,选项参数,缓冲区大小) 
 打开选择多文件对话框，所有参数可选。  
文件类型以竖线分隔,并以坚线分隔类型说明与后缀名,例如  
"所有文件|*.*|文本文件|*.txt;*.md|"  
  
一个类型说明匹配多个后缀名应以分号分隔，  
第一个返回值为一个数组,包含一个或多个被选定的文件路径  
多选则会返回第二个数组值,包含被选目录路径以及多个文件名

<a id="fsys.dlg.save"></a>
### fsys.dlg.save 
 显示保存文件对话框框  
覆盖已存在的文件时不显示确认对话框。

<a id="fsys.dlg.save"></a>
### fsys.dlg.save(指定文件类型,对话框标题,默认目录,父窗口,选项参数,默认文件名) 
 显示保存文件对话框框,所有参数为可选参数  
文件类型以竖线分隔,并以坚线分隔类型说明与后缀名,例如  
"所有文件|*.*|文本文件|*.txt;*.md|"  
  
一个类型说明匹配多个后缀名应以分号分隔

<a id="fsys.dlg.saveOp"></a>
### fsys.dlg.saveOp 
 显示保存文件对话框框,  
覆盖已存在的文件时显示确认对话框（overwrite prompt）

<a id="fsys.dlg.saveOp"></a>
### fsys.dlg.saveOp(指定文件类型,对话框标题,默认目录,父窗口,默认文件名) 
 显示保存文件对话框框,  
覆盖已存在的文件时显示确认对话框。  
  
所有参数为可选参数  
文件类型以竖线分隔,并以坚线分隔类型说明与后缀名,例如  
"所有文件|*.*|文本文件|*.txt;*.md|"  
  
一个类型说明匹配多个后缀名应以分号分隔

<a id="OPENFILENAMEObject"></a>
## OPENFILENAMEObject 成员列表


<a id="OPENFILENAMEObject.defExt"></a>
### OPENFILENAMEObject.defExt 
 默认后缀名

<a id="OPENFILENAMEObject.defaultFileName"></a>
### OPENFILENAMEObject.defaultFileName 
 默认文件名

<a id="OPENFILENAMEObject.filter"></a>
### OPENFILENAMEObject.filter 
 指定文件类型  
例如'所有文件|*.*|文本文件|*.txt|'u

<a id="OPENFILENAMEObject.flags"></a>
### OPENFILENAMEObject.flags 
 一个或多个_OFN_前缀选项  
参考MSDN文档

<a id="OPENFILENAMEObject.hwndOwner"></a>
### OPENFILENAMEObject.hwndOwner 
 父窗口句柄

<a id="OPENFILENAMEObject.initialDir"></a>
### OPENFILENAMEObject.initialDir 
 初始目录

<a id="OPENFILENAMEObject.open"></a>
### OPENFILENAMEObject.open() 
 打开文件对话框,返回文件名

<a id="OPENFILENAMEObject.save"></a>
### OPENFILENAMEObject.save() 
 打开保存文件对话框,返回文件名

<a id="OPENFILENAMEObject.title"></a>
### OPENFILENAMEObject.title 
 标题


### 自动完成常量
_BIF_BROWSEFORCOMPUTER=0x1000  
_BIF_BROWSEFORPRINTER=0x2000  
_BIF_BROWSEINCLUDEFILES=0x4000  
_BIF_BROWSEINCLUDEURLS=0x80  
_BIF_DONTGOBELOWDOMAIN=0x2  
_BIF_EDITBOX=0x10  
_BIF_RETURNFSANCESTORS=0x8  
_BIF_RETURNONLYFSDIRS=0x1  
_BIF_SHAREABLE=0x8000  
_BIF_STATUSTEXT=0x4  
_BIF_USENEWUI=0x50  
_BIF_VALIDATE=0x20  
