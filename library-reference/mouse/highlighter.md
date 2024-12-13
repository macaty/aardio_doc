# mouse.highlighter 库模块帮助文档

<a id="mouse"></a>
## mouse 成员列表


<a id="mouse.highlighter"></a>
### mouse.highlighter 
 用于创建鼠标高亮光圈

创建鼠标高亮光圈

<a id="mouse.highlighter"></a>
### mouse.highlighter() 
 [返回对象:MouseHilighterObject](#MouseHilighterObject)

<a id="mouse.highlighter"></a>
### mouse.highlighter(winform,color,size,padding) 
 参数 @winform 指定父窗口，不可省略,  
@color 以 ARGB 格式颜色数值指定光圈颜色，透明度为 0 仅显示单击动画，  
@size 指定光圈大小，  
@padding 指定单击鼠标动画放大缩小边距

<a id="MouseHilighterObject"></a>
## MouseHilighterObject 成员列表


<a id="MouseHilighterObject.animationDuration"></a>
### MouseHilighterObject.animationDuration 
 单击鼠标时光圈动画持续时间，以毫秒为单位

<a id="MouseHilighterObject.animationInterval"></a>
### MouseHilighterObject.animationInterval 
 单击鼠标时光圈动画时间间隔，以毫秒为单位

<a id="MouseHilighterObject.changeConfig"></a>
### MouseHilighterObject.changeConfig(color,size,padding) 
 修改光圈设置,  
@color 以 ARGB 格式颜色数值指定光圈颜色,  
@size 指定光圈大小,  
@padding 指定单击鼠标动画放大缩小边距

<a id="MouseHilighterObject.close"></a>
### MouseHilighterObject.close() 
 关闭窗口

<a id="MouseHilighterObject.hwnd"></a>
### MouseHilighterObject.hwnd 
 窗口句柄

<a id="MouseHilighterObject.show"></a>
### MouseHilighterObject.show() 
 显示高亮光圈
