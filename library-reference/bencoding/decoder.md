# bencoding.decoder 库模块帮助文档

<a id="bencoding"></a>
## bencoding 成员列表


<a id="bencoding.decoder"></a>
### bencoding.decoder() 
 创建bencoding解码器  
  
[返回对象:bencodingdecoderObject](#bencodingdecoderObject)

<a id="bencoding.decoder"></a>
## bencoding.decoder 成员列表

bencoding解码器

<a id="bencoding.decoder.load"></a>
### bencoding.decoder.load("文件路径") 
 自文本文件中加载并解码返回数据

<a id="bencodingdecoderObject"></a>
## bencodingdecoderObject 成员列表


<a id="bencodingdecoderObject.getRange"></a>
### bencodingdecoderObject.getRange(对象) 
 参数传入解码后返回的字典或列表对象,  
返回该对象在解码前原始数据中的起始位置,结束位置

<a id="bencodingdecoderObject.getString"></a>
### bencodingdecoderObject.getString(对象) 
 参数传入解码后返回的字典或列表对象,  
返回该对象在解码前的原始数据

<a id="bencodingdecoderObject.parse"></a>
### bencodingdecoderObject.parse() 
 解码并返回数据
