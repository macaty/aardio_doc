# bass.channel 库模块帮助文档

<a id="bass"></a>
## bass 成员列表


<a id="bass.channel"></a>
### bass.channel() 
 [返回对象:basschannelObject](#basschannelObject)

<a id="bass.channel"></a>
## bass.channel 成员列表


<a id="bass.channel.create"></a>
### bass.channel.create 
 创建音频推送流。  
成功返回 bass.channe 对象,  
失败返回null,错误信息

<a id="bass.channel.create"></a>
### bass.channel.create() 
 [返回对象:basschannelObject](#basschannelObject)

<a id="bass.channel.create"></a>
### bass.channel.create(freq,chans,flags) 
 创建音频推送流。  
参数@freq 指定采样率，@chans 指定通道数，@flags 指定选项。  
可选使用参数@2指定选项  
详细用法请参考bass文档

<a id="bass.channel.open"></a>
### bass.channel.open 
 打开音频。  
成功返回 bass.channe 对象,  
失败返回 null,错误信息

<a id="bass.channel.open"></a>
### bass.channel.open() 
 [返回对象:basschannelObject](#basschannelObject)

<a id="bass.channel.open"></a>
### bass.channel.open(path,flags) 
 打开音频,  
参数@1可以指定本地文件路径、资源文件路径、网址、内存数据,  
可选使用参数@2指定选项  
详细用法请参考bass文档

<a id="basschannelObject"></a>
## basschannelObject 成员列表


<a id="basschannelObject.duration"></a>
### basschannelObject.duration() 
 返回总时长,以秒为单位

<a id="basschannelObject.effect"></a>
### basschannelObject.effect() 
 [返回对象:basseffectObject](#basseffectObject)

<a id="basschannelObject.effect"></a>
### basschannelObject.effect(type,priority) 
 创建效果

<a id="basschannelObject.free"></a>
### basschannelObject.free() 
 释放对象  
音频对象不会自动释放,  
必须在不再使用该音频时手动调用些函数释放对象

<a id="basschannelObject.getAttribute"></a>
### basschannelObject.getAttribute(attrib) 
 获取属性值

<a id="basschannelObject.getData"></a>
### basschannelObject.getData(_BASS_DATA) 
 获取FFT频谱数据

<a id="basschannelObject.getDevice"></a>
### basschannelObject.getDevice() 
 返回音频设备索引

<a id="basschannelObject.getInfo"></a>
### basschannelObject.getInfo() 
 返回音频信息,返回格式请参考些函数源码

<a id="basschannelObject.getPosition"></a>
### basschannelObject.getPosition() 
 返回当前位置,可选使用参数@1指定使用的单位

<a id="basschannelObject.getTime"></a>
### basschannelObject.getTime() 
 返回以秒为单位的当前播放时间位置

<a id="basschannelObject.getVolume"></a>
### basschannelObject.getVolume() 
 返回音量,  
返回值为0到1之间表示百分比的小数

<a id="basschannelObject.isActive"></a>
### basschannelObject.isActive() 
 音频是否可用

<a id="basschannelObject.loop"></a>
### basschannelObject.loop() 
 设置是否循环播放

<a id="basschannelObject.pause"></a>
### basschannelObject.pause() 
 暂停播放

<a id="basschannelObject.play"></a>
### basschannelObject.play() 
 播放音频

<a id="basschannelObject.posCallback"></a>
### basschannelObject.posCallback(callback,interval) 
 

```aardio
basschannelObject.posCallback(  
	function(seconds){  
		/*播放进度改变时触发此函数,  
seconds为当前播放时长,以秒为单位*/	  
	}  
)
```



<a id="basschannelObject.push"></a>
### basschannelObject.push 
 如果是用 bass.channel.create 创建的推送流  
可用此函数推送数据

<a id="basschannelObject.push"></a>
### basschannelObject.push(buffer,length) 
 buffer 为字符串或 buffer 对象。  
length 指定推送长度，如果不指定 length 则自动取参数 @1 长度。  
如果参数 @1 为内存指针，则必须指定 length 参数

<a id="basschannelObject.resetEffect"></a>
### basschannelObject.resetEffect() 
 重置效果

<a id="basschannelObject.setAttribute"></a>
### basschannelObject.setAttribute(attrib,value) 
 设置属性值

<a id="basschannelObject.setDevice"></a>
### basschannelObject.setDevice() 
 指定音频设备索引,  
参数为 bass.getDeviceInfos 返回的音频设备数组中对应设备的数组索引值,  
参数指定的设备索引如果未初始化则自动调用 bass.init 函数初始化

<a id="basschannelObject.setFlags"></a>
### basschannelObject.setFlags(flags,mask) 
 设置选项

<a id="basschannelObject.setPosition"></a>
### basschannelObject.setPosition(pos) 
 设置位置,可选使用参数@2指定使用的单位

<a id="basschannelObject.setTime"></a>
### basschannelObject.setTime(seconds) 
 设置当前播放时间位置,参数指定秒数

<a id="basschannelObject.setVolume"></a>
### basschannelObject.setVolume() 
 使用0到1之间表示百分比的小数设置音量

<a id="basschannelObject.slideAttribute"></a>
### basschannelObject.slideAttribute(attrib,value,milliseconds) 
 在参数@3指定的时间内  
渐变参数@1指定的属性到参数@2指定的值

<a id="basschannelObject.slideVolume"></a>
### basschannelObject.slideVolume(vol,milliseconds) 
 渐变音量到 @vol 参数指定的值,  
使用0到1之间表示百分比的小数表示音量  
,参数@3指定渐变时长

<a id="basschannelObject.stop"></a>
### basschannelObject.stop() 
 停止播放

<a id="basschannelObject.syncCallback"></a>
### basschannelObject.syncCallback(callback,syncType,syncParam) 
 

```aardio
basschannelObject.syncCallback(function(data){  
	  
},_BASS_SYNC/*指定同步回调类型,可选用参数@3指定附加参数  
此函数详细用法请参数函数源码以及bass.dll的文档*/)
```



<a id="basseffectObject"></a>
## basseffectObject 成员列表


<a id="basseffectObject.delete"></a>
### basseffectObject.delete() 
 删除效果

<a id="basseffectObject.getParameters"></a>
### basseffectObject.getParameters() 
 获取参数

<a id="basseffectObject.setParameters"></a>
### basseffectObject.setParameters() 
 设置参数

<a id="basseffectObject.setPriority"></a>
### basseffectObject.setPriority() 
 设置优先级
