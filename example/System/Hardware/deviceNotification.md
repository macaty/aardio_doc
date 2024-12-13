[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 自动检测插入U�?
```aardio aardio
//自动检测U�?import win.ui;
/*DSG{{*/
var winform = win.form(text="自动检测插入U�?;right=481;bottom=275)
winform.add(
edit={cls="edit";left=15;top=15;right=470;bottom=263;edge=1;multiline=1;z=1}
)
/*}}*/

import sys.storage;
import win.util.deviceNotification;
var devWatcher = win.util.deviceNotification(winform);

devWatcher.onVolumeArrival = function(devData,pDevData){
    if( devData.isMedia ){
        winform.edit.print("插入光盘",devData.drives[1] )
    }
    elseif( devData.isNet ){
        winform.edit.print("添加网络�?,devData.drives[1])
    }
    elseif( sys.storage.isUsbDevice(devData.drives[1]) ){
        if( devData.driveType == 3/*_DRIVE_FIXED*/){
            winform.edit.print("插入 USB 移动硬盘",devData.drives[1])
        }
        elseif( devData.driveType == 2/*_DRIVE_REMOVABLE*/) {
            winform.edit.print("插入 U�?,devData.drives[1])
        }
    }
}

devWatcher.onVolumeRemoveComplete = function(devData,pDevData){
    if( devData.isMedia ){
        winform.edit.print("移除光盘",devData.drives[1] )
    }
    elseif( devData.isNet ){
        winform.edit.print("移除网络�?,devData.drives[1])
    }
    else{
        winform.edit.print("移除�?,devData.drives[1])
    }
}

var usbDevices = sys.storage.getUsbDevices();
if(#usbDevices) winform.edit.print(table.flat(usbDevices));
winform.edit.print(#usbDevices?"请插入或移除U�?:"请插入U�?);

winform.show();
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Hardware/deviceNotification.md)

