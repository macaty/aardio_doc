[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 显示�?DDC/CI

```aardio aardio
//显示�?DDC/CI
//显示器控制接口，不是所有显示器都支�?import console;
import sys.ddcci;

for ddcci in sys.ddcci.each() {
    console.dump(ddcci.capabilities,ddcci.description);
    if(!ddcci.capabilities.vcp) continue;

    ddcci.setPowerMode(4); //关屏
    sleep(1000);
    ddcci.setPowerMode(1); //亮屏
}

console.pause(true);

/*
import win.ui;
var winform = win.form( bgcolor=1;text="显示器坏点检�? );

var colorIndex,color = 1;
var colorTable = { 1;0xFF0000;0x0000FF;0x00FF00;0xFFFFFF };

winform.onMouseDown = function(wParam,lParam){
    colorIndex,color = table.next(colorTable, colorIndex );
    if(!colorIndex) return winform.close();

    winform.bgcolor = color;
    winform.redrawBackground();
}

winform.show();
winform.fullscreen();
win.loopMessage();
*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Hardware/ddcci.md)

