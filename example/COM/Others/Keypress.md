[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - 模拟按键

```aardio aardio
//COM 接口 - 模拟按键
/*
1、标准的按键放到大括号中,这个很象aardio中的使用的键�?例如entern键是 {ENTER} esc键是{ESC}
2、普通字符直接写就行�?例如 abcd 表示按下连续输入abcd,用这个方法可以直接发送字符串�?3、一些特殊字�?    + 表示 shift�?    ^ 表示 ctrl�?    % 表示 alt�?    ^ ab 表示按下 ctrl + a 释放按键,然后再按b
    ^ (ab) 表示同时按下 ctrl + a + b 然后释放,使用括号可以设置组合�?
    那么如何输出+^%等原始字符呢？放在大括号就行�?    例如：wsh:sendkeys("{+}{^}{%}");

4、如果需要发送多个重复的单字母按�?不必重复输入该字�?
SendKeys允许使用简化格式进行描�?使用格式为“{按键 数字}”。例如要发�?0个字母“x�?则输入�?wsh:SendKeys("{x 10}") ”即可�?*/

import com;
import process;

var wsh = com.CreateObject("wscript.shell")
process.execute("notepad.exe") //自动打开记事�?
thread.delay(1000)

wsh.AppActivate("无标�?- 记事�?) //激活记事本窗口
wsh.AppActivate("Untitled - Notepad")

wsh.SendKeys("hello, welcome to aardio") //输出一句话

wsh.sendkeys("{ENTER}");//按下回车
wsh.sendkeys("^a");//按下ctrl + a

/*
参考范例：
范例 / 自动�?/ 窗口自动�?/ 后台按键
范例 / 自动�?/ 鼠标按键 / 模拟按键

//下面用标准库函数实现相同功能
import process;
process.execute("notepad.exe") //自动打开记事�?thread.delay(1000)

import winex;
var hwnd,hCtrl = winex.waitActive(,,"Notepad","Edit");

import key;
key.sendString("hello, welcome to aardio") //输出一句话

key.press("ENTER");//按下回车
key.combine("CTRL","A");//按下 Ctrl + A
*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/Keypress.md)

