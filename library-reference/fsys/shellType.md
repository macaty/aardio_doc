# fsys.shellType 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.shellType"></a>
### fsys.shellType 
 注册文件关联

<a id="fsys.shellType"></a>
### fsys.shellType() 
 创建文件关联对象  
fsysShellType.

<a id="fsysShellType"></a>
## fsysShellType 成员列表


<a id="fsysShellType.command"></a>
### fsysShellType.command 
 执行文件路径，建议指定为 io._exepath

<a id="fsysShellType.contentType"></a>
### fsysShellType.contentType 
 文件类型。例如 "text/plain"

<a id="fsysShellType.description"></a>
### fsysShellType.description 
 文件路径描述

<a id="fsysShellType.documentClassName"></a>
### fsysShellType.documentClassName 
 文件类名。例如 "aardio.code.file"

<a id="fsysShellType.extension"></a>
### fsysShellType.extension 
 指定文件后缀名，字符串，不包含点号。

<a id="fsysShellType.icon"></a>
### fsysShellType.icon 
 提供图标的文件路径。io._exepath

<a id="fsysShellType.iconIndex"></a>
### fsysShellType.iconIndex 
 图标索引，例如 "1";

<a id="fsysShellType.perceivedType"></a>
### fsysShellType.perceivedType 
 感知类型。例如 "image", "text", "audio", "compressed"

<a id="fsysShellType.reg"></a>
### fsysShellType.reg() 
 注册文件关联。  
成功返回 true，失败返回 false。

<a id="fsysShellType.shellNewFileName"></a>
### fsysShellType.shellNewFileName 
 系统菜单新建文件的文件模板路径。  
省略则不注册此项。

<a id="fsysShellType.unreg"></a>
### fsysShellType.unreg() 
 删除文件关联。  
成功返回 true，失败返回 false。
