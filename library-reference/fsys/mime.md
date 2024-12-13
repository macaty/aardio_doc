# fsys.mime 库模块帮助文档

<a id="fsys.mime"></a>
## fsys.mime 成员列表


<a id="fsys.mime.fromData"></a>
### fsys.mime.fromData(字符串数据,网址,默认MIME,选项) 
 获取MIME类型  
除参数@1以外，其他参数可以省略,  
默认MIME建议设为 "text/html"  
此函数失败也会返回"application/octet-stream"

<a id="fsys.mime.fromFile"></a>
### fsys.mime.fromFile(文件路径,选项) 
 获取MIME类型,参数@2可以省略,  
注意文件路径可以指向不存在的文件,根据文件后缀名检测MIME  
此函数失败也会返回"application/octet-stream"

<a id="fsys.mime.fromUrl"></a>
### fsys.mime.fromUrl(网址,选项) 
 获取MIME类型,参数@2可以省略,  
此函数失败也会返回"application/octet-stream"
