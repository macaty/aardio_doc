# fsys.lnk 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.lnk"></a>
### fsys.lnk() 
 创建快捷方式  
  
[返回对象:lnkfileObject](#lnkfileObject)

<a id="fsys.lnk"></a>
## fsys.lnk 成员列表


<a id="fsys.lnk.enum"></a>
### fsys.lnk.enum 
 

```aardio
fsys.lnk.enum(   
    function(dir,filename,fullpath,target,arguments){   
        /*return false 停止遍历*/    
    },0/*_CSIDL_DESKTOP*/  
);
```



<a id="fsys.lnk.getMsiTarget"></a>
### fsys.lnk.getMsiTarget(lnk文件路径) 
 获取MSI创建的 Advertised 快捷方式指向的实际目标路径

<a id="fsys.lnk.getTarget"></a>
### fsys.lnk.getTarget(lnk文件路径) 
 获取快捷方式指向的目标路径,  
支持Advertised Shortcut

<a id="fsys.lnk.search"></a>
### fsys.lnk.search 
 查找文件或快捷方式。  
成功返回启动路径与参数

<a id="fsys.lnk.search"></a>
### fsys.lnk.search("目标文件名或参数","快捷方式标题") 
 全部参数可选,至少输入一个参数  
参数@1也可以是指定多个文件名的数组,  
搜索快捷方式的文件名与标题支持模式匹配或忽略大小写的文本比，  
直接搜索文件则必须精确匹配文件名。  
  
按下列顺序搜索文件:  
如果未指定标题则先调用 fsys.searchFile 在 EXE 目录及系统目录搜索，  
接着搜索桌面快捷方式、应用程序快捷方式

<a id="fsys.lnk.searchInDesktop"></a>
### fsys.lnk.searchInDesktop 
 在桌面查找文件或快捷方式。  
成功返回启动路径与参数

<a id="fsys.lnk.searchInDesktop"></a>
### fsys.lnk.searchInDesktop("目标文件名或参数","快捷方式标题") 
 全部参数可选,至少输入一个参数  
参数@1也可以是指定多个文件名的数组。  
搜索快捷方式的文件名与标题支持模式匹配或忽略大小写的文本比较，  
直接搜索文件则必须精确匹配文件名

<a id="fsys.lnk.searchLnk"></a>
### fsys.lnk.searchLnk("文件名或参数","快捷方式标题", 0 /*_CSIDL_DESKTOP*/) 
 在桌面搜索快捷方式并返回路径  
参数@3可省略。  
成功返回启动路径与参数

<a id="fsys.lnk.searchLnk"></a>
### fsys.lnk.searchLnk("文件名或参数","快捷方式标题", 2 /*_CSIDL_PROGRAMS*/) 
 在开始菜单应用程序目录搜索快捷方式。  
成功返回启动路径与参数

<a id="lnkfileObject"></a>
## lnkfileObject 成员列表


<a id="lnkfileObject.arguments"></a>
### lnkfileObject.arguments 
 参数

<a id="lnkfileObject.description"></a>
### lnkfileObject.description 
 附加说明

<a id="lnkfileObject.filename"></a>
### lnkfileObject.filename 
 快捷方式默认文件名,可省略后缀名,  
未指定则取版本信息中的产品名或目标文件名

<a id="lnkfileObject.filepath"></a>
### lnkfileObject.filepath 
 快捷方式加载或保存成功的文件路径

<a id="lnkfileObject.free"></a>
### lnkfileObject.free() 
 释放对象,  
释放对象以后不能再使用此对象

<a id="lnkfileObject.getIcon"></a>
### lnkfileObject.getIcon() 
 返回图标文件路径,以及图标索引

<a id="lnkfileObject.hotkey"></a>
### lnkfileObject.hotkey 
 热键

<a id="lnkfileObject.load"></a>
### lnkfileObject.load() 
 [返回对象:lnkfileObject](#lnkfileObject)

<a id="lnkfileObject.load"></a>
### lnkfileObject.load(lnk文件路径) 
 载入快捷方式,返回fsys.lnk对象自身

<a id="lnkfileObject.path"></a>
### lnkfileObject.path 
 目标路径,设置该属性时:  
如果workDir为空则设workDir为目标路径所在目录  
如果description为空则设为版本信息中的文件描述

<a id="lnkfileObject.pinToDesktop"></a>
### lnkfileObject.pinToDesktop(false) 
 自桌面移除快捷方式

<a id="lnkfileObject.pinToDesktop"></a>
### lnkfileObject.pinToDesktop(true) 
 添加快捷方式到桌面  
,参数@2如果为true则添加到所有用户程序组

<a id="lnkfileObject.pinToPrograms"></a>
### lnkfileObject.pinToPrograms(false,"子目录路径") 
 自开始菜单程序组移除  
可选指定多个子目录参数  
如果指定了子目录则直接移除快捷方式所在父目录

<a id="lnkfileObject.pinToPrograms"></a>
### lnkfileObject.pinToPrograms(true,"子目录路径") 
 添加到开始菜单程序组  
可选指定子目录路径,参数@3如果为true则添加到所有用户程序组

<a id="lnkfileObject.resolve"></a>
### lnkfileObject.resolve(hwndParent,flags) 
 如果目标路径移动或丢失,  
查找符合的目标,可能显示查找对话框

<a id="lnkfileObject.save"></a>
### lnkfileObject.save(lnk文件存储路径) 
 保存快捷方式  
如果指定了filename或path属性,参数也可以指定存储目录

<a id="lnkfileObject.setIcon"></a>
### lnkfileObject.setIcon(文件路径,图标索引) 
 设置图标文件路径  
可以指定ico文件路径,也可指定EXE文件路径用于获取EXE图标  
图标索引可省略,默认为0

<a id="lnkfileObject.showCmd"></a>
### lnkfileObject.showCmd 
 显示参数

<a id="lnkfileObject.workDir"></a>
### lnkfileObject.workDir 
 工作目录
