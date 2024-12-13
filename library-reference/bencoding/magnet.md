# bencoding.magnet 库模块帮助文档

<a id="bencoding.magnet"></a>
## bencoding.magnet 成员列表


<a id="bencoding.magnet.get"></a>
### bencoding.magnet.get(/*torrent 数据*/) 
 参数 @1 可指定 Bencoding 编码的字符串，  
也可以指定本地 *.torrent 或 *.aria2 文件路径。  
返回磁力链接。

<a id="bencoding.magnet.getName"></a>
### bencoding.magnet.getName(URL) 
 如果参数 @1 为磁力链则返回文件名或元数据哈希值。  
在磁力链中获取不到文件名且返回哈希值或空串时，第 2 个返回值为 true。  
如果指定的 URL 不是磁力链，则返回 URL 中的文件名。
