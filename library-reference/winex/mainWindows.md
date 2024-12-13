# winex.mainWindows 库模块帮助文档

<a id="winex"></a>
## winex 成员列表


<a id="winex.mainWindows"></a>
### winex.mainWindows("EXE文件名",true) 
 查找并等待指定 EXE 运行进程的所有主窗口显示。  
返回表的键为进程 ID，值为包含窗口信息的表。  
窗口信息的字段：  
hwnd 字段为窗口句柄。  
title 字段为窗口标题。  
其他字段与无参数调用此函数的返回值相同

<a id="winex.mainWindows"></a>
### winex.mainWindows() 
 无参数则返回所有可以找到主窗口的进程表。  
返回表的键为进程 ID，值为包含窗口信息的表。  
窗口信息的字段：  
hwnd 字段为窗口句柄。  
title 字段为窗口标题。  
threadId 字段为窗口线程 ID。  
visible 字段为是否可见。  
main 字段为是否无所有者窗口

<a id="winex.mainWindows"></a>
### winex.mainWindows(进程) 
 如果参数@1传入进程ID或 process 对象。  
找到则返回包含主窗口信息的表对象。  
其中 hwnd 字段为窗口句柄，title 字段为窗口标题。  
找不到则返回 null

<a id="winex.mainWindows"></a>
### winex.mainWindows(进程,true) 
 查找并等待进程显示主窗口。  
参数@1传入进程ID或 process 对象。  
返回包含主窗口信息的表对象。  
其中 hwnd 字段为窗口句柄，title 字段为窗口标题

<a id="winex.mainWindows"></a>
## winex.mainWindows 成员列表

用于查找进程主窗口。  
如果进程有多个窗口，  
则优先取无父窗口及无所有者的可见窗口，并优先取非空标题窗口。

<a id="winex.mainWindows.each"></a>
### winex.mainWindows.each("EXE文件名",true) 
 

```aardio
for i,hwnd,title,visible,pid,tid in winex.mainWindows.each("EXE文件名",true){
	/*等待指定 EXE 运行进程的所主窗口显示，然后遍历这些主窗口。  
迭代器返回参数依次为：  
序号，窗口句柄，标题，是否显示，进程ID，线程ID*/
}
```



<a id="winex.mainWindows.each"></a>
### winex.mainWindows.each() 
 

```aardio
for i,hwnd,title,visible,pid,tid in winex.mainWindows.each(){
	/*遍历所有主窗口。  
迭代器返回参数依次为：  
序号，窗口句柄，标题，是否显示，进程ID，线程ID*/
}
```


