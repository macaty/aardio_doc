[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# libvlc.mediaPlayer 库模块帮助文�?
## libvlcplayerObject 成员列表

### libvlcplayerObject.audioChannel

声道

### libvlcplayerObject.audioDelay

音频延迟时间，单位毫�?
### libvlcplayerObject.audioTrack

音轨

### libvlcplayerObject.fullscreen

是否全屏

### libvlcplayerObject.getAudioTrackCount()

获取音轨总数

### libvlcplayerObject.getAudioTrackDescription()

获取音轨描述

### libvlcplayerObject.getEventManager()

获取事件管理�?
[返回对象:vlcEventManagerObject](#vlcEventManagerObject)

### libvlcplayerObject.getMedia()

返回媒体文件描述对象

[返回对象:libvlcmediaObject](#libvlcmediaObject)

### libvlcplayerObject.getVideoAdjustFloat(\_libvlc\_adjust)

获取视频调整设置

### libvlcplayerObject.getVideoAdjustInt(\_libvlc\_adjust)

获取视频调整设置

### libvlcplayerObject.height

视频高度

### libvlcplayerObject.isBuffering()

视频是否正在缓冲

### libvlcplayerObject.isEnded()

视频是否已结�?
### libvlcplayerObject.isError()

视频是否遇到错误

### libvlcplayerObject.isOpening()

视频是否已打开

### libvlcplayerObject.isPaused()

视频是否已暂�?
### libvlcplayerObject.isPlaying()

视频是否正在播放

### libvlcplayerObject.isStopped()

视频是否已停�?
### libvlcplayerObject.length

视频总时�?单位毫秒

### libvlcplayerObject.loadMedia("媒体文件地址")

使用协议地址创建媒体文件描述对象

### libvlcplayerObject.loadMedia()

[返回对象:libvlcmediaObject](#libvlcmediaObject)

### libvlcplayerObject.loadMediaFile("本体文件路径")

打开本地文件创建媒体文件描述对象

### libvlcplayerObject.loadMediaFile()

[返回对象:libvlcmediaObject](#libvlcmediaObject)

### libvlcplayerObject.mute

是否静音

### libvlcplayerObject.pause()

暂停

### libvlcplayerObject.play()

播放

### libvlcplayerObject.release()

关闭播放�?
### libvlcplayerObject.resume()

继续

### libvlcplayerObject.setMedia(媒体文件描述对象)

修改媒体文件描述对象

### libvlcplayerObject.setVideoAdjustFloat(\_libvlc\_adjust,)

修改视频调整设置

### libvlcplayerObject.setVideoAdjustInt(\_libvlc\_adjust,)

修改视频调整设置

### libvlcplayerObject.setWindow(winform)

指定输出视频的窗口对�?
### libvlcplayerObject.spu

当前字幕索引

### libvlcplayerObject.spuDelay

字幕延迟时间,单位毫秒

### libvlcplayerObject.spuDescription

返回字幕描述数组

获取数组包含所有字幕条目描�?
### libvlcplayerObject.spuLoad("字幕路径")

加载字幕

### libvlcplayerObject.stop()

停止

### libvlcplayerObject.takeSnapshot("图像文件路径",宽度,高度)

截图

宽度高度参数可省�?
### libvlcplayerObject.time

当前播放位置,单位毫秒

### libvlcplayerObject.volume

音量,0�?00范围的整数�?
0为静�?
### libvlcplayerObject.width

视频宽度

### 自动完成常量

\_libvlc\_Buffering=2

\_libvlc\_Ended=6

\_libvlc\_Error=7

\_libvlc\_NothingSpecial=0

\_libvlc\_Opening=1

\_libvlc\_Paused=4

\_libvlc\_Playing=3

\_libvlc\_Stopped=5

\_libvlc\_adjust\_Brightness=2

\_libvlc\_adjust\_Contrast=1

\_libvlc\_adjust\_Enable=0

\_libvlc\_adjust\_Gamma=5

\_libvlc\_adjust\_Hue=3

\_libvlc\_adjust\_Saturation=4

\_libvlc\_position\_bottom=6

\_libvlc\_position\_bottom\_left=7

\_libvlc\_position\_bottom\_right=8

\_libvlc\_position\_center=0

\_libvlc\_position\_disable=-1

\_libvlc\_position\_left=1

\_libvlc\_position\_right=2

\_libvlc\_position\_top=3

\_libvlc\_position\_top\_left=4

\_libvlc\_position\_top\_right=5

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/libvlc/mediaPlayer.md)

