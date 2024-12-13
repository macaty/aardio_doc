# winring0.ps2 库模块帮助文档

<a id="winring0.ps2"></a>
## winring0.ps2 成员列表

PS2鼠标键盘硬件模拟支持库,  
支持win7，但需要管理员权限,  
引用此库发布程序时将自动添加管理员权限到Manifest

<a id="winring0.ps2.combine"></a>
### winring0.ps2.combine("CTRL","字符串参数") 
 发送组合热键,参数个数不限.  
参数可以是键名字,或者按键的虚拟码(_VK前缀常量)

<a id="winring0.ps2.delayDown"></a>
### winring0.ps2.delayDown 
 每次调用key.down函数的默认时间间隔,默认为5毫秒  
在调用press以及pressEx函数时,按下松开键之间也会按此设定延时

<a id="winring0.ps2.delayPress"></a>
### winring0.ps2.delayPress 
 更改每次击键并松开后的时间间隔,默认为5毫秒

<a id="winring0.ps2.delayUp"></a>
### winring0.ps2.delayUp 
 每次调用key.up函数后的时间间隔,默认为1毫秒

<a id="winring0.ps2.enableKb"></a>
### winring0.ps2.enableKb(true) 
 禁用键盘，取消禁用参数为false

<a id="winring0.ps2.enableKbIrq"></a>
### winring0.ps2.enableKbIrq(true) 
 启用键盘中断,false为禁用

<a id="winring0.ps2.enableMouse"></a>
### winring0.ps2.enableMouse(true) 
 禁用鼠标，取消禁用参数为false

<a id="winring0.ps2.getPs2Device"></a>
### winring0.ps2.getPs2Device() 
 检测PS2设备,返回两个值: PS2鼠标设备名,PS2键盘设备名

<a id="winring0.ps2.keyDown"></a>
### winring0.ps2.keyDown(键名或键盘) 
 按下键

<a id="winring0.ps2.keyPress"></a>
### winring0.ps2.keyPress(键名或键盘) 
 按下并弹起键

<a id="winring0.ps2.keyUp"></a>
### winring0.ps2.keyUp(键名或键盘) 
 弹起键

<a id="winring0.ps2.mouseDown"></a>
### winring0.ps2.mouseDown(x,y,是否绝对坐标) 
 鼠标左键按下

<a id="winring0.ps2.mouseDownMb"></a>
### winring0.ps2.mouseDownMb(x,y,是否绝对坐标) 
 鼠标中键按下

<a id="winring0.ps2.mouseDownRb"></a>
### winring0.ps2.mouseDownRb(x,y,是否绝对坐标) 
 鼠标右键按下

<a id="winring0.ps2.mouseIs3d"></a>
### winring0.ps2.mouseIs3d 
 鼠标是否有滚轮，默认自动检测,  
如果系统有多个鼠标请正确设置此值

<a id="winring0.ps2.mouseMove"></a>
### winring0.ps2.mouseMove(x,y,是否绝对坐标) 
 移动鼠标

<a id="winring0.ps2.mousePress"></a>
### winring0.ps2.mousePress(x,y,是否绝对坐标) 
 鼠标左键按下弹起

<a id="winring0.ps2.mousePressMb"></a>
### winring0.ps2.mousePressMb(x,y,是否绝对坐标) 
 鼠标中键按下弹起

<a id="winring0.ps2.mousePressRb"></a>
### winring0.ps2.mousePressRb(x,y,是否绝对坐标) 
 鼠标右键按下弹起

<a id="winring0.ps2.mouseUp"></a>
### winring0.ps2.mouseUp(x,y,是否绝对坐标) 
 鼠标左键弹起

<a id="winring0.ps2.mouseUpMb"></a>
### winring0.ps2.mouseUpMb(x,y,是否绝对坐标) 
 鼠标中键弹起

<a id="winring0.ps2.mouseUpRb"></a>
### winring0.ps2.mouseUpRb(x,y,是否绝对坐标) 
 鼠标右键弹起

<a id="winring0.ps2.ps2Keyboard"></a>
### winring0.ps2.ps2Keyboard 
 系统自动检测到的P2键盘名称,  
该值为空则禁用键盘硬件模拟

<a id="winring0.ps2.ps2Mouse"></a>
### winring0.ps2.ps2Mouse 
 系统自动检测到的P2鼠标,  
该值为空则禁用鼠标硬件模拟

<a id="winring0.ps2.readMouseID"></a>
### winring0.ps2.readMouseID() 
 返回鼠标设备ID

<a id="winring0.ps2.reakKey"></a>
### winring0.ps2.reakKey(是否允许发送键) 
 读取按键

<a id="winring0.ps2.waitInputEmpty"></a>
### winring0.ps2.waitInputEmpty() 
 在向64h端口写数据之前必须确保Input Register是空的

<a id="winring0.ps2.waitKeyOutputEmpty"></a>
### winring0.ps2.waitKeyOutputEmpty() 
 等待键盘缓冲区空

<a id="winring0.ps2.waitKeyOutputFull"></a>
### winring0.ps2.waitKeyOutputFull() 
 等待键盘缓冲区满

<a id="winring0.ps2.waitKeyOutputFullAsyn"></a>
### winring0.ps2.waitKeyOutputFullAsyn() 
 等待键盘Output Register满  
不论有没有等到按键都返回值，成功返回true，失败返回false

<a id="winring0.ps2.waitMouseOutputEmpty"></a>
### winring0.ps2.waitMouseOutputEmpty() 
 读数据以前要确认鼠标输出缓冲区为空

<a id="winring0.ps2.waitMouseOutputFull"></a>
### winring0.ps2.waitMouseOutputFull() 
 等待鼠标缓冲区满

<a id="winring0.ps2.waitMouseOutputFullAsyn"></a>
### winring0.ps2.waitMouseOutputFullAsyn() 
 等待鼠标Output Register满  
不论有没有等到按键都返回值，成功返回true，失败返回false

<a id="winring0.ps2.waitOutputEmpty"></a>
### winring0.ps2.waitOutputEmpty() 
 等待Output Register空

<a id="winring0.ps2.waitOutputFull"></a>
### winring0.ps2.waitOutputFull() 
 在向60h端口读取数据之前必须确保Output Register中有数据

<a id="winring0.ps2.waitOutputFullAsyn"></a>
### winring0.ps2.waitOutputFullAsyn() 
 等待Output Register满  
不论有没有等到按键都返回值，成功返回true，失败返回false

<a id="winring0.ps2.writeK60"></a>
### winring0.ps2.writeK60(数值) 
 向60端口写数据

<a id="winring0.ps2.writeK64"></a>
### winring0.ps2.writeK64(数值) 
 向64端口写数据

<a id="winring0.ps2.writeKeyDown"></a>
### winring0.ps2.writeKeyDown(键码) 
 写入按下虚拟键码

<a id="winring0.ps2.writeKeyUp"></a>
### winring0.ps2.writeKeyUp(键码) 
 写入弹起虚拟键码

<a id="winring0.ps2.writeMouse"></a>
### winring0.ps2.writeMouse(x,y,消息ID) 
 写入鼠标消息

<a id="winring0.ps2.writeScanKey"></a>
### winring0.ps2.writeScanKey(扫描码) 
 写入键盘扫描码
