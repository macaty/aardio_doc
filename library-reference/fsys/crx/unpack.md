# fsys.crx.unpack 库模块帮助文档

<a id="fsys.crx"></a>
## fsys.crx 成员列表


<a id="fsys.crx.unpack"></a>
### fsys.crx.unpack() 
 [返回对象:fsysCrxCrxFileHeaderObject](#fsysCrxCrxFileHeaderObject)

<a id="fsys.crx.unpack"></a>
### fsys.crx.unpack(ctxPath,extractDir) 
 解压 CTX  V3 扩展。  
@ctxPath 指定扩展路径，可选用 @extractDir 指定解压目录。  
如果不指定 extractDir 则仅获取文件头不解压文件。  
成功返回 fsys.crx.CrxFileHeader 文件头对象。
