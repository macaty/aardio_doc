# process.wxOcr.OcrRequest 库模块帮助文档

<a id="process.wxOcr.OcrRequest"></a>
## process.wxOcr.OcrRequest 成员列表

Protobuf 消息对象

<a id="process.wxOcr.OcrRequest.PicPaths"></a>
### process.wxOcr.OcrRequest.PicPaths 
 Protobuf 消息对象

<a id="process.wxOcr.OcrRequest.PicPaths"></a>
### process.wxOcr.OcrRequest.PicPaths() 
 创建 Protobuf 消息对象。  
  
[返回对象:48c3a6f4RequestPicPathsObject](#48c3a6f4RequestPicPathsObject)

<a id="48c3a6f4RequestPicPathsObject"></a>
## 48c3a6f4RequestPicPathsObject 成员列表


<a id="48c3a6f4RequestPicPathsObject.eachName"></a>
### 48c3a6f4RequestPicPathsObject.eachName() 
 

```aardio
for k,v in 48c3a6f4RequestPicPathsObject.eachName(){
	/*遍历此消息对象的所有字段，
k 为字段名,v 为字段值。*/
}
```



<a id="48c3a6f4RequestPicPathsObject.parseFromString"></a>
### 48c3a6f4RequestPicPathsObject.parseFromString(字符串) 
 二进制数据反序列化到消息对象  
此函数自动清空所有数组值,但不会重置其他非数组字段值.  
因此应对新创建的对象调用此函数.

<a id="48c3a6f4RequestPicPathsObject.picPath"></a>
### 48c3a6f4RequestPicPathsObject.picPath 
 不作为函数调用时，用于返回或设置数组。

<a id="48c3a6f4RequestPicPathsObject.picPath"></a>
### 48c3a6f4RequestPicPathsObject.picPath(index,value) 
 如果作为函数调用：  
修改值时参数 @index 指定元素索引，参数 @value 指定元素值。  
获取值时用参数 @index 指定数组索引即可

<a id="48c3a6f4RequestPicPathsObject.serializeToString"></a>
### 48c3a6f4RequestPicPathsObject.serializeToString() 
 序列化消息对象,返回二进制字符串

<a id="process.wxOcr"></a>
## process.wxOcr 成员列表


<a id="process.wxOcr.OcrRequest"></a>
### process.wxOcr.OcrRequest() 
 创建 Protobuf 消息对象。  
  
[返回对象:processWxOcrOcrRequestObject](#processWxOcrOcrRequestObject)

<a id="processWxOcrOcrRequestObject"></a>
## processWxOcrOcrRequestObject 成员列表


<a id="processWxOcrOcrRequestObject.eachName"></a>
### processWxOcrOcrRequestObject.eachName() 
 

```aardio
for k,v in processWxOcrOcrRequestObject.eachName(){
	/*遍历此消息对象的所有字段，
k 为字段名,v 为字段值。*/
}
```



<a id="processWxOcrOcrRequestObject.parseFromString"></a>
### processWxOcrOcrRequestObject.parseFromString(字符串) 
 二进制数据反序列化到消息对象  
此函数自动清空所有数组值,但不会重置其他非数组字段值.  
因此应对新创建的对象调用此函数.

<a id="processWxOcrOcrRequestObject.picPath"></a>
### processWxOcrOcrRequestObject.picPath 
 [返回对象:48c3a6f4RequestPicPathsObject](#48c3a6f4RequestPicPathsObject)

<a id="processWxOcrOcrRequestObject.serializeToString"></a>
### processWxOcrOcrRequestObject.serializeToString() 
 序列化消息对象,返回二进制字符串

<a id="processWxOcrOcrRequestObject.taskId"></a>
### processWxOcrOcrRequestObject.taskId 
 必定为0  
protobuf.type.int32

<a id="processWxOcrOcrRequestObject.unknow"></a>
### processWxOcrOcrRequestObject.unknow 
 

```aardio
protobuf.type.int32
```


