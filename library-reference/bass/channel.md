[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# bass.channel 库模块帮助文�?
## bass 成员列表

### bass.channel()

[返回对象:basschannelObject](#basschannelObject)

## bass.channel 成员列表

### bass.channel.create

创建音频推送流�?
成功返回 bass.channe 对象,

失败返回null,错误信息

### bass.channel.create()

[返回对象:basschannelObject](#basschannelObject)

### bass.channel.create(freq,chans,flags)

创建音频推送流�?
参数@freq 指定采样率，@chans 指定通道数，@flags 指定选项�?
可选使用参数@2指定选项

详细用法请参考bass文档

### bass.channel.open

打开音频�?
成功返回 bass.channe 对象,

失败返回 null,错误信息

### bass.channel.open()

[返回对象:basschannelObject](#basschannelObject)

### bass.channel.open(path,flags)

打开音频,

参数@1可以指定本地文件路径、资源文件路径、网址、内存数�?

可选使用参数@2指定选项

详细用法请参考bass文档

## basschannelObject 成员列表

### basschannelObject.duration()

返回总时�?以秒为单�?
### basschannelObject.effect()

[返回对象:basseffectObject](#basseffectObject)

### basschannelObject.effect(type,priority)

创建效果

### basschannelObject.free()

释放对象

音频对象不会自动释放,

必须在不再使用该音频时手动调用些函数释放对象

### basschannelObject.getAttribute(attrib)

获取属性�?
### basschannelObject.getData(\_BASS\_DATA)

获取FFT频谱数据

### basschannelObject.getDevice()

返回音频设备索引

### basschannelObject.getInfo()

返回音频信息,返回格式请参考些函数源码

### basschannelObject.getPosition()

返回当前位置,可选使用参数@1指定使用的单�?
### basschannelObject.getTime()

返回以秒为单位的当前播放时间位置

### basschannelObject.getVolume()

返回音量,

返回值为0�?之间表示百分比的小数

### basschannelObject.isActive()

音频是否可用

### basschannelObject.loop()

设置是否循环播放

### basschannelObject.pause()

暂停播放

### basschannelObject.play()

播放音频

### basschannelObject.posCallback(callback,interval)

```aardio aardio
basschannelObject.posCallback(
    function(seconds){
        /*播放进度改变时触发此函数,
seconds为当前播放时�?以秒为单�?/
    }
)

```

### basschannelObject.push

如果是用 bass.channel.create 创建的推送流

可用此函数推送数�?
### basschannelObject.push(buffer,length)

buffer 为字符串�?buffer 对象�?
length 指定推送长度，如果不指�?length 则自动取参数 @1 长度�?
如果参数 @1 为内存指针，则必须指�?length 参数

### basschannelObject.resetEffect()

重置效果

### basschannelObject.setAttribute(attrib,value)

设置属性�?
### basschannelObject.setDevice()

指定音频设备索引,

参数�?bass.getDeviceInfos 返回的音频设备数组中对应设备的数组索引�?

参数指定的设备索引如果未初始化则自动调用 bass.init 函数初始�?
### basschannelObject.setFlags(flags,mask)

设置选项

### basschannelObject.setPosition(pos)

设置位置,可选使用参数@2指定使用的单�?
### basschannelObject.setTime(seconds)

设置当前播放时间位置,参数指定秒数

### basschannelObject.setVolume()

使用0�?之间表示百分比的小数设置音量

### basschannelObject.slideAttribute(attrib,value,milliseconds)

在参数@3指定的时间内

渐变参数@1指定的属性到参数@2指定的�?
### basschannelObject.slideVolume(vol,milliseconds)

渐变音量�?@vol 参数指定的�?

使用0�?之间表示百分比的小数表示音量

,参数@3指定渐变时长

### basschannelObject.stop()

停止播放

### basschannelObject.syncCallback(callback,syncType,syncParam)

```aardio aardio
basschannelObject.syncCallback(function(data){

},_BASS_SYNC/*指定同步回调类型,可选用参数@3指定附加参数
此函数详细用法请参数函数源码以及bass.dll的文�?/)

```

## basseffectObject 成员列表

### basseffectObject.delete()

删除效果

### basseffectObject.getParameters()

获取参数

### basseffectObject.setParameters()

设置参数

### basseffectObject.setPriority()

设置优先�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/bass/channel.md)

