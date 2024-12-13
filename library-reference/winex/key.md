# winex.key 库模块帮助文档

<a id="winex.key"></a>
## winex.key 成员列表


<a id="winex.key.altClick"></a>
### winex.key.altClick(句柄,"键名") 
 后台发送 ALT 组合键击键消息，可指定一个或多个键名或虚拟键值参数。  
如果目标窗口是外部线程应先使用 winex.attach 共享输入处理机制。  
个别按键操作可能需要先用 win.setActive 激活目标窗口（不常见）

<a id="winex.key.altDown"></a>
### winex.key.altDown(句柄,"键名") 
 后台发送 ALT 组合键按下消息  
参数二可以是键名或虚拟键值

<a id="winex.key.altUp"></a>
### winex.key.altUp(句柄,"键名") 
 后台发送 ALT 组合键弹起消息  
参数二可以是键名或虚拟键值

<a id="winex.key.click"></a>
### winex.key.click(句柄,"键名") 
 参数二可以是键名或虚拟键值

<a id="winex.key.combine"></a>
### winex.key.combine(hwnd,"CTRL","字符串参数") 
 发送组合热键,参数个数不限.  
参数可以是键名字,或者按键的虚拟码(_VK前缀常量)  
如果目标窗口是外部线程应先使用 winex.attach 共享输入处理机制。  
个别按键操作可能需要先用 win.setActive 激活目标窗口（不常见）

<a id="winex.key.delayClick"></a>
### winex.key.delayClick 
 完整击键之间的间隔,默认为5

<a id="winex.key.delayDown"></a>
### winex.key.delayDown 
 按下后的时间间隔,默认为5

<a id="winex.key.delayUp"></a>
### winex.key.delayUp 
 弹起后的时间间隔,默认为1

<a id="winex.key.down"></a>
### winex.key.down(句柄,"键名") 
 参数二可以是键名或虚拟键值

<a id="winex.key.send"></a>
### winex.key.send(句柄,"TEST") 
 输入ASCII字符

<a id="winex.key.up"></a>
### winex.key.up(句柄,"键名") 
 参数二可以是键名或虚拟键值
