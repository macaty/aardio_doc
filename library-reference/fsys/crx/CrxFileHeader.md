# fsys.crx.CrxFileHeader 库模块帮助文档

<a id="fsys.crx"></a>
## fsys.crx 成员列表


<a id="fsys.crx.CrxFileHeader"></a>
### fsys.crx.CrxFileHeader 
 Protobuf 消息对象

<a id="fsys.crx.CrxFileHeader"></a>
### fsys.crx.CrxFileHeader() 
 创建 Protobuf 消息对象。  
  
[返回对象:fsysCrxCrxFileHeaderObject](#fsysCrxCrxFileHeaderObject)

<a id="fsysCrxCrxFileHeaderObject"></a>
## fsysCrxCrxFileHeaderObject 成员列表


<a id="fsysCrxCrxFileHeaderObject.crxId"></a>
### fsysCrxCrxFileHeaderObject.crxId 
 扩展 ID，仅解包 crx 后可用。

<a id="fsysCrxCrxFileHeaderObject.eachName"></a>
### fsysCrxCrxFileHeaderObject.eachName() 
 

```aardio
for k,v in fsysCrxCrxFileHeaderObject.eachName(){
	/*遍历此消息对象的所有字段，
k 为字段名,v 为字段值。*/
}
```



<a id="fsysCrxCrxFileHeaderObject.parseFromString"></a>
### fsysCrxCrxFileHeaderObject.parseFromString(字符串) 
 二进制数据反序列化到消息对象  
此函数自动清空所有数组值,但不会重置其他非数组字段值.  
因此应对新创建的对象调用此函数.

<a id="fsysCrxCrxFileHeaderObject.parseValue"></a>
### fsysCrxCrxFileHeaderObject.parseValue() 
 调用 table.parseValue 获取纯值表。  
纯值表只包含纯值类型数据，  
纯值类型指的是：字符串、数值、布尔值、buffer、指针、纯值表。  
纯值表要么是数组，要么是包含名值对的表。  
  
纯值表是可保持原值序列化的表，并且兼容 JSON

<a id="fsysCrxCrxFileHeaderObject.serializeToString"></a>
### fsysCrxCrxFileHeaderObject.serializeToString() 
 序列化消息对象,返回二进制字符串

<a id="fsysCrxCrxFileHeaderObject.sha256WithEcdsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithEcdsa 
 ECDSA 公钥与签名。  
不作为函数调用时，用于返回或设置数组。

<a id="fsysCrxCrxFileHeaderObject.sha256WithEcdsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithEcdsa() 
 [返回对象:fsysCrxAsymmetricKeyProofObject](#fsysCrxAsymmetricKeyProofObject)

<a id="fsysCrxCrxFileHeaderObject.sha256WithEcdsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithEcdsa(index,value) 
 ECDSA 公钥与签名。n如果作为函数调用：  
修改值时参数 @index 指定元素索引，参数 @value 指定元素值。  
获取值时用参数 @index 指定数组索引即可

<a id="fsysCrxCrxFileHeaderObject.sha256WithRsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithRsa 
 公钥与 sha256 签名。不作为函数调用时，用于返回或设置数组。

<a id="fsysCrxCrxFileHeaderObject.sha256WithRsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithRsa() 
 [返回对象:fsysCrxAsymmetricKeyProofObject](#fsysCrxAsymmetricKeyProofObject)

<a id="fsysCrxCrxFileHeaderObject.sha256WithRsa"></a>
### fsysCrxCrxFileHeaderObject.sha256WithRsa(index,value) 
 公钥与 sha256 签名。  
如果作为函数调用：  
修改值时参数 @index 指定元素索引，参数 @value 指定元素值。  
获取值时用参数 @index 指定数组索引即可

<a id="fsysCrxCrxFileHeaderObject.signedHeaderData"></a>
### fsysCrxCrxFileHeaderObject.signedHeaderData 
 签名数据.  
protobuf.type.bytes
