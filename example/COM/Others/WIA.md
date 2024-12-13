[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - 扫描�?
```aardio aardio
//COM 接口 - 扫描�?import fonts.fontAwesome;
import win.ui;
/*DSG{{*/
var winform = win.form(text="调用扫描�?;right=759;bottom=469)
winform.add(
plus={cls="plus";left=9;top=10;right=751;bottom=459;font=LOGFONT(h=-32;name='FontAwesome');repeat="scale";z=1}
)
/*}}*/

winform.show();
winform.plus.disabledText = {'\uF254';'\uF251';'\uF252';'\uF253';'\uF250'}

//创建线程
thread.invoke(
    function(winform){
        import com;

        //https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/wiaaut/-wiaaut-commondialog
        var cdc = com.CreateObject("WIA.CommonDialog");
        var device = cdc.ShowSelectDevice(cdc.ScannerDeviceType,true,false);
        var scannerDevice = device.Items(1);

        //设置扫描仪属�?        scannerDevice.setProperties("Horizontal Resolution",300);
        scannerDevice.setProperties("Vertical Resolution",300);
        scannerDevice.setProperties("Current Intent",scannerDevice.ColorIntent);

        /*
        //显示获取图像对话�?        var imageFile = cdc.ShowAcquireImage(cdc.ScannerDeviceType
            ,cdc.ColorIntent,cdc.MaximizeQuality, "{00000000-0000-0000-0000-000000000000}"
            ,true,true,false);
        */

        //直接获取图像
        var imageFile = scannerDevice.Transfer(cdc.wiaFormatJPEG);

        //https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/wiaaut/-wiaaut-iimagefile-filedata
        winform.plus.background = imageFile.FileData.BinaryData;
        winform.plus.disabledText = null;
    },winform
);

win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/WIA.md)

