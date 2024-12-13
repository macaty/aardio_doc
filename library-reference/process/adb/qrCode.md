# process.adb.qrCode 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.adb"></a>
### process.adb() 
 [返回对象:libqrencodebitmapObject](#libqrencodebitmapObject)

<a id="process.adb"></a>
## process.adb 成员列表


<a id="process.adb.qrCode"></a>
### process.adb.qrCode 
 生成自动配对二维码

<a id="process.adb.qrCode"></a>
### process.adb.qrCode(winform,name,code,version,level,casesensitive) 
 生成自动配对二维码，返回 qrencode.bitmap 对象。  
如果 winform 参数不是 null，配对成功或失败回调 winform.onAdbPair 函数。  
配对成功则回调参数 @1 为设备信息的表对象，否则为 null。  
如果 winform.onAdbPair 返回 true 则继续等待扫码配对。  
无论有没有扫码，winform.onAdbPair 都会数秒回调一次  
  
可选用 @name 指定 mDNS 查询名称，可选用 code 指定配对码，  
不指定则自动生成随机字符串。  
  
其他参数可省略，用法参考 qrencode.bitma
