[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 合成并输出音�?
```aardio aardio
//合成并输出音�?//教程链接:  https://mp.weixin.qq.com/s/Feq3dT7r7G6F0cXlpXpRZQ
import win.util.lyric;
var lyric = win.util.lyric();
lyric.show();

//打开播放设备
import sys.midiOut;
var midiOut = sys.midiOut();

/*
可以在主线程里直接演奏音乐�?也可以将 midiOut 对象传入一个或多个独立线程�?要注�?close 函数会同时关闭所有线程的同一设备对象�?*/
thread.invoke( function(midiOut,lyric){

    //指定字幕回显函数
    midiOut.log = function(v) lyric.text = v;

    //不同线程指定不同通道，就可以轻松实现多乐器同时合奏�?    midiOut.channel = 1;

    //切换乐器，默认设置当前通道（不要用参数@2指定其他通道�?    midiOut.changeInstrument(12);

    midiOut.play("
        两只老虎,
        1__,2__,3__,1__
        两只老虎,
        1__,2__,3__,1__
        跑得�?
        3__,4__,5__,__
        跑得�?
        3__,4__,5__,__
        一只没有耳朵
        5_,6_,5_,4_,3__,1__
        一只没有尾�?
        5_,6_,5_,4_,3__,1__
        真奇�?        2__,'5__,1__,__
    ","C4"/* 1=C */,250/* �?120 */);

    /*
    所有音符、指令、字幕使用逗号、竖线、换行（兼容任何换行符格式）之一分隔�?    忽略空格、制表符�?    支持 sys.midiOut.notes 名字空间指定的全�?SPN 音名，SPN音名中的 -1 必须省略，并用小�?s 代替升音�?♯（Sharp）�?    支持简谱数字音符记号：1 2 3 4 5 6 7
    数字音符后可�?~5个单引号以提�?1~5 个八度音高，例如: 1' 2' 3' 4' 5' 6' 7'
    数字音符前可�?~5个单引号以降�?1~5 个八度音高，例如�?1 '2 '3 '4 '5 '6 '7
    可在音符前加 # 号表示升高半个音，例如："#1,__,#'5___,#6'___"
    0 �?REST 为休止符
    可选在上面用参�?@2 指定音符 1 的实际音高，该参数可用字符串指定 sys.midiOut.notes 定义的音名�?    一个下划线表示表示一个延时单位：可选在上面用参�?@3 指定延时单位的毫秒数，默认为 250 毫秒
    前面的音符（或下划线）与后面的下划线可以连起来写，例�?"5,__,_,5___"
    双下划线 �?表示半个下划线表示的延时，例�?5,�?5�?，多�?�?不允许连着写�?    音符前加前面加负号表示消音（停止演奏指定音符），例如�?5___,-5,#'5___,-#'5"
    可以直接写函数，函数名后必须有括�?() 且必须有参数，例如："changeInstrument(10),1__,2__,3__"
    直接写其他字符串表示字幕�?    */

    lyric.close();

},midiOut,lyric);

win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/Media/Audio/midiOut.md)
