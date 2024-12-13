# gdip.snap 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.snap"></a>
### gdip.snap() 
 [返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

<a id="gdip.snap"></a>
### gdip.snap(窗口句柄,rect) 
 自屏幕抓取窗口图像并返回 gdip.bitmap 对象。  
截图结果会包含透明部分的背景图像。  
所有参数可选，参数 @rect 可指定 ::RECT 或 ::RECTF 结构体

<a id="gdip.snap"></a>
### gdip.snap(窗口句柄,左坐标,顶坐标,宽,高) 
 自屏幕抓取窗口图像并返回 gdip.bitmap 对象。  
截图结果会包含透明部分的背景图像，  
所有参数都是可选参数

<a id="gdip.snap"></a>
## gdip.snap 成员列表


<a id="gdip.snap.client"></a>
### gdip.snap.client() 
 [返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

<a id="gdip.snap.client"></a>
### gdip.snap.client(窗口句柄,左坐标,顶坐标,宽,高) 
 自屏幕抓取窗口客户区图像并返回 gdip.bitmap 对象,  
截图结果会包含透明部分的背景图像，  
所有参数都是可选参数

<a id="gdip.snap.file"></a>
### gdip.snap.file(图像路径,窗口句柄,rect) 
 自屏幕抓取窗口图像并保存到文件。  
截图结果会包含透明部分的背景图像。  
所有参数可选，参数 @rect 可指定 ::RECT 或 ::RECTF 结构体

<a id="gdip.snap.file"></a>
### gdip.snap.file(图像路径,窗口句柄,左坐标,顶坐标,宽,高) 
 自屏幕抓取窗口图像并保存到文件。  
截图结果会包含透明部分的背景图像，  
所有参数都是可选参数

<a id="gdip.snap.print"></a>
### gdip.snap.print() 
 [返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

<a id="gdip.snap.print"></a>
### gdip.snap.print(窗口句柄,左坐标,顶坐标,宽,高) 
 后台抓取窗口图像并返回 gdip.bitmap 对象  
所有参数都是可选参数

<a id="gdip.snap.printClient"></a>
### gdip.snap.printClient() 
 [返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

<a id="gdip.snap.printClient"></a>
### gdip.snap.printClient(窗口句柄,左坐标,顶坐标,宽,高) 
 后台抓取窗口客户区图像并返回 gdip.bitmap 对象   
所有参数都是可选参数
