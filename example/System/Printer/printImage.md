[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 打印图像

```aardio aardio
//打印图像
import sys.printer;
var printImage = function(filepath){

    var printer = sys.printer();
    var pdc = printer.createDevice(
        dmPaperSize = 9/*_DMPAPER_A4*/; //A4 �?        dmOrientation = 0;//横向打印�?,纵向打印�?
    );

    pdc.start(
        function(hdcPrinter,rc){

            //GDI+绘图
            import gdip.graphics;
            import gdip.bitmap;

            var graphics = gdip.graphics(hdcPrinter);
            graphics.pageUnit = 2/*_UnitPixel,打印单位改为使用像素*/;

            var bmp = gdip.bitmap(filepath);

            //保持比例缩放打印内容以符合介�?            graphics.drawImageScale(bmp,rc);
        }
    );
}

/*
import fsys;
fsys.enum( "\img-test", "*.png",
    function(dir,filename,fullpath,findData){
        if(filename){
           printImage(fullpath);
        }
    },false
);
*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Printer/printImage.md)

