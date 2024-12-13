[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# libvlc.ax 库模块帮助文�?
## libvlc 成员列表

### libvlc.ax

LibVLC COM 控件

创建 LibVLC 控件

### libvlc.ax()

[返回对象:libVlcAxObject](#libVlcAxObject)

### libvlc.ax(winform)

参数 @winform 指定宿主窗口或控件对�?
## libVlcAxObject 成员列表

### libVlcAxObject.MediaPlayerPositionChanged

```aardio aardio
libVlcAxObject.MediaPlayerPositionChanged = function(pos){
    _/*播放进度改变回调此函数，pos 为当前进�?/
}

```

## libVlcAxObject.Playlist 成员列表

### libVlcAxObject.Playlist.Add()

添加视频地址，返回播放列�?ID

### libVlcAxObject.Playlist.PlayItem()

播放视频，参数指定播放列�?ID

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/libvlc/ax.md)

