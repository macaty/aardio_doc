# mouse.screenArea 库模块帮助文档

<a id="mouse"></a>
## mouse 成员列表


<a id="mouse.screenArea"></a>
### mouse.screenArea 
 屏幕选区工具

创建屏幕选区工具,  
如果已打开屏幕选区则返回 null

<a id="mouse.screenArea"></a>
### mouse.screenArea() 
 [返回对象:MouseScreenAreaObject](#MouseScreenAreaObject)

<a id="mouse.screenArea"></a>
### mouse.screenArea(winform) 
 参数 @1 指定父窗口

<a id="MouseScreenAreaObject"></a>
## MouseScreenAreaObject 成员列表


<a id="MouseScreenAreaObject.close"></a>
### MouseScreenAreaObject.close() 
 关闭创建屏幕选区工具

<a id="MouseScreenAreaObject.doModal"></a>
### MouseScreenAreaObject.doModal(/*请指定所有者窗口\n可省略此参数*/) 
 此函数创建屏幕选区工具并显示为模态对话框，  
  
模态对话框应是独立窗口，并显示在所有者窗口前面。  
  
模态对话框会自己创建自己的消息循环，  
并阻止调用模态对话框的代码继续向后运行 - 直到模态对话框被关闭。

<a id="MouseScreenAreaObject.onSelectionChanged"></a>
### MouseScreenAreaObject.onSelectionChanged 
 

```aardio
MouseScreenAreaObject.onSelectionChanged = function(rc){
	/*rc 为表示当前选区的::RECT 结构体*/
	owner.close();
}
```



<a id="MouseScreenAreaObject.show"></a>
### MouseScreenAreaObject.show(false) 
 隐藏创建屏幕选区工具

<a id="MouseScreenAreaObject.show"></a>
### MouseScreenAreaObject.show(true) 
 显示创建屏幕选区工具

<a id="MouseScreenAreaObject.mask"></a>
## MouseScreenAreaObject.mask 成员列表


<a id="MouseScreenAreaObject.mask.foreground"></a>
### MouseScreenAreaObject.mask.foreground 
 设置遮罩颜色，0xAARRGGBB 格式数值
