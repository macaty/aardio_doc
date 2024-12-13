[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: RUNAS//禁用设备

```aardio aardio
//RUNAS//禁用设备
import console;
import sys.device;
import process.devcon;

//查找所有鼠标设�?var devices = sys.device("{4D36E96F-E325-11CE-BFC1-08002BE10318}"/*_GUID_DEVCLASS_MOUSE*/);

//遍历找到的鼠标设�?for( index,deviceDesc,hardwareId,T in devices.each(
    0/*_SPDRP_DEVICEDESC*/, //添加返回�?deviceDesc
    1/*_SPDRP_HARDWAREID*/ //添加返回�?hardwareId
    ) ){

    process.devcon.disable(hardwareId[1]);
}

console.pause(,"已禁用鼠标，按任意键启用鼠标");

for( index,deviceDesc,hardwareId,T in devices.each(0,1) ){

    process.devcon.enable(hardwareId[1]);
}

console.pause(,"已启用鼠标，按任意键继续");

/*
//禁用蓝牙
var devices = sys.device("{E0CBF06C-CD8B-4647-BB8A-263B43F0F974}" );
for( index,deviceDesc,hardwareId in devices.each(0,1) ){
    process.devcon.disable(hardwareId[1]);
}
*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Hardware/devcon.md)

