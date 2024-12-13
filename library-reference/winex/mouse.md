# winex.mouse 库模块帮助文档

<a id="winex.mouse"></a>
## winex.mouse 成员列表


<a id="winex.mouse.click"></a>
### winex.mouse.click(窗口句柄,x,y) 
 左键单击  
x,y为目标窗口内客户区坐标  
如果该坐标存在直接子窗口,则将消息发送到该子窗口,可选增加wParam参数,用法参考源码

<a id="winex.mouse.clickDB"></a>
### winex.mouse.clickDB(窗口句柄,x,y) 
 左键双击  
x,y为目标窗口内客户区坐标  
如果该坐标存在直接子窗口,则将消息发送到该子窗口,可选增加wParam参数,用法参考源码

<a id="winex.mouse.delayClick"></a>
### winex.mouse.delayClick 
 完整击键之间的间隔,默认为5

<a id="winex.mouse.delayDown"></a>
### winex.mouse.delayDown 
 按下后的时间间隔,默认为5

<a id="winex.mouse.delayUp"></a>
### winex.mouse.delayUp 
 弹起后的时间间隔,默认为1

<a id="winex.mouse.down"></a>
### winex.mouse.down(窗口句柄,x,y) 
 左键按下  
x,y为目标窗口内客户区坐标,  
如果该坐标存在直接子窗口,则将消息发送到该子窗口,  
可选增加wParam参数,用法参考源码

<a id="winex.mouse.move"></a>
### winex.mouse.move(窗口句柄,x,y) 
 移动鼠标  
x,y为目标窗口内客户区坐标  
如果该坐标存在直接子窗口,则将消息发送到该子窗口,可选增加wParam参数,用法参考源码

<a id="winex.mouse.sendToChildWindow"></a>
### winex.mouse.sendToChildWindow 
 允许自动转发到子窗口,默认为 true

<a id="winex.mouse.up"></a>
### winex.mouse.up(窗口句柄,x,y) 
 左键弹起  
x,y为目标窗口内客户区坐标  
如果该坐标存在直接子窗口,则将消息发送到该子窗口,可选增加wParam参数,用法参考源码

<a id="winex.mouse.mb"></a>
## winex.mouse.mb 成员列表


<a id="winex.mouse.mb.click"></a>
### winex.mouse.mb.click(窗口句柄,x,y) 
 中键单击  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.clickDB"></a>
### winex.mouse.mb.clickDB(窗口句柄,x,y) 
 中键双击  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.down"></a>
### winex.mouse.mb.down(窗口句柄,x,y) 
 中键按下  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.hroll"></a>
### winex.mouse.mb.hroll(窗口句柄,x,y,-3) 
 滚动条向左滚动  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.hroll"></a>
### winex.mouse.mb.hroll(窗口句柄,x,y,3) 
 滚动条向右滚动  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.roll"></a>
### winex.mouse.mb.roll(窗口句柄,x,y,-3) 
 滚动条向下滚动  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.roll"></a>
### winex.mouse.mb.roll(窗口句柄,x,y,3) 
 滚动条向上滚动  
x,y为目标窗口内坐标

<a id="winex.mouse.mb.up"></a>
### winex.mouse.mb.up(窗口句柄,x,y) 
 中键弹起  
x,y为目标窗口内坐标

<a id="winex.mouse.rb"></a>
## winex.mouse.rb 成员列表


<a id="winex.mouse.rb.click"></a>
### winex.mouse.rb.click(窗口句柄,x,y) 
 右键单击  
x,y为目标窗口内坐标

<a id="winex.mouse.rb.clickDB"></a>
### winex.mouse.rb.clickDB(窗口句柄,x,y) 
 右键双击  
x,y为目标窗口内坐标

<a id="winex.mouse.rb.down"></a>
### winex.mouse.rb.down(窗口句柄,x,y) 
 右键按下  
x,y为目标窗口内坐标

<a id="winex.mouse.rb.up"></a>
### winex.mouse.rb.up(窗口句柄,x,y) 
 右键弹起  
x,y为目标窗口内坐标
