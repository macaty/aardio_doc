# process.ffplay 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.ffplay"></a>
### process.ffplay 
 调用 ffplay.exe 播放视频，并嵌入视频窗口到当前程序。

创归视频播放器。

<a id="process.ffplay"></a>
### process.ffplay() 
 [返回对象:processFFplayObject](#processFFplayObject)

<a id="process.ffplay"></a>
### process.ffplay(form,ffplayPath,arg1,...) 
 创归视频播放器。  
@form 参数指定嵌入窗口或 custom 控件窗口。  
@ffplay 参数指定 ffplay.exe 路径。  
可指定一个或多个 ffplay 命令行参数，参数用法请查看 ffplay 文档。  
一般可用 @arg1 参数直接指定视频文件地址即可。

<a id="processFFplayObject"></a>
## processFFplayObject 成员列表


<a id="processFFplayObject.duration"></a>
### processFFplayObject.duration 
 总时长，以秒为单位

<a id="processFFplayObject.onPlayTimeChanged"></a>
### processFFplayObject.onPlayTimeChanged 
 

```aardio
processFFplayObject.onPlayTimeChanged = function(timePose){
	/*视频播放进度回调函数，  
timePose 为当前进度，以秒为单位*/	
}
```



<a id="processFFplayObject.pause"></a>
### processFFplayObject.pause() 
 切换暂停

<a id="processFFplayObject.seek"></a>
### processFFplayObject.seek() 
 改变播放进度到参数 @1 指定的时间位置，以秒为单位。
