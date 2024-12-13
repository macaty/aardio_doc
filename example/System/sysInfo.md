[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 系统版本信息

```aardio aardio
//系统版本信息
//相关范例: 范例\COM 组件\WMI\获取系统信息;范例\操作系统\硬件信息\查询硬件信息
import console;
import win.version;
import win.versionEx;//win.versionEx 指向 win.version 并增加了部分版本信息
import sys.info;
import process;

//�?win.version 获取系统版本
//console.dumpJson(win.version);
console.log( win.version.format() ); //format 函数用于返回格式类似 winver 的版本信�?console.more(1,true);

//使用 aardio 提供的全局常量检测系统版本，这种方法最�?console.log( _WIN10_LATER ? "WIN10以上系统" : "WIN10以下系统")
console.log( _WIN7_LATER ? "WIN7以上系统" : "WIN7以下系统")
console.log( _WINXP ? "WIN XP" : "XP以上系统")
console.log( _WINE ? "WINE" : "�?WINE 环境")
console.printf("系统版本号：%d.%d.%d",_WIN_VER_MAJOR, _WIN_VER_MINOR, _WIN_VER_BUILD )
console.more(1,true);

/*
import win.versionVerify;
console.log( win.versionVerify.isWin11Later() );
*/

console.log("�?NetWkstaGetInfo 获取系统版本")
::NetApi32 :=  raw.loadDll("NetApi32")
var info = {pointer ptr}
::NetApi32.NetWkstaGetInfo( null,100,info)
var versionInfo = raw.convert(info.ptr,{
  INT platformId; // PLATFORM_ID_NT 500 总是这个�?  ustring computername;
  ustring langroup;
  INT verMajor;
  INT verMinor;
});
console.dumpJson(versionInfo);
console.more(1,true);

console.log("�?KUSER_SHARED_DATA 获取系统版本")
var shareDataVersion  = raw.convert( topointer(0x7FFE0000+0x260), {
    INT NtBuildNumber;
    int NtProductType;
    BYTE ProductTypeIsValid;
    BYTE Reserved0;
    WORD NativeProcessorArchitecture;
    INT NtMajorVersion;
    INT NtMinorVersion;
} )

console.dumpJson(shareDataVersion.NtMajorVersion
        + "." + shareDataVersion.NtMinorVersion
        + "." + shareDataVersion.NtBuildNumber
    )
console.more(1,true)

if( 1 == ::Kernel32.GetFirmwareEnvironmentVariableW(
    "","{00000000-0000-0000-0000-000000000000}",null,0)
    ){
    console.log("系统使用传统BIOS启动")
}
else {
    console.log("系统使用UEFI启动")
}

console.more(1)

::Secur32 := raw.loadDll("Secur32")
getUserNameEx = function(format){
    var name = ..raw.buffer(0x202);
    if( ::Secur32.GetUserNameExW(format,name,{INT size=0x101}) ) return ..string.fromUtf16(name,,-1);
}

import sys;
console.log("登录用户名：",sys.getUserName())
console.log("登录用户显示名称(Full Name / Display Name)�?,getUserNameEx(3/*NameDisplay*/))
console.log("登录用户域名称：",getUserNameEx(2/*NameSamCompatible*/))

import com.wmi;
import win.reg;
getProductKey = function(){

    var productKey = com.wmi.get("softwarelicensingservice","OA3xOriginalProductKey");
    if(productKey) return productKey;

    return win.reg.queryWow64( "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform"
        ,"BackupProductKeyDefault" )
}

console.log("安装序列�? ,getProductKey() );

console.pause();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/sysInfo.md)

