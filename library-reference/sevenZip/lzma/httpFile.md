# sevenZip.lzma.httpFile 库模块帮助文档

<a id="sevenZip.lzma.httpFile"></a>
## sevenZip.lzma.httpFile 成员列表

网络安装包

<a id="sevenZip.lzma.httpFile.download"></a>
### sevenZip.lzma.httpFile.download(URL,对话框标题,下载目录,解压目录,存储文件名,父窗口) 
 下载zip文件,除url以外,其他所有参数可选  
如果zip文件第一个包含文件的目录下包含 setup.dl.aau ,自动执行该文件安装

<a id="sevenZip.lzma.httpFile.headers"></a>
### sevenZip.lzma.httpFile.headers 
 下载时添加的HTTP请求头

<a id="sevenZip.lzma.httpFile.preget"></a>
### sevenZip.lzma.httpFile.preget 
 首次连接慢的下载服务器请设为true

<a id="sevenZip.lzma.httpFile.referer"></a>
### sevenZip.lzma.httpFile.referer 
 下载时的HTTP引用页

<a id="sevenZip.lzma.httpFile.saveFromUrl"></a>
### sevenZip.lzma.httpFile.saveFromUrl(url,path) 
 自url指定的网址下载lzma文件，  
并解压后保存到path指定的路径,  
适合下载小文件,建议放到线程中

<a id="sevenZip.lzma.httpFile.userAgent"></a>
### sevenZip.lzma.httpFile.userAgent 
 下载时用到的User Agent
