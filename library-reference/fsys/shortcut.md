# fsys.shortcut 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.shortcut"></a>
### fsys.shortcut 
 快捷方式生成器

<a id="fsys.shortcut"></a>
### fsys.shortcut("目标文件根目录" ) 
 创建快捷方式生成器  
快捷方式参数可指定相对[目标文件根目录]的子路径

<a id="fsys.shortcut"></a>
### fsys.shortcut() 
 [返回对象:fsysShortcutObject](#fsysShortcutObject)

<a id="fsysShortcutObject"></a>
## fsysShortcutObject 成员列表


<a id="fsysShortcutObject.create"></a>
### fsysShortcutObject.create( 参数表 ) 
 

```aardio
fsysShortcutObject.create(   
    url = "网址";  
    lnk = "应用程序路径";/*lnk,url必须且只能指定其中一个  
其他参数都是可选的可以省略*/  
    arguments = 启动参数;  
    filename = 快捷方式文件名;  
    icon = 应用程序路径图标或图标资源所在程序路径;  
    iconIndex = 0;    
    taskBar = true;   
    startMenu = false;   
    desktop = true;  
    programsFolder = "\公司名\";   
    allUsers = false;  
)
```



<a id="fsysShortcutObject.delete"></a>
### fsysShortcutObject.delete( 参数表 ) 
 

```aardio
fsysShortcutObject.delete(   
    url = "网址";  
    lnk = "应用程序路径";/*lnk,url必须且只能指定其中一个  
其他参数都是可选的可以省略*/  
    filename = "快捷方式文件名";  
    taskBar = true;   
    startMenu = false;   
    desktop = true;  
    programsFolder = "\公司名\";   
)
```


