[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 虚拟桌面

```aardio aardio
//虚拟桌面
assert(_WIN10_LATER,"虚拟桌面不支�?Win10 以前的系�?);

import console;
import dotNet.desktop;

//列出所有虚拟桌�?for name,index,current in dotNet.desktop.each(){
    console.log(name,index,current?"当前桌面":"")
}

//切换到下一个桌�?dotNet.desktop.current().Right.MakeVisible();

//切换到指定桌�?dotNet.desktop.get(1).MakeVisible()

/*
注意 dotNet.desktop 在鼠标键盘钩�? key.hook,key.hotkey )回调函数中同步调用会报错,
必须使用 winform.setTimeout 函数在退出钩子回调后异步调用 dotNet.desktop�?*/

console.pause(true);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Desktop/VirDesktop.md)

