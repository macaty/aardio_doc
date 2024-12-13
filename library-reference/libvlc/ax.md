# libvlc.ax 库模块帮助文档

<a id="libvlc"></a>
## libvlc 成员列表


<a id="libvlc.ax"></a>
### libvlc.ax 
 LibVLC COM 控件

创建 LibVLC 控件

<a id="libvlc.ax"></a>
### libvlc.ax() 
 [返回对象:libVlcAxObject](#libVlcAxObject)

<a id="libvlc.ax"></a>
### libvlc.ax(winform) 
 参数 @winform 指定宿主窗口或控件对象

<a id="libVlcAxObject"></a>
## libVlcAxObject 成员列表


<a id="libVlcAxObject.MediaPlayerPositionChanged"></a>
### libVlcAxObject.MediaPlayerPositionChanged 
 

```aardio
libVlcAxObject.MediaPlayerPositionChanged = function(pos){
	_/*播放进度改变回调此函数，pos 为当前进度*/
}
```



<a id="libVlcAxObject.Playlist"></a>
## libVlcAxObject.Playlist 成员列表


<a id="libVlcAxObject.Playlist.Add"></a>
### libVlcAxObject.Playlist.Add() 
 添加视频地址，返回播放列表 ID

<a id="libVlcAxObject.Playlist.PlayItem"></a>
### libVlcAxObject.Playlist.PlayItem() 
 播放视频，参数指定播放列表 ID
