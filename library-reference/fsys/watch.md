# fsys.watch 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.watch"></a>
### fsys.watch 
 文件监视支持库  
该对象必须在包含消息循环的线程中使用

<a id="fsys.watch"></a>
### fsys.watch(监视路径) 
 参数可以是一个或多个一个或多个要监视的目录路径  
也可以是包含多个目录路径的数组对象,注意不能是文件路径

<a id="watchObject"></a>
## watchObject 成员列表


<a id="watchObject.onChange"></a>
### watchObject.onChange 
 

```aardio
watchObject.onChange = function(path) {   
io.print("改变了" + path)  ;  
return false; /*停止监视*/     
}
```



<a id="watchObject.run"></a>
### watchObject.run() 
 启动监控程序,  
可选使用一个或多个_FILE_NOTIFY_前缀常量指定临视参数,默认临视增、删、改等操作

<a id="watchObject.stop"></a>
### watchObject.stop() 
 停止监视


### 自动完成常量
_FILE_NOTIFY_CHANGE_ATTRIBUTES=0x4  
_FILE_NOTIFY_CHANGE_CREATION=0x40  
_FILE_NOTIFY_CHANGE_DIR_NAME=0x2  
_FILE_NOTIFY_CHANGE_FILE_NAME=0x1  
_FILE_NOTIFY_CHANGE_LAST_ACCESS=0x20  
_FILE_NOTIFY_CHANGE_LAST_WRITE=0x10  
_FILE_NOTIFY_CHANGE_NORMAL_ALL=0x5F  
_FILE_NOTIFY_CHANGE_SECURITY=0x100  
_FILE_NOTIFY_CHANGE_SIZE=0x8  
