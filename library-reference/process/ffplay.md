[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.ffplay 库模块帮助文�?
## process 成员列表

### process.ffplay

调用 ffplay.exe 播放视频，并嵌入视频窗口到当前程序�?
创归视频播放器�?
### process.ffplay()

[返回对象:processFFplayObject](#processFFplayObject)

### process.ffplay(form,ffplayPath,arg1,...)

创归视频播放器�?
@form 参数指定嵌入窗口�?custom 控件窗口�?
@ffplay 参数指定 ffplay.exe 路径�?
可指定一个或多个 ffplay 命令行参数，参数用法请查�?ffplay 文档�?
一般可�?@arg1 参数直接指定视频文件地址即可�?
## processFFplayObject 成员列表

### processFFplayObject.duration

总时长，以秒为单�?
### processFFplayObject.onPlayTimeChanged

```aardio aardio
processFFplayObject.onPlayTimeChanged = function(timePose){
    /*视频播放进度回调函数�?timePose 为当前进度，以秒为单�?/
}

```

### processFFplayObject.pause()

切换暂停

### processFFplayObject.seek()

改变播放进度到参�?@1 指定的时间位置，以秒为单位�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/ffplay.md)

