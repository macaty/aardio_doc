# fsys.url 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.url"></a>
### fsys.url 
 网页快捷方式

<a id="fsys.url"></a>
### fsys.url() 
 创建URL快捷方式  
  
[返回对象:urllnkObject](#urllnkObject)

<a id="urllnkObject"></a>
## urllnkObject 成员列表


<a id="urllnkObject.arguments"></a>
### urllnkObject.arguments 
 参数

<a id="urllnkObject.description"></a>
### urllnkObject.description 
 附加说明

<a id="urllnkObject.filename"></a>
### urllnkObject.filename 
 快捷方式默认文件名,可省略后缀名,  
未指定则自URL中获取文件名或域名

<a id="urllnkObject.getIcon"></a>
### urllnkObject.getIcon() 
 返回图标文件路径,以及路标索引

<a id="urllnkObject.getUrl"></a>
### urllnkObject.getUrl() 
 返回网址

<a id="urllnkObject.hotkey"></a>
### urllnkObject.hotkey 
 热键

<a id="urllnkObject.invokeCommand"></a>
### urllnkObject.invokeCommand(verb,hwndParent) 
 执行指令,参数省略则打开网址  
verb默认为"open"

<a id="urllnkObject.load"></a>
### urllnkObject.load(url文件路径) 
 载入快捷方式

<a id="urllnkObject.path"></a>
### urllnkObject.path 
 目标网址

目标路径,设置该属性时:  
如果workDir为空则设workDir为目标路径所在目录  
如果description为空则设为版本信息中的文件描述

<a id="urllnkObject.pinToDesktop"></a>
### urllnkObject.pinToDesktop(true) 
 添加快捷方式到桌面

自桌面移除快捷方式

<a id="urllnkObject.pinToPrograms"></a>
### urllnkObject.pinToPrograms(false,...) 
 自开始菜单程序组移除  
可选指定多个子目录参数  
如果指定了子目录则直接移除快捷方式所在父目录

<a id="urllnkObject.pinToPrograms"></a>
### urllnkObject.pinToPrograms(true,...) 
 添加到开始菜单程序组  
可选指定多个子目录参数

<a id="urllnkObject.save"></a>
### urllnkObject.save(url文件存储路径) 
 保存快捷方式  
如果指定了filename或path属性,参数也可以指定存储目录

<a id="urllnkObject.setIcon"></a>
### urllnkObject.setIcon(文件路径,图标索引) 
 设置图标  
索引可省咯,默认为0

<a id="urllnkObject.setUrl"></a>
### urllnkObject.setUrl("网址") 
 设置网址

<a id="urllnkObject.showCmd"></a>
### urllnkObject.showCmd 
 显示参数

<a id="urllnkObject.workDir"></a>
### urllnkObject.workDir 
 工作目录


### 自动完成常量
_ALL_IURL_SETURL_FLAGS=3  
_IURL_SETURL_FL_GUESS_PROTOCOL=1  
_IURL_SETURL_FL_USE_DEFAULT_PROTOCOL=2  
