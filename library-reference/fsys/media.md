# fsys.media 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.media"></a>
### fsys.media("媒体文件路径","其他选项",通知窗口) 
 打开媒体文件,支持 MP3。  
参数@2,@3为可选参数  
如果指定了通知窗口，操作完成以后窗口会收到 _MM_MCINOTIFY 消息  
  
如果同一线程已打开同一文件，则返回已打开的 fsys.media 对象，并移动播放位置到开始处。  
fsys.media 创建的对象在超出变量作用域后会自动释放  
对象关闭后会自动关闭正在播放的媒体文件  
所以不要使用临时变量播放媒体文件

<a id="fsys.media"></a>
### fsys.media() 
 [返回对象:fsysMediaObject](#fsysMediaObject)

<a id="fsys.media"></a>
## fsys.media 成员列表


<a id="fsys.media.closeAll"></a>
### fsys.media.closeAll() 
 全部关闭

<a id="fsys.media.execute"></a>
### fsys.media.execute("MCI媒体控制命令",通知窗口句柄) 
 发送MCI媒体控制命令  
如果指定通知窗口句柄则在命令尾部添加"notify",  
成功返回true,可选的返回消息,  
失败返回false,错误信息

<a id="fsys.media.getErrorString"></a>
### fsys.media.getErrorString(错误代码) 
 返回错误信息

<a id="fsys.media.playRepeat"></a>
### fsys.media.playRepeat("音频文件路径",播放次数) 
 创建线程并重复播放指定的wav或mp3文件,  
参数@1指定文件路径或资源文件路径  
参数@2指定播放次数

<a id="fsys.media.playSound"></a>
### fsys.media.playSound("WAVE文件路径",选项) 
 播放WAVE文件,参数@2可选  
WAVE文件可指定内嵌资源或内存文件,如果为null空值则停止播放  
选项不指定时默认为_SND_ASYNC,也即启用异步播放,  
选项指定为0时同步播放并等待播放完成,同步播放建议放到工作线程里

<a id="fsysMediaObject"></a>
## fsysMediaObject 成员列表


<a id="fsysMediaObject.close"></a>
### fsysMediaObject.close() 
 关闭

<a id="fsysMediaObject.deviceId"></a>
### fsysMediaObject.deviceId 
 打开的设备标识符，数值。  
_MM_MCINOTIFY 消息的 lParam 参数里存放的就是这里的 deviceId

<a id="fsysMediaObject.hwndCallback"></a>
### fsysMediaObject.hwndCallback 
 指定用于接收_MM_MCINOTIFY通知消息的窗口句柄  
_MM_MCINOTIFY可用于获取指令执行状态

<a id="fsysMediaObject.isPaused"></a>
### fsysMediaObject.isPaused() 
 是否已暂停

<a id="fsysMediaObject.isPlaying"></a>
### fsysMediaObject.isPlaying() 
 是否正在播放

<a id="fsysMediaObject.isStopped"></a>
### fsysMediaObject.isStopped() 
 是否已停止播放

<a id="fsysMediaObject.length"></a>
### fsysMediaObject.length() 
 音频长度

<a id="fsysMediaObject.mode"></a>
### fsysMediaObject.mode() 
 返回当前模式，  
所有设备都存在 "not ready", "paused", "playing",  "stopped" 等模式,  
一些设备可能返回 "open", "parked", "recording",  "seeking" 等值

<a id="fsysMediaObject.path"></a>
### fsysMediaObject.path() 
 打开的文件路径

<a id="fsysMediaObject.pause"></a>
### fsysMediaObject.pause() 
 暂停

<a id="fsysMediaObject.play"></a>
### fsysMediaObject.play("repeat") 
 循环播放,  
仅适用于mp3，wav文件不支持

<a id="fsysMediaObject.play"></a>
### fsysMediaObject.play("wait") 
 播放并等待，  
重新播放声音应该调用要seek(1)回到开始位置  
此操作会阻塞代码向后执行,最好是在工作线程里执行

<a id="fsysMediaObject.play"></a>
### fsysMediaObject.play() 
 播放声音  
可选添加多个文本指令参数  
无参数时不会阻塞当前线程，  
fsys.media 对像在析构时，会自动关闭声音，所以在声音播放时，要保持变量在生命周期内，  
重新播放声音应该调用要seek(1)回到开始位置

<a id="fsysMediaObject.position"></a>
### fsysMediaObject.position() 
 返回当前播放位置

<a id="fsysMediaObject.ready"></a>
### fsysMediaObject.ready() 
 是否准备就绪可继续处理命令

<a id="fsysMediaObject.resume"></a>
### fsysMediaObject.resume() 
 继续

<a id="fsysMediaObject.seek"></a>
### fsysMediaObject.seek(位置) 
 移动到指定位置  
参数为1表示移动到开始位置，  
在播放声音以后重新播放声音时可调用此函数重新回到声音文件的开始位置

<a id="fsysMediaObject.send"></a>
### fsysMediaObject.send("MCI媒体控制命令") 
 使用$PATH表示打开的媒体文件路径,不要加引号  
如果传入多个参数则使用string.format格式化  
[所有可用指令]( https://docs.microsoft.com/en-us/windows/desktop/Multimedia/multimedia-command-strings )

<a id="fsysMediaObject.step"></a>
### fsysMediaObject.step(-1) 
 负数向前,正数向后,省略跳到下一步

<a id="fsysMediaObject.stop"></a>
### fsysMediaObject.stop() 
 停止播放

<a id="fsysMediaObject.volume"></a>
### fsysMediaObject.volume() 
 无参数获取音量  
指定数值参数设置音量
