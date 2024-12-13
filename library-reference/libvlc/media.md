# libvlc.media 库模块帮助文档

<a id="libvlcmediaObject"></a>
## libvlcmediaObject 成员列表


<a id="libvlcmediaObject.duration"></a>
### libvlcmediaObject.duration 
 返回持续时间,单位毫秒

<a id="libvlcmediaObject.getEventManager"></a>
### libvlcmediaObject.getEventManager() 
 获取事件管理器  
  
[返回对象:vlcEventManagerObject](#vlcEventManagerObject)

<a id="libvlcmediaObject.getMeta"></a>
### libvlcmediaObject.getMeta(_libvlc_meta) 
 获取视频元数据  
如果元数据尚未准备好则解析并触发MediaMetaChanged消息

<a id="libvlcmediaObject.mrl"></a>
### libvlcmediaObject.mrl 
 资源地址

<a id="libvlcmediaObject.parse"></a>
### libvlcmediaObject.parse() 
 解析媒体文件、元数据等,  
默认是异步解析，调用此函数则同步解析

<a id="libvlcmediaObject.player"></a>
### libvlcmediaObject.player() 
 创建播放器  
  
[返回对象:libvlcplayerObject](#libvlcplayerObject)

<a id="libvlcmediaObject.release"></a>
### libvlcmediaObject.release() 
 释放对象引用

<a id="libvlcmediaObject.saveMeta"></a>
### libvlcmediaObject.saveMeta() 
 保存修改后的元数据

<a id="libvlcmediaObject.setMeta"></a>
### libvlcmediaObject.setMeta(_libvlc_meta , ) 
 修改元数据  
注意修改后需要调用 saveMeta 函数保存


### 自动完成常量
_libvlc_meta_Actors=0x16  
_libvlc_meta_Album=4  
_libvlc_meta_AlbumArtist=0x17  
_libvlc_meta_Artist=1  
_libvlc_meta_ArtworkURL=0xF  
_libvlc_meta_Copyright=3  
_libvlc_meta_Date=8  
_libvlc_meta_Description=6  
_libvlc_meta_Director=0x12  
_libvlc_meta_DiscNumber=0x18  
_libvlc_meta_EncodedBy=0xE  
_libvlc_meta_Episode=0x14  
_libvlc_meta_Genre=2  
_libvlc_meta_Language=0xB  
_libvlc_meta_NowPlaying=0xC  
_libvlc_meta_Publisher=0xD  
_libvlc_meta_Rating=7  
_libvlc_meta_Season=0x13  
_libvlc_meta_Setting=9  
_libvlc_meta_ShowName=0x15  
_libvlc_meta_Title=0  
_libvlc_meta_TrackID=0x10  
_libvlc_meta_TrackNumber=5  
_libvlc_meta_TrackTotal=0x11  
_libvlc_meta_URL=0xA  
