[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# sevenZip.lzma.httpFile 库模块帮助文�?
## sevenZip.lzma.httpFile 成员列表

网络安装�?
### sevenZip.lzma.httpFile.download(URL,对话框标�?下载目录,解压目录,存储文件�?父窗�?

下载zip文件,除url以外,其他所有参数可�?
如果zip文件第一个包含文件的目录下包�?setup.dl.aau ,自动执行该文件安�?
### sevenZip.lzma.httpFile.headers

下载时添加的HTTP请求�?
### sevenZip.lzma.httpFile.preget

首次连接慢的下载服务器请设为true

### sevenZip.lzma.httpFile.referer

下载时的HTTP引用�?
### sevenZip.lzma.httpFile.saveFromUrl(url,path)

自url指定的网址下载lzma文件�?
并解压后保存到path指定的路�?

适合下载小文�?建议放到线程�?
### sevenZip.lzma.httpFile.userAgent

下载时用到的User Agent

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/sevenZip/lzma/httpFile.md)

