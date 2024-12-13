[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 硬件信息

```aardio aardio
//硬件信息
//相关范例: 范例\COM 组件\WMI\获取系统信息;范例\操作系统\系统版本信息

import console;

import sys.baseBoard;
console.log("主板",sys.baseBoard.getFullName())

import sys.cpu;
console.log("CPU:",sys.cpu.getBrand());
console.log("CPU 当前速度:",sys.cpu.getFrequence(true));

var cpu = sys.cpu.getInfoByWmi()
console.log(cpu.DeviceID );//CPU
console.log(cpu.Name);//
console.log("CPU 核心数："+ cpu.NumberOfLogicalProcessors);
console.log("CPU 逻辑核心数："+ cpu.NumberOfLogicalProcessors);
console.log("CPU 最大速度�?+ math.round(cpu.MaxClockSpeed/1000,2) + "GHz");
console.log("CPU 当前速度�?+ math.round(cpu.CurrentClockSpeed/1000,2) + "GHz");
console.log("CPU 位宽�? + cpu.AddressWidth);
console.more()

import sys.mem;
console.log("Total Memory:",sys.mem.getInfo().totalPhys.formatSize);

import sys.display;
console.log("Display Adapter:",sys.display.getAdapter().Description)

import sys.device;
var devInfo = sys.device(/*"{4d36e96c-e325-11ce-bfc1-08002be10318}"*/,"PCI");
for( index,classGuid,deviceDesc in devInfo.each(
    8/*_SPDRP_CLASSGUID*/,
    0/*_SPDRP_DEVICEDESC*/
    ) ){
    console.log( index,classGuid,deviceDesc );
}

//查找 USB 网卡
var devices = sys.device("{4d36e972-e325-11ce-bfc1-08002be10318}"/*_GUID_DEVCLASS_NET*/,"USB");
for( index,classGuid,deviceDesc,hardwareId in devices.each(
    8/*_SPDRP_CLASSGUID*/,
    0/*_SPDRP_DEVICEDESC*/,
    1/*_SPDRP_HARDWAREID*/
    ) ){

    console.log( index,classGuid,deviceDesc,hardwareId[1] );
}

/*
相关范例�?范例\COM 组件\WMI\获取系统信息
范例\操作系统\硬件信息\查询硬件信息
*/

console.pause(true);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Hardware/device.md)

