[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# qrencode.bitmap 库模块帮助文�?
## qrencode 成员列表

### qrencode.bitmap

创建二维码并用于生成GDI+位图

### qrencode.bitmap("UTF8字符�?,版本,错误级别)

生成二维码数�?
版本1:21×21 版本40:177×177,省略根据输入数据自动选择最小版�?
错误修正级别LMQH顺序�?,1,2,3表示,省略该参数默认为0

### qrencode.bitmap()

[返回对象:libqrencodebitmapObject](#libqrencodebitmapObject)

## libqrencodebitmapObject 成员列表

### libqrencodebitmapObject.bitmap

生成的原始GDI+位图

[返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

### libqrencodebitmapObject.copyBitmap()

[返回对象:gdipbitmapObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/bitmap.html#gdipbitmapObject)

### libqrencodebitmapObject.copyBitmap(宽度)

缩放为指定大小的GDI+位图

使用相邻插值法缩放

### libqrencodebitmapObject.copyBitmapString(宽度,文件格式,图像质量)

缩放为指定大小的GDI+位图,并返回图像数�?
文件格式为可选参�?用文件后缀名表�?默认�?\*.jpg"

图像质量为可选参�?以百分比表示,默认�?00

### libqrencodebitmapObject.version

二维码版�?
这个版本号可能比生成二维码指定的要大

### libqrencodebitmapObject.width

二维码宽�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/qrencode/bitmap.md)

