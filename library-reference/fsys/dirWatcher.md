# fsys.dirWatcher 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.dirWatcher"></a>
### fsys.dirWatcher("字符串参数") 
 创建目录监视器

<a id="fsys.dirWatcher"></a>
### fsys.dirWatcher() 
 [返回对象:dirWatcherObject](#dirWatcherObject)

<a id="fsys.dirWatcher"></a>
## fsys.dirWatcher 成员列表

目录监视器

<a id="fsys.dirWatcher.thread"></a>
### fsys.dirWatcher.thread() 
 [返回对象:fsysDirWatcherThreadObject](#fsysDirWatcherThreadObject)

<a id="fsys.dirWatcher.thread"></a>
### fsys.dirWatcher.thread(回调函数,监视目录,选项) 
 

```aardio
fsys.dirWatcher.thread(  
	function(filename,action,actionText){  
		  
	},/*监视目录路径*/ );
```



<a id="dirWatcherEntryObject"></a>
## dirWatcherEntryObject 成员列表


<a id="dirWatcherEntryObject.action"></a>
### dirWatcherEntryObject.action 
 变更类型

<a id="dirWatcherEntryObject.actionText"></a>
### dirWatcherEntryObject.actionText 
 变更类型说明

<a id="dirWatcherEntryObject.filename"></a>
### dirWatcherEntryObject.filename 
 文件名

<a id="dirWatcherEntryObject.filenameW"></a>
### dirWatcherEntryObject.filenameW 
 Unicode文件名

<a id="dirWatcherObject"></a>
## dirWatcherObject 成员列表


<a id="dirWatcherObject.close"></a>
### dirWatcherObject.close() 
 关闭

<a id="dirWatcherObject.eachChanges"></a>
### dirWatcherObject.eachChanges(选项,是否监视子目录) 
 

```aardio
for( filename,action,actionText in dirWatcherObject.eachChanges() ){
	io.print( filename,actionText,action & 0x10/*_FILE_NOTIFY_CHANGE_LAST_WRITE*/ ) 
}
```



<a id="dirWatcherObject.readDirectoryChanges"></a>
### dirWatcherObject.readDirectoryChanges() 
 [返回对象:dirWatcherEntryObject](#dirWatcherEntryObject)

<a id="dirWatcherObject.readDirectoryChanges"></a>
### dirWatcherObject.readDirectoryChanges(选项,是否监视子目录) 
 读取目录发生的变更  
返回值为数组,数组成员为一个table对象  
filename字段表明变更的目录,action字段表明变更类型  
action为 _FILE_NOTIFY_CHANGE_ 前缀的常量标志

<a id="fsysDirWatcherThreadObject"></a>
## fsysDirWatcherThreadObject 成员列表


<a id="fsysDirWatcherThreadObject.close"></a>
### fsysDirWatcherThreadObject.close() 
 关闭对象


### 自动完成常量
_FILE_ACTION_ADDED=1  
_FILE_ACTION_MODIFIED=3  
_FILE_ACTION_REMOVED=2  
_FILE_ACTION_RENAMED_NEW_NAME=5  
_FILE_ACTION_RENAMED_OLD_NAME=4  
