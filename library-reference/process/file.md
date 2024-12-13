# process.file 库模块帮助文档

<a id="process.file"></a>
## process.file 成员列表


<a id="process.file.delete"></a>
### process.file.delete(EXE路径) 
 中止进程、并删除执行程序文件  
一直重试直到删除成功

<a id="process.file.each"></a>
### process.file.each( ) 
 

```aardio
for( path,prcs in process.file.each() ){
	break ;
}
```



<a id="process.file.each"></a>
### process.file.each() 
 [返回对象:processObject](https://www.aardio.com/zh-cn/doc/library-reference/process/_.html#processObject)

<a id="process.file.eachDir"></a>
### process.file.eachDir( ) 
 

```aardio
for( path,prcs in process.file.each(/*输入EXE文件所属上级目录*/) ){
	break ;
}
```



<a id="process.file.find"></a>
### process.file.find() 
 [返回对象:processObject](https://www.aardio.com/zh-cn/doc/library-reference/process/_.html#processObject)

<a id="process.file.find"></a>
### process.file.find(EXE路径) 
 使用物理路径查找并返回进程对象  
仅使用文件名查找请使用process.find函数

<a id="process.file.terminate"></a>
### process.file.terminate(EXE路径) 
 中止进程

<a id="process.file.test"></a>
### process.file.test(EXE路径) 
 检测指定路径的进程是否存在  
该函数不会返回进程对象

<a id="process.file.wait"></a>
### process.file.wait(EXE路径) 
 等待指定的进程启动
