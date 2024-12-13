# key.ime 库模块帮助文档

<a id="key.ime"></a>
## key.ime 成员列表

输入法相关操作

<a id="key.ime.activate"></a>
### key.ime.activate(键盘布局句柄,选项) 
 激活指定的键盘布局  
参数二可省略,使用 _KLF_ 前缀常量指定选项

<a id="key.ime.capital"></a>
### key.ime.capital() 
 是否大写状态

<a id="key.ime.changeRequest"></a>
### key.ime.changeRequest(0) 
 切换为上一个键盘布局

<a id="key.ime.changeRequest"></a>
### key.ime.changeRequest(0x4090409) 
 切换为英文键盘布局

<a id="key.ime.changeRequest"></a>
### key.ime.changeRequest(0x8040804) 
 切换为中文键盘布局

<a id="key.ime.changeRequest"></a>
### key.ime.changeRequest(1) 
 切换为下一个键盘布局

<a id="key.ime.changeRequest"></a>
### key.ime.changeRequest(hkl,hwnd,wParam) 
 发送_WM_INPUTLANGCHANGEREQUEST消息通知窗口改变输入法,  
hkl可用数值或指针指定键盘布局,  
@hwnd参数指定要检测的窗口句柄，省略则默认设为前景窗口  
其他参数可省略

<a id="key.ime.control"></a>
### key.ime.control(hwnd,command,data) 
 发送_WM_IME_CONTROL消息到指定窗口  
@hwnd参数指定目标窗口句柄，省略则默认设为前景窗口,  
其他参数请参考微软文档

<a id="key.ime.each"></a>
### key.ime.each() 
 

```aardio
for(hKey,lang,name,description in key.ime.each() ){
	/*hKey:键盘布局句柄 lang:语言ID name:输入法名 description:描述*/
}
```



<a id="key.ime.getConversionMode"></a>
### key.ime.getConversionMode(hwnd) 
 返回输入法打开状态,  
返回值为数值，可用 _IME_CMODE_ 前缀的常量按位取值。  
@hwnd参数指定要检测的窗口句柄，省略则默认设为前景窗口

<a id="key.ime.getCurrent"></a>
### key.ime.getCurrent(线程ID) 
 返回当前键盘布局句柄，  
参数可选，默认参数为当前线程ID，  
注意现在这个返回值里实际上只有语言 ID 有意义，  
请参考 key.ime.getCurrentLangId 函数源代码  
  
注意如果目标线程不响应输入消息，例如一直 sleep 可能返回旧的键盘布局  
cmd.exe 窗口可能会返回 null

<a id="key.ime.getCurrentLangId"></a>
### key.ime.getCurrentLangId(线程ID) 
 返回指定线程键盘布局语言ID  
如果不指定参数则默认取当前线程ID  
  
注意如果目标线程不响应输入消息，例如一直 sleep 可能返回旧的键盘语言ID。  
cmd.exe 窗口可能会返回 0

<a id="key.ime.getCurrentLangIdByHwnd"></a>
### key.ime.getCurrentLangIdByHwnd(hwnd) 
 返回当指定窗口键盘布局语言ID  
如果不指定参数则默认取前台窗口句柄  
  
注意如果目标线程不响应输入消息，例如一直 sleep 可能返回旧的键盘语言。  
cmd.exe 窗口可能会返回 0

<a id="key.ime.getDescription"></a>
### key.ime.getDescription(键盘布局句柄) 
 返回键盘布局描述  
对默认中英文键盘无效

<a id="key.ime.getLangId"></a>
### key.ime.getLangId(键盘布局句柄) 
 返回语言代码

<a id="key.ime.getList"></a>
### key.ime.getList() 
 返回键盘布局句柄数组  
WIN10上只会返回键盘语言，不会列出输入法

<a id="key.ime.getName"></a>
### key.ime.getName(键盘布局句柄) 
 返回键盘布局名称

<a id="key.ime.getOpenStatus"></a>
### key.ime.getOpenStatus(hwnd) 
 当前输入法是否打开中文输入  
@hwnd参数指定要检测的窗口句柄，省略则默认设为前景窗口,  
注意有些输入法打开但切换到英文模式也会返回 false,  
而微软输入法打开状态不论中英都会返回 true,  
所以用这个很难判断当前真正的输入模式

<a id="key.ime.loadActivate"></a>
### key.ime.loadActivate("输入法名") 
 参数也可以是键盘布局句柄  
加载并激活指定键盘布局

<a id="key.ime.loadByName"></a>
### key.ime.loadByName("键盘布局名",选项) 
 载入指定的键盘布局  
对默认中英文键盘无效  
参数二可省略,使用 _KLF_ 前缀常量指定选项

<a id="key.ime.setConversionMode"></a>
### key.ime.setConversionMode(convMode,hwnd) 
 设置输入法打开状态，  
参数为 _IME_CMODE_ 前缀的常量按位或运算的数值。  
@hwnd参数指定目标窗口句柄，省略则默认设为前景窗口

<a id="key.ime.setOpenStatus"></a>
### key.ime.setOpenStatus(status,hwnd) 
 status设为0关闭中文输入  
@hwnd参数指定目标窗口句柄，省略则默认设为前景窗口

<a id="key.ime.state"></a>
### key.ime.state 
 返回输入法状态，  
请参考:  
[输入法状态检测规则与原理](https://www.aardio.com/zh-cn/doc/library-guide/std/key/imeState.html)  
[key.ime.stateBar](https://www.aardio.com/zh-cn/doc/library-reference/key/ime.stateBar.html)

<a id="key.ime.state"></a>
### key.ime.state(hwnd) 
 返回输入法状态，  
@hwnd 参数指定要检测的窗口句柄，省略则默认设为前景窗口。  
建议使用 winex.caret 取到光标所有窗口句柄作为参数，参考 key.ime.stateBar。  
  
首个返回值为是否启用输入转换（例如输入中、日、韩等文字），false 为英文输入状态，  
第二个返回值用一个数值表示标点模式：  
    1 英文半角标点  
    2 英文全角标点  
    3 中文标点  
    0 已关闭输入转换  
    null 已关闭输入转换  
第三个返回值为键盘语言 ID，  
第四个返回值为原始 Conversion Mode


### 自动完成常量
_IME_CMODE_ALPHANUMERIC=0  
_IME_CMODE_CHARCODE=0x20  
_IME_CMODE_EUDC=0x200  
_IME_CMODE_FIXED=0x800  
_IME_CMODE_FULLSHAPE=8  
_IME_CMODE_HANJACONVERT=0x40  
_IME_CMODE_KATAKANA=2  
_IME_CMODE_LANGUAGE=3  
_IME_CMODE_NATIVE=1  
_IME_CMODE_NOCONVERSION=0x100  
_IME_CMODE_RESERVED=0xF0000000  
_IME_CMODE_ROMAN=0x10  
_IME_CMODE_SOFTKBD=0x80  
_IME_CMODE_SYMBOL=0x400  
_IME_SYMBOLMODE_FULLSHAPE=2  
_IME_SYMBOLMODE_HALFSHAPE=1  
_IME_SYMBOLMODE_SYMBOL=3  
