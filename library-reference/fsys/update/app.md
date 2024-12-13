# fsys.update.app 库模块帮助文档

<a id="fsys.update"></a>
## fsys.update 成员列表


<a id="fsys.update.app"></a>
### fsys.update.app 
 执行更新程序

<a id="fsys.update.app"></a>
### fsys.update.app() 
 [返回对象:fsysUpdateAppObject](#fsysUpdateAppObject)

<a id="fsys.update.app"></a>
### fsys.update.app(更新源,目标目录,是否保留更新补丁,是否允许移除文件) 
 创建更新程序,  
如果参数@3为true，则更新后不删除源补丁  
如果参数@4指定为false，则更新时不删除在新版补丁中已移除的旧版本文件。

<a id="fsysUpdateAppObject"></a>
## fsysUpdateAppObject 成员列表


<a id="fsysUpdateAppObject.apply"></a>
### fsysUpdateAppObject.apply() 
 创建更新线程,安装更新

<a id="fsysUpdateAppObject.onCopyBegin"></a>
### fsysUpdateAppObject.onCopyBegin 
 

```aardio
fsysUpdateAppObject.onCopyBegin = function(total){
	 /*开始复制文件*/
}
```



<a id="fsysUpdateAppObject.onCopyFailed"></a>
### fsysUpdateAppObject.onCopyFailed 
 

```aardio
fsysUpdateAppObject.onCopyFailed = function(path){
	 /*文件被占用,返回false取消更新*/
}
```



<a id="fsysUpdateAppObject.onCopyFile"></a>
### fsysUpdateAppObject.onCopyFile 
 

```aardio
fsysUpdateAppObject.onCopyFile = function(path,count){
	 /*开始复制参数@1指定的文件,返回false取消更新*/
}
```



<a id="fsysUpdateAppObject.onEnd"></a>
### fsysUpdateAppObject.onEnd 
 

```aardio
fsysUpdateAppObject.onEnd = function(succeeded){
	 /*更新操作已全部完成*/
}
```



<a id="fsysUpdateAppObject.onError"></a>
### fsysUpdateAppObject.onError 
 

```aardio
fsysUpdateAppObject.onError = function(err,filename){
	io.print("更新遇到错误:",err,filename/*导致错误的文件路径或URL  
该值可能为空*/ )
}
```



<a id="fsysUpdateAppObject.onProcessCheck"></a>
### fsysUpdateAppObject.onProcessCheck 
 

```aardio
fsysUpdateAppObject.onProcessCheck = function(paths){
	 /*参数是更新程序所在目录下已运行的进程路径,  
返回false取消更新*/
}
```



<a id="fsysUpdateAppObject.onProcessFailed"></a>
### fsysUpdateAppObject.onProcessFailed 
 

```aardio
fsysUpdateAppObject.onProcessFailed = function(paths){
	 /*更新程序需要退出进程,  
参数是程序启动路径数组  
返回false取消更新*/
}
```



<a id="fsysUpdateAppObject.updateInfo.description"></a>
### fsysUpdateAppObject.updateInfo.description 
 更新说明

<a id="fsysUpdateAppObject.updateInfo.version"></a>
### fsysUpdateAppObject.updateInfo.version 
 更新的软件版本号
