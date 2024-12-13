# gdip.solidBrush 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.CreateSolidFill"></a>
### gdip.CreateSolidFill 
 

```aardio
$.api("GdipCreateSolidFill","int(int argb,pointer& Brush)")
```



<a id="gdip.GetSolidFillColor"></a>
### gdip.GetSolidFillColor 
 

```aardio
$.api("GdipGetSolidFillColor","int(PTR brush,int& argb)")
```



<a id="gdip.SetSolidFillColor"></a>
### gdip.SetSolidFillColor 
 

```aardio
$.api("GdipSetSolidFillColor","int(PTR brush,int argb)")
```



<a id="gdip.solidBrush"></a>
### gdip.solidBrush 
 单色笔刷

<a id="gdip.solidBrush"></a>
### gdip.solidBrush() 
 [返回对象:gdipsolidbrushObject](#gdipsolidbrushObject)

<a id="gdip.solidBrush"></a>
### gdip.solidBrush(颜色值) 
 创建单色笔刷

<a id="gdipsolidbrushObject"></a>
## gdipsolidbrushObject 成员列表


<a id="gdipsolidbrushObject.color"></a>
### gdipsolidbrushObject.color 
 获取或修改笔刷颜色

<a id="gdipsolidbrushObject.delete"></a>
### gdipsolidbrushObject.delete() 
 释放笔刷对象
