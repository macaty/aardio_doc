# fsys.crx.AsymmetricKeyProof 库模块帮助文档

<a id="fsys.crx"></a>
## fsys.crx 成员列表


<a id="fsys.crx.AsymmetricKeyProof"></a>
### fsys.crx.AsymmetricKeyProof 
 Protobuf 消息对象

<a id="fsys.crx.AsymmetricKeyProof"></a>
### fsys.crx.AsymmetricKeyProof() 
 创建 Protobuf 消息对象。  
  
[返回对象:fsysCrxAsymmetricKeyProofObject](#fsysCrxAsymmetricKeyProofObject)

<a id="fsysCrxAsymmetricKeyProofObject"></a>
## fsysCrxAsymmetricKeyProofObject 成员列表


<a id="fsysCrxAsymmetricKeyProofObject.eachName"></a>
### fsysCrxAsymmetricKeyProofObject.eachName() 
 

```aardio
for k,v in fsysCrxAsymmetricKeyProofObject.eachName(){
	/*遍历此消息对象的所有字段，
k 为字段名,v 为字段值。*/
}
```



<a id="fsysCrxAsymmetricKeyProofObject.parseFromString"></a>
### fsysCrxAsymmetricKeyProofObject.parseFromString(字符串) 
 二进制数据反序列化到消息对象  
此函数自动清空所有数组值,但不会重置其他非数组字段值.  
因此应对新创建的对象调用此函数.

<a id="fsysCrxAsymmetricKeyProofObject.parseValue"></a>
### fsysCrxAsymmetricKeyProofObject.parseValue() 
 调用 table.parseValue 获取纯值表。  
纯值表只包含纯值类型数据，  
纯值类型指的是：字符串、数值、布尔值、buffer、指针、纯值表。  
纯值表要么是数组，要么是包含名值对的表。  
  
纯值表是可保持原值序列化的表，并且兼容 JSON

<a id="fsysCrxAsymmetricKeyProofObject.publicKey"></a>
### fsysCrxAsymmetricKeyProofObject.publicKey 
 

```aardio
protobuf.type.bytes
```



<a id="fsysCrxAsymmetricKeyProofObject.serializeToString"></a>
### fsysCrxAsymmetricKeyProofObject.serializeToString() 
 序列化消息对象,返回二进制字符串

<a id="fsysCrxAsymmetricKeyProofObject.signature"></a>
### fsysCrxAsymmetricKeyProofObject.signature 
 

```aardio
protobuf.type.bytes
```


