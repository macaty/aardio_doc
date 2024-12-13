[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: PID,VID

```aardio aardio
//PID,VID
import console;
import sys.device;

// 创建一�?USB 设备对象,参数�?_GUID_DEVCLASS_USB
var usbDevices = sys.device("{36FC9E60-C465-11CF-8056-444553540000}");

// 遍历所�?USB 设备
for(index, classGuid, deviceDesc, hardwareId,friendlyName in usbDevices.each(
    8/*_SPDRP_CLASSGUID*/,
    0/*_SPDRP_DEVICEDESC*/,
    1/*_SPDRP_HARDWAREID*/,
    0xC/*_SPDRP_FRIENDLYNAME*/,
)) {
    // 解析硬件 ID 获取 VID �?PID
    if(#hardwareId) {
        var vid, pid = string.match(hardwareId[1], "VID_(\x+)&PID_(\x+)");
        if(vid && pid) {
            console.log("VID:", vid);
            console.log("PID:", pid);
            console.log("设备描述",deviceDesc);
            console.log("友好名称",friendlyName);
            console.more(1);
        }
    }
}

console.pause(true);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Hardware/usb.pid.vid.md)

