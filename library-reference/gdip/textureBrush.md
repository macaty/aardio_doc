# gdip.textureBrush 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.textureBrush"></a>
### gdip.textureBrush 
 纹理画刷

<a id="gdip.textureBrush"></a>
### gdip.textureBrush() 
 [返回对象:gdipTextureObject](#gdipTextureObject)

<a id="gdip.textureBrush"></a>
### gdip.textureBrush(图像,imageAttributes,x,y,width,height) 
 创建纹理画刷  
参数@1指定gdip.image或gdip.bitmap对象,  
参数@2指定gdip.imageAttributes对象  
其他所有参数可选

<a id="gdip.textureBrush"></a>
### gdip.textureBrush(图像,样式,x,y,width,height) 
 创建纹理画刷  
参数@1指定gdip.image或gdip.bitmap对象,  
其他所有参数可选

<a id="gdipTextureObject"></a>
## gdipTextureObject 成员列表


<a id="gdipTextureObject.delete"></a>
### gdipTextureObject.delete() 
 删除画刷

<a id="gdipTextureObject.rotateTransform"></a>
### gdipTextureObject.rotateTransform(角度) 
 旋转变换  
图案向左或向右旋转N度

<a id="gdipTextureObject.scaleTransform"></a>
### gdipTextureObject.scaleTransform(水平比例,垂直比例) 
 缩放变换

<a id="gdipTextureObject.translateTransform"></a>
### gdipTextureObject.translateTransform(横位移,纵位移) 
 平移变换,平移后平铺

<a id="gdipTextureObject.wrapMode"></a>
### gdipTextureObject.wrapMode 
 画刷样式
