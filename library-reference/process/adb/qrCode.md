[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# process.adb.qrCode 库模块帮助文�?
## process 成员列表

### process.adb()

[返回对象:libqrencodebitmapObject](#libqrencodebitmapObject)

## process.adb 成员列表

### process.adb.qrCode

生成自动配对二维�?
### process.adb.qrCode(winform,name,code,version,level,casesensitive)

生成自动配对二维码，返回 qrencode.bitmap 对象�?
如果 winform 参数不是 null，配对成功或失败回调 winform.onAdbPair 函数�?
配对成功则回调参�?@1 为设备信息的表对象，否则�?null�?
如果 winform.onAdbPair 返回 true 则继续等待扫码配对�?
无论有没有扫码，winform.onAdbPair 都会数秒回调一�?
可选用 @name 指定 mDNS 查询名称，可选用 code 指定配对码，

不指定则自动生成随机字符串�?
其他参数可省略，用法参�?qrencode.bitma

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/adb/qrCode.md)

