# libvlc.mediaPlayer 库模块帮助文档

<a id="libvlcplayerObject"></a>
## libvlcplayerObject 成员列表


<a id="libvlcplayerObject.audioChannel"></a>
### libvlcplayerObject.audioChannel 
 声道

<a id="libvlcplayerObject.audioDelay"></a>
### libvlcplayerObject.audioDelay 
 音频延迟时间，单位毫秒

<a id="libvlcplayerObject.audioTrack"></a>
### libvlcplayerObject.audioTrack 
 音轨

<a id="libvlcplayerObject.fullscreen"></a>
### libvlcplayerObject.fullscreen 
 是否全屏

<a id="libvlcplayerObject.getAudioTrackCount"></a>
### libvlcplayerObject.getAudioTrackCount() 
 获取音轨总数

<a id="libvlcplayerObject.getAudioTrackDescription"></a>
### libvlcplayerObject.getAudioTrackDescription() 
 获取音轨描述

<a id="libvlcplayerObject.getEventManager"></a>
### libvlcplayerObject.getEventManager() 
 获取事件管理器  
  
[返回对象:vlcEventManagerObject](#vlcEventManagerObject)

<a id="libvlcplayerObject.getMedia"></a>
### libvlcplayerObject.getMedia() 
 返回媒体文件描述对象  
  
[返回对象:libvlcmediaObject](#libvlcmediaObject)

<a id="libvlcplayerObject.getVideoAdjustFloat"></a>
### libvlcplayerObject.getVideoAdjustFloat(_libvlc_adjust) 
 获取视频调整设置

<a id="libvlcplayerObject.getVideoAdjustInt"></a>
### libvlcplayerObject.getVideoAdjustInt(_libvlc_adjust) 
 获取视频调整设置

<a id="libvlcplayerObject.height"></a>
### libvlcplayerObject.height 
 视频高度

<a id="libvlcplayerObject.isBuffering"></a>
### libvlcplayerObject.isBuffering() 
 视频是否正在缓冲

<a id="libvlcplayerObject.isEnded"></a>
### libvlcplayerObject.isEnded() 
 视频是否已结束

<a id="libvlcplayerObject.isError"></a>
### libvlcplayerObject.isError() 
 视频是否遇到错误

<a id="libvlcplayerObject.isOpening"></a>
### libvlcplayerObject.isOpening() 
 视频是否已打开

<a id="libvlcplayerObject.isPaused"></a>
### libvlcplayerObject.isPaused() 
 视频是否已暂停

<a id="libvlcplayerObject.isPlaying"></a>
### libvlcplayerObject.isPlaying() 
 视频是否正在播放

<a id="libvlcplayerObject.isStopped"></a>
### libvlcplayerObject.isStopped() 
 视频是否已停止

<a id="libvlcplayerObject.length"></a>
### libvlcplayerObject.length 
 视频总时长,单位毫秒

<a id="libvlcplayerObject.loadMedia"></a>
### libvlcplayerObject.loadMedia("媒体文件地址") 
 使用协议地址创建媒体文件描述对象

<a id="libvlcplayerObject.loadMedia"></a>
### libvlcplayerObject.loadMedia() 
 [返回对象:libvlcmediaObject](#libvlcmediaObject)

<a id="libvlcplayerObject.loadMediaFile"></a>
### libvlcplayerObject.loadMediaFile("本体文件路径") 
 打开本地文件创建媒体文件描述对象

<a id="libvlcplayerObject.loadMediaFile"></a>
### libvlcplayerObject.loadMediaFile() 
 [返回对象:libvlcmediaObject](#libvlcmediaObject)

<a id="libvlcplayerObject.mute"></a>
### libvlcplayerObject.mute 
 是否静音

<a id="libvlcplayerObject.pause"></a>
### libvlcplayerObject.pause() 
 暂停

<a id="libvlcplayerObject.play"></a>
### libvlcplayerObject.play() 
 播放

<a id="libvlcplayerObject.release"></a>
### libvlcplayerObject.release() 
 关闭播放器

<a id="libvlcplayerObject.resume"></a>
### libvlcplayerObject.resume() 
 继续

<a id="libvlcplayerObject.setMedia"></a>
### libvlcplayerObject.setMedia(媒体文件描述对象) 
 修改媒体文件描述对象

<a id="libvlcplayerObject.setVideoAdjustFloat"></a>
### libvlcplayerObject.setVideoAdjustFloat(_libvlc_adjust,) 
 修改视频调整设置

<a id="libvlcplayerObject.setVideoAdjustInt"></a>
### libvlcplayerObject.setVideoAdjustInt(_libvlc_adjust,) 
 修改视频调整设置

<a id="libvlcplayerObject.setWindow"></a>
### libvlcplayerObject.setWindow(winform) 
 指定输出视频的窗口对象

<a id="libvlcplayerObject.spu"></a>
### libvlcplayerObject.spu 
 当前字幕索引

<a id="libvlcplayerObject.spuDelay"></a>
### libvlcplayerObject.spuDelay 
 字幕延迟时间,单位毫秒

<a id="libvlcplayerObject.spuDescription"></a>
### libvlcplayerObject.spuDescription 
 返回字幕描述数组

获取数组包含所有字幕条目描述

<a id="libvlcplayerObject.spuLoad"></a>
### libvlcplayerObject.spuLoad("字幕路径") 
 加载字幕

<a id="libvlcplayerObject.stop"></a>
### libvlcplayerObject.stop() 
 停止

<a id="libvlcplayerObject.takeSnapshot"></a>
### libvlcplayerObject.takeSnapshot("图像文件路径",宽度,高度) 
 截图  
宽度高度参数可省略

<a id="libvlcplayerObject.time"></a>
### libvlcplayerObject.time 
 当前播放位置,单位毫秒

<a id="libvlcplayerObject.volume"></a>
### libvlcplayerObject.volume 
 音量,0到100范围的整数值  
0为静音

<a id="libvlcplayerObject.width"></a>
### libvlcplayerObject.width 
 视频宽度


### 自动完成常量
_libvlc_Buffering=2  
_libvlc_Ended=6  
_libvlc_Error=7  
_libvlc_NothingSpecial=0  
_libvlc_Opening=1  
_libvlc_Paused=4  
_libvlc_Playing=3  
_libvlc_Stopped=5  
_libvlc_adjust_Brightness=2  
_libvlc_adjust_Contrast=1  
_libvlc_adjust_Enable=0  
_libvlc_adjust_Gamma=5  
_libvlc_adjust_Hue=3  
_libvlc_adjust_Saturation=4  
_libvlc_position_bottom=6  
_libvlc_position_bottom_left=7  
_libvlc_position_bottom_right=8  
_libvlc_position_center=0  
_libvlc_position_disable=-1  
_libvlc_position_left=1  
_libvlc_position_right=2  
_libvlc_position_top=3  
_libvlc_position_top_left=4  
_libvlc_position_top_right=5  
