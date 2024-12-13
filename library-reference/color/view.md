# color.view 库模块帮助文档

<a id="color"></a>
## color 成员列表


<a id="color.view"></a>
### color.view 
 用于显示color.table色表的视图控件

<a id="color.view"></a>
### color.view() 
 [返回对象:colorviewObject](#colorviewObject)

<a id="color.view"></a>
### color.view(plusCtrl) 
 创建色表视图,  
参数必须指定一个plus控件

<a id="colorviewObject"></a>
## colorviewObject 成员列表


<a id="colorviewObject.addItem"></a>
### colorviewObject.addItem(rgb,name) 
 添加色卡,rgb为RGB格式颜色数值,name为颜色名,  
名称中的英文名或副名称应放在括号内

<a id="colorviewObject.delItem"></a>
### colorviewObject.delItem(index) 
 删除色卡,参数指定索引

<a id="colorviewObject.getColorTable"></a>
### colorviewObject.getColorTable() 
 返回色表数据

<a id="colorviewObject.getItemRect"></a>
### colorviewObject.getItemRect() 
 返回指定项所在区块的::RECT结构体,  
参数@1使用数值指定索引,如果索引超出范围返回null,  
可选指定参数@2为true返回屏幕坐标  
  
[返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="colorviewObject.loadColorTable"></a>
### colorviewObject.loadColorTable 
 加载色表

<a id="colorviewObject.loadColorTable"></a>
### colorviewObject.loadColorTable(clrTable,startIndex,endIndex,rows) 
 所有参数可选,  
参数@1指定色表,不指定则自动创建默认色表,  
startIndex,endIndex指定当前页开始、结束索引,  
rows指定色卡行数,默认为12

<a id="colorviewObject.onItemClick"></a>
### colorviewObject.onItemClick() 
 

```aardio
colorviewObject.onItemClick = function(index,rgb,argb,name,ename){
	/*鼠标点击色卡触发此事件  
index为为色卡索引,rgb为GDI颜色值,argb为GDI+颜色值,  
name为颜色中文名字,ename为英文名字*/	
}
```



<a id="colorviewObject.onItemDoubleClick"></a>
### colorviewObject.onItemDoubleClick() 
 

```aardio
colorviewObject.onItemDoubleClick = function(index,rgb,argb,name,ename){
	/*鼠标双击击色卡触发此事件  
index为色卡索引,rgb为GDI颜色值,argb为GDI+颜色值,  
name为颜色中文名字,ename为英文名字*/	
}
```



<a id="colorviewObject.onItemHover"></a>
### colorviewObject.onItemHover() 
 

```aardio
colorviewObject.onItemHover = function(index,rgb,argb,name,ename){
	/*鼠标移动到色卡上触发此事件  
index为色卡索引,rgb为GDI颜色值,argb为GDI+颜色值,  
name为颜色中文名字,ename为英文名字*/
}
```



<a id="colorviewObject.onItemLeave"></a>
### colorviewObject.onItemLeave 
 

```aardio
colorviewObject.onItemLeave = function(){
	/*鼠标离开色卡且未移动到其他色卡时触发此事件*/	
}
```


