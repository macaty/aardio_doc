[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# libvlc.media 库模块帮助文�?
## libvlcmediaObject 成员列表

### libvlcmediaObject.duration

返回持续时间,单位毫秒

### libvlcmediaObject.getEventManager()

获取事件管理�?
[返回对象:vlcEventManagerObject](#vlcEventManagerObject)

### libvlcmediaObject.getMeta(\_libvlc\_meta)

获取视频元数�?
如果元数据尚未准备好则解析并触发MediaMetaChanged消息

### libvlcmediaObject.mrl

资源地址

### libvlcmediaObject.parse()

解析媒体文件、元数据�?

默认是异步解析，调用此函数则同步解析

### libvlcmediaObject.player()

创建播放�?
[返回对象:libvlcplayerObject](#libvlcplayerObject)

### libvlcmediaObject.release()

释放对象引用

### libvlcmediaObject.saveMeta()

保存修改后的元数�?
### libvlcmediaObject.setMeta(\_libvlc\_meta , )

修改元数�?
注意修改后需要调�?saveMeta 函数保存

### 自动完成常量

\_libvlc\_meta\_Actors=0x16

\_libvlc\_meta\_Album=4

\_libvlc\_meta\_AlbumArtist=0x17

\_libvlc\_meta\_Artist=1

\_libvlc\_meta\_ArtworkURL=0xF

\_libvlc\_meta\_Copyright=3

\_libvlc\_meta\_Date=8

\_libvlc\_meta\_Description=6

\_libvlc\_meta\_Director=0x12

\_libvlc\_meta\_DiscNumber=0x18

\_libvlc\_meta\_EncodedBy=0xE

\_libvlc\_meta\_Episode=0x14

\_libvlc\_meta\_Genre=2

\_libvlc\_meta\_Language=0xB

\_libvlc\_meta\_NowPlaying=0xC

\_libvlc\_meta\_Publisher=0xD

\_libvlc\_meta\_Rating=7

\_libvlc\_meta\_Season=0x13

\_libvlc\_meta\_Setting=9

\_libvlc\_meta\_ShowName=0x15

\_libvlc\_meta\_Title=0

\_libvlc\_meta\_TrackID=0x10

\_libvlc\_meta\_TrackNumber=5

\_libvlc\_meta\_TrackTotal=0x11

\_libvlc\_meta\_URL=0xA

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/libvlc/media.md)

