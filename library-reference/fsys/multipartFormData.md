# fsys.multipartFormData 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.multipartFormData"></a>
### fsys.multipartFormData 
 multipart/form-data格式文件解析器

<a id="fsys.multipartFormData"></a>
### fsys.multipartFormData("文件路径","分隔符") 
 解析文件返回表对象  
可选在参数@3中指定读写缓冲区大小

<a id="fsys.multipartFormData"></a>
### fsys.multipartFormData() 
 

```aardio
!stdfsysmultipartFormData
```



<a id="fsysmultipartFormDataObject"></a>
## fsysmultipartFormDataObject 成员列表


<a id="fsysmultipartFormDataObject.?"></a>
### fsysmultipartFormDataObject.? 
 multipart/form-data对象的每个键名下保存每个字段的信息  
  
[返回对象:fsysmultipartFormFieldObject](#fsysmultipartFormFieldObject)

<a id="fsysmultipartFormDataObject.getPath"></a>
### fsysmultipartFormDataObject.getPath() 
 参数中指定的文件路径

<a id="fsysmultipartFormFieldObject"></a>
## fsysmultipartFormFieldObject 成员列表


<a id="fsysmultipartFormFieldObject.contentLength"></a>
### fsysmultipartFormFieldObject.contentLength 
 数据长度

<a id="fsysmultipartFormFieldObject.contentOffset"></a>
### fsysmultipartFormFieldObject.contentOffset 
 偏移位置

<a id="fsysmultipartFormFieldObject.contentType"></a>
### fsysmultipartFormFieldObject.contentType 
 MIME类型

<a id="fsysmultipartFormFieldObject.filename"></a>
### fsysmultipartFormFieldObject.filename 
 文件名  
如果不是文件则为空

<a id="fsysmultipartFormFieldObject.name"></a>
### fsysmultipartFormFieldObject.name 
 字段名称

<a id="fsysmultipartFormFieldObject.save"></a>
### fsysmultipartFormFieldObject.save("文件路径") 
 保存文件  
上传文件数据如果不保存,在请求结束将被自动删除

<a id="fsysmultipartFormFieldObject.value"></a>
### fsysmultipartFormFieldObject.value() 
 此函数直接读取并返回此字段的数据  
较大文件应使用save函数转存文件
