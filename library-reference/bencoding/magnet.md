[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# bencoding.magnet 库模块帮助文�?
## bencoding.magnet 成员列表

### bencoding.magnet.get(/\*torrent 数据\*/)

参数 @1 可指�?Bencoding 编码的字符串�?
也可以指定本�?\*.torrent �?\*.aria2 文件路径�?
返回磁力链接�?
### bencoding.magnet.getName(URL)

如果参数 @1 为磁力链则返回文件名或元数据哈希值�?
在磁力链中获取不到文件名且返回哈希值或空串时，�?2 个返回值为 true�?
如果指定�?URL 不是磁力链，则返�?URL 中的文件名�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/bencoding/magnet.md)

