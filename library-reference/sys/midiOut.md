# sys.midiOut 库模块帮助文档

<a id="sys"></a>
## sys 成员列表


<a id="sys.midiOut"></a>
### sys.midiOut() 
 [返回对象:sysMidiOutObject](#sysMidiOutObject)

<a id="sys.midiOut"></a>
### sys.midiOut(deviceId,callback,flags) 
 打开 MIDI 输出设备。  
所有参数都可以省略，一般不需要了解，用法细节请查看源码。  
  
可选用 @deviceId 指定设备 ID  
设备 ID 从 0 开始且小于 sys.midiOut.numDevice 函数返回值，  
省略则为默认值 -1，也就是 _MIDI_MAPPER

<a id="sys.midiOut"></a>
### sys.midiOut(sysMidiOutObject) 
 参数指定其他 sys.midiOut 对象，  
返回复制的副本对象。  
副本对象可指定不同的 channel 属性，  
并可调用 changeInstrument 函数切换不同的乐器

<a id="sys.midiOut"></a>
## sys.midiOut 成员列表

MIDI 音乐输出设备操作  
[教程链接](https://mp.weixin.qq.com/s/Feq3dT7r7G6F0cXlpXpRZQ)

打开 MIDI 音乐输出设备。  
成功返回设备对象，失败返回 null,错误信息。  
返回的设备对象可传到其他线程，或复制多个副本对象，  
副本对象可指定不同的 channel 属性，  
并可调用 changeInstrument 函数切换不同的乐器，  
可实现多线程多乐器多通道合奏  
  
在同一进程中如果未关闭设备则不能重复打开，  
不同进程可以打开同一设备

<a id="sys.midiOut.eachDevice"></a>
### sys.midiOut.eachDevice() 
 

```aardio
for deviceId,capabilities in sys.midiOut.eachDevice(){
	/*循环遍历所有 MIDI 输出设备，  
deviceId 为设备 ID,capabilities 为 MIDIOUTCAPS 结构体*/
}
```



<a id="sys.midiOut.notes"></a>
### sys.midiOut.notes 
 定义了全部音符的名字空间，  
键为 SPN 音名，值为音高（pitch）。  
音名中的 -1 省略，升号 ♯（Sharp） 用小写 s 替代。  
例如：C-1♯ 略写为 Cs  
  
可用 namespace sys.midiOut.notes { } 语句打开此名字空间使用音名  
  
此名字空间还包含所有音名的小写音名，  
小写音名为对应音高取负并减 1。  
正值作为音符参数传给 note 函数演奏该音符，  
负值作为音符参数传给 note 函数停止演奏对应音符  
  
此名字空间的下划线 _ 的值为 250，  
传入 note,xcal 等函数可延时 250 毫秒

<a id="sys.midiOut.parseNotes"></a>
### sys.midiOut.parseNotes 
 解析字符串格式乐谱并返回 play 函数支持的音符数组，  
所有音符或指令使用逗号、竖线、换行之一分开，忽略空格与制表符。  
不符合格式要求的项一律作为字幕传给 log 函数输出

<a id="sys.midiOut.parseNotes"></a>
### sys.midiOut.parseNotes(notes,do,delay) 
 解析字符串格式乐谱并返回 play 函数支持的音符数组。  
参数 @notes 指定一个字符串，  
在字符串中所有音符或指令使用逗号、竖线、换行之一分开，忽略空格与制表符。  
除了支持 sys.midiOut.notes 定义的全部音名，  
也可以使用简谱记号 1,2,3,4,5,6,7 表示音符，  
数字音符后加 N（小于 5 ）个单引号表示提高 N 个八度音，  
数字音符前加 N（小于 5 ）个单引号表示降低 N 个八度音。  
数字音符前再加 &num; 号表示升高半个音，0 为休止符。  
下划线则表示一个延时单位，其他数值也表示延时（毫秒），  
前面的音符（或下划线）与后面的下划线可以连起来写。  
双下划线 ‗ 表示 _ 的延时取半，多个 ‗ 不能连着写。  
支持函数语法，例如 "1,delay(120)"   
  
如果 @notes 为字符串，可选用 @duo 参数指定 1 音的音高，默认为"C4"，  
可选用 @delay 参数指定下划线表示的延时单位，默认 250 毫秒

<a id="sysMidiOutObject"></a>
## sysMidiOutObject 成员列表


<a id="sysMidiOutObject.afterTouch"></a>
### sysMidiOutObject.afterTouch(pitch,touch,channel) 
 触后效果，  
指击键后通过改变对键盘的压力来改变音色符  
@pitch 可用 0~127 范围的值指定音高。  
@channel 可用 0~16 范围的值指定通道，省略则默认为当前通道。  
注意指定 @channel 并不会修改当前通道

<a id="sysMidiOutObject.cc"></a>
### sysMidiOutObject.cc(number,value,channel) 
 发送 CC（Continuous controller） 消息  
@number 指定编号，@value 指定值，  
可选用 @channel 指定通道，省略则默认为当前通道。  
注意指定 @channel 并不会修改当前通道

<a id="sysMidiOutObject.changeInstrument"></a>
### sysMidiOutObject.changeInstrument(instrument,channel) 
 切换乐器,  
@instrument 指定乐器编号，可选编号为 0~127 范围的值。  
乐器编号就搜索 MIDI 资料。  
@channel 可用 0~16 范围的值指定通道，省略则默认为当前通道。  
注意指定 @channel 并不会修改当前通道

<a id="sysMidiOutObject.channel"></a>
### sysMidiOutObject.channel 
 默认通道，可指定 0~16 范围的值。  
如果将 sys.midiOut 传入不同的线程，  
或以 sys.midiOut 为构造参数复制对象，  
则可指定不同的 channel 属性，切换不同的乐器，  
实现多通道合奏

<a id="sysMidiOutObject.channelPressure("></a>
### sysMidiOutObject.channelPressure((pressure,channel) 
 触后通道压力  
@pressure 指定压力，  
可选用 @channel 指定通道，省略则默认为当前通道

<a id="sysMidiOutObject.close"></a>
### sysMidiOutObject.close() 
 关闭所有线程的同一设备对象，  
不应关闭在其他线程已关闭的对象。  
对象回收时不会自动调用此函数。  
  
在同一进程中如果未关闭设备则不能重复打开，  
不同进程可以打开同一设备

<a id="sysMidiOutObject.delay"></a>
### sysMidiOutObject.delay() 
 延迟参数 @1 指定的毫秒数

<a id="sysMidiOutObject.getVolume"></a>
### sysMidiOutObject.getVolume() 
 获取音量，0xFFFF 为最大值，0 为静音

<a id="sysMidiOutObject.log"></a>
### sysMidiOutObject.log 
 用于输出字幕，默认是一个空函数。  
可指定为其他可输出内容的函数。  
此函数仅接受一个要输出的字符串参数

<a id="sysMidiOutObject.msg"></a>
### sysMidiOutObject.msg(msg,dw1,dw2) 
 发送消息，  
@msg 指定消息 ID，其他参数为数值

<a id="sysMidiOutObject.note"></a>
### sysMidiOutObject.note 
 演奏或停止演奏

<a id="sysMidiOutObject.note"></a>
### sysMidiOutObject.note(pitch,velocity,channel) 
 演奏或停止演奏  
@pitch 如果指定 0~127 范围的值指定音高，则演奏指定音符。  
如果指定 -1~-128之间的值，则取正数并减一，然后停止演奏音高的音符。  
@velocity 指定按键速度（音量强度），可指定 0~127 范围的值。  
@channel 可用 0~16 范围的值指定通道，省略则默认为 0

<a id="sysMidiOutObject.noteOff"></a>
### sysMidiOutObject.noteOff 
 停止演奏音符

<a id="sysMidiOutObject.noteOff"></a>
### sysMidiOutObject.noteOff(pitch,velocity,channel) 
 停止演奏音符  
@pitch 可用 0~127 范围的值指定音高。  
@channel 可用 0~16 范围的值指定通道，省略则默认为当前通道

<a id="sysMidiOutObject.noteOn"></a>
### sysMidiOutObject.noteOn 
 演奏音符

<a id="sysMidiOutObject.noteOn"></a>
### sysMidiOutObject.noteOn(pitch,velocity,channel) 
 演奏音符。  
@pitch 可用 0~127 范围的值指定音高，相邻为半音，隔一为全音。  
@velocity 指定按键速度（音量强度），可指定 0~127 范围的值。  
@channel 可用 0~16 范围的值指定通道，省略则默认为当前通道

<a id="sysMidiOutObject.onNote"></a>
### sysMidiOutObject.onNote 
 

```aardio
sysMidiOutObject.onNote = function(pitch,velocity,channel){
	/*演奏指定音符时回调此函数，  
回调参数为 noteOn 函数的调用参数。  
这里最好不要阻塞线程，可用 thread.command 异步调用界面线程函数*/
}
```



<a id="sysMidiOutObject.pitchBend"></a>
### sysMidiOutObject.pitchBend(value,channel) 
 调整弯音轮  
@value 用一个小数指定音高弯曲比例。  
0 ~ 0.5 表示向下弯曲，0.5 ~ 1 表示向上弯曲

<a id="sysMidiOutObject.pitchBend2"></a>
### sysMidiOutObject.pitchBend2(value,channel) 
 调整弯音轮  
@value 用 14 位整数指定 0~16383 范围的音高弯曲值。  
0表示向下弯曲2个半音，16383表示向上弯曲2个半音

<a id="sysMidiOutObject.play"></a>
### sysMidiOutObject.play 
 解析并播放所有音符与指令，  
如果参数 @1 传入字符串格式的乐谱，  
则所有音符或指令使用逗号、竖线、换行之一分开，忽略空格与制表符。  
不符合格式要求的项一律作为字幕传给 log 函数输出

<a id="sysMidiOutObject.play"></a>
### sysMidiOutObject.play(notes,do,delay) 
 解析并播放所有音符。  
如果参数 @note 是一个数组，则循环调用 xcall 函数解析并播放音符。  
如果参数 @notes 是一个字符串，  
则首先调用 sys.midiOut.parseNotes 解析为音符数组，  
在字符串中所有音符或指令使用逗号、竖线、换行之一分开，忽略空格与制表符。  
除了支持 sys.midiOut.notes 定义的全部音名，  
也可以使用简谱记号 1,2,3,4,5,6,7 表示音符。  
数字音符后加 N（小于 5 ）个单引号表示提高 N 个八度音，  
数字音符前加 N（小于 5 ）个单引号表示降低 N 个八度音。  
数字音符前再加 &num; 号表示升高半个音，0 为休止符。  
下划线则表示一个延时单位，其他数值也表示延时（毫秒），  
前面的音符（或下划线）与后面的下划线可以连起来写。  
双下划线 ‗ 表示 _ 的延时取半，多个 ‗ 不能连着写。  
支持函数语法，例如 "1,delay(120)"   
  
如果 @notes 为字符串，可选用 @duo 参数指定 1 音的音高，默认为"C4"，  
可选用 @delay 参数指定下划线表示的延时单位，默认 250 毫秒

<a id="sysMidiOutObject.reset"></a>
### sysMidiOutObject.reset() 
 关闭所有音符

<a id="sysMidiOutObject.setVelocity"></a>
### sysMidiOutObject.setVelocity() 
 使用参数 @1 设置 xcall,play 函数默认按键速度（音量），  
参数可指定 0~127 范围的值

<a id="sysMidiOutObject.setVolume"></a>
### sysMidiOutObject.setVolume() 
 指定音量，0xFFFF 为最大值，0 为静音

<a id="sysMidiOutObject.shortMsg"></a>
### sysMidiOutObject.shortMsg 
 发送短消息

<a id="sysMidiOutObject.shortMsg"></a>
### sysMidiOutObject.shortMsg(status,data1,data2) 
 发送短消息。  
@status 指定数值，0xC0 为切换乐器，0x90 为发送音符。  
@data1,@data2 可选指定数值

<a id="sysMidiOutObject.velocity"></a>
### sysMidiOutObject.velocity 
 xcall,play 函数默认按键速度（音量），  
参数可指定 0~127 范围的值

<a id="sysMidiOutObject.xcall"></a>
### sysMidiOutObject.xcall() 
 如果参数指定一个数组，  
则数组的第 1 个元素指定要调用的成员函数名，  
其他元素为调用参数  
  
例如： {"pitchBend",0.3}  
  
如果参数指定一个大于 127 的数值，则延时指定的时间，  
如果为 0~127 间的数值则按下指定音符。  
如果为 -1 到 -128 的数值则消音指定的音符。  
按下音符与消音可以使用 sys.midiOut.notes 名字空间的音名表示。  
如果为字符串则调用 log 函数输出。  
  
指定上述参数函数返回 true，指定其他数值返回 null，  
参数为其他数据类型会报错
