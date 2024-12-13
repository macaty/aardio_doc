# gdip.region 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.region"></a>
### gdip.region 
 GDI+ Region 对象

<a id="gdip.region"></a>
### gdip.region() 
 创建一个无限区域

[返回对象:GdipRegionObject](#GdipRegionObject)

<a id="gdip.region"></a>
### gdip.region(HRGN) 
 从 GDI 区域句柄创建

<a id="gdip.region"></a>
### gdip.region(region) 
 从 gdip.region 区域对象复制一个对象

<a id="gdip.region"></a>
### gdip.region({left=,top=,right=,bottom=}) 
 从 ::RECT 矩形创建区域。  
传入普通表会自动转换为 ::RECT 结构体，只要指定 ::RECT 的所有字段值就可以

<a id="gdip.region"></a>
### gdip.region({x=,y=,width=,height=}) 
 从 ::RECTF 矩形创建区域。  
传入普通表会自动转换为 ::RECT 结构体，只要指定::RECT 的所有字段值就可以

<a id="GdipRegionObject"></a>
## GdipRegionObject 成员列表


<a id="GdipRegionObject.combine"></a>
### GdipRegionObject.combine(param,mode) 
 与指定区域、路径或矩形相交。  
参数 @param 可以是 gdip.region 对象、gdip.path 对象 、::RECT 、::RECTF 结构体。  
指定对应结构体字段值的普通 table 会自动转换为 ::RECT 或 ::RECTF 结构体。  
参数 @mode 指定 _gdipCombine 前缀的常量。

<a id="GdipRegionObject.delete"></a>
### GdipRegionObject.delete() 
 删除对象，对象回收时也会自动调用此对象。  
可重复调用，但删除对象以后不能再调用对象的其他函数。

<a id="GdipRegionObject.exclude"></a>
### GdipRegionObject.exclude() 
 排除指定区域、路径或矩形。  
参数 @1 可以是 gdip.region 对象、gdip.path 对象 、::RECT 、::RECTF 结构体。  
指定对应结构体字段值的普通 table 会自动转换为 ::RECT 或 ::RECTF 结构体

<a id="GdipRegionObject.getData"></a>
### GdipRegionObject.getData() 
 返回区域数据，返回值为 buffer 类型字节数组。

<a id="GdipRegionObject.intersect"></a>
### GdipRegionObject.intersect() 
 与指定区域、路径或矩形相交。  
参数 @1 可以是 gdip.region 对象、gdip.path 对象 、::RECT 、::RECTF 结构体。  
指定对应结构体字段值的普通 table 会自动转换为 ::RECT 或 ::RECTF 结构体

<a id="GdipRegionObject.isEmpty"></a>
### GdipRegionObject.isEmpty() 
 是否为空区域，参数 @1 指定 gdip.graphics 对象。

<a id="GdipRegionObject.isInfinite"></a>
### GdipRegionObject.isInfinite() 
 是否为无限区域，参数 @1 指定 gdip.graphics 对象。

<a id="GdipRegionObject.makeEmpty"></a>
### GdipRegionObject.makeEmpty() 
 将区域设为空

<a id="GdipRegionObject.makeInfinite"></a>
### GdipRegionObject.makeInfinite() 
 将区域设为无限

<a id="GdipRegionObject.translate"></a>
### GdipRegionObject.translate(dx,dy) 
 平移区域，参数 dx,dy 指定水平与垂直方向平移数值

<a id="gdip.path"></a>
## gdip.path 成员列表


<a id="gdip.path.is"></a>
### gdip.path.is() 
 参数 @1 是否 gdip.region 对象
