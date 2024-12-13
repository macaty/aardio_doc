[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# winring0.ps2 库模块帮助文�?
## winring0.ps2 成员列表

PS2鼠标键盘硬件模拟支持�?

支持win7，但需要管理员权限,

引用此库发布程序时将自动添加管理员权限到Manifest

### winring0.ps2.combine("CTRL","字符串参�?)

发送组合热�?参数个数不限.

参数可以是键名字,或者按键的虚拟�?\_VK前缀常量)

### winring0.ps2.delayDown

每次调用key.down函数的默认时间间�?默认�?毫秒

在调用press以及pressEx函数�?按下松开键之间也会按此设定延�?
### winring0.ps2.delayPress

更改每次击键并松开后的时间间隔,默认�?毫秒

### winring0.ps2.delayUp

每次调用key.up函数后的时间间隔,默认�?毫秒

### winring0.ps2.enableKb(true)

禁用键盘，取消禁用参数为false

### winring0.ps2.enableKbIrq(true)

启用键盘中断,false为禁�?
### winring0.ps2.enableMouse(true)

禁用鼠标，取消禁用参数为false

### winring0.ps2.getPs2Device()

检测PS2设备,返回两个�? PS2鼠标设备�?PS2键盘设备�?
### winring0.ps2.keyDown(键名或键�?

按下�?
### winring0.ps2.keyPress(键名或键�?

按下并弹起键

### winring0.ps2.keyUp(键名或键�?

弹起�?
### winring0.ps2.mouseDown(x,y,是否绝对坐标)

鼠标左键按下

### winring0.ps2.mouseDownMb(x,y,是否绝对坐标)

鼠标中键按下

### winring0.ps2.mouseDownRb(x,y,是否绝对坐标)

鼠标右键按下

### winring0.ps2.mouseIs3d

鼠标是否有滚轮，默认自动检�?

如果系统有多个鼠标请正确设置此�?
### winring0.ps2.mouseMove(x,y,是否绝对坐标)

移动鼠标

### winring0.ps2.mousePress(x,y,是否绝对坐标)

鼠标左键按下弹起

### winring0.ps2.mousePressMb(x,y,是否绝对坐标)

鼠标中键按下弹起

### winring0.ps2.mousePressRb(x,y,是否绝对坐标)

鼠标右键按下弹起

### winring0.ps2.mouseUp(x,y,是否绝对坐标)

鼠标左键弹起

### winring0.ps2.mouseUpMb(x,y,是否绝对坐标)

鼠标中键弹起

### winring0.ps2.mouseUpRb(x,y,是否绝对坐标)

鼠标右键弹起

### winring0.ps2.ps2Keyboard

系统自动检测到的P2键盘名称,

该值为空则禁用键盘硬件模拟

### winring0.ps2.ps2Mouse

系统自动检测到的P2鼠标,

该值为空则禁用鼠标硬件模拟

### winring0.ps2.readMouseID()

返回鼠标设备ID

### winring0.ps2.reakKey(是否允许发送键)

读取按键

### winring0.ps2.waitInputEmpty()

在向64h端口写数据之前必须确保Input Register是空�?
### winring0.ps2.waitKeyOutputEmpty()

等待键盘缓冲区空

### winring0.ps2.waitKeyOutputFull()

等待键盘缓冲区满

### winring0.ps2.waitKeyOutputFullAsyn()

等待键盘Output Register�?
不论有没有等到按键都返回值，成功返回true，失败返回false

### winring0.ps2.waitMouseOutputEmpty()

读数据以前要确认鼠标输出缓冲区为�?
### winring0.ps2.waitMouseOutputFull()

等待鼠标缓冲区满

### winring0.ps2.waitMouseOutputFullAsyn()

等待鼠标Output Register�?
不论有没有等到按键都返回值，成功返回true，失败返回false

### winring0.ps2.waitOutputEmpty()

等待Output Register�?
### winring0.ps2.waitOutputFull()

在向60h端口读取数据之前必须确保Output Register中有数据

### winring0.ps2.waitOutputFullAsyn()

等待Output Register�?
不论有没有等到按键都返回值，成功返回true，失败返回false

### winring0.ps2.writeK60(数�?

�?0端口写数�?
### winring0.ps2.writeK64(数�?

�?4端口写数�?
### winring0.ps2.writeKeyDown(键码)

写入按下虚拟键码

### winring0.ps2.writeKeyUp(键码)

写入弹起虚拟键码

### winring0.ps2.writeMouse(x,y,消息ID)

写入鼠标消息

### winring0.ps2.writeScanKey(扫描�?

写入键盘扫描�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/winring0/ps2.md)

