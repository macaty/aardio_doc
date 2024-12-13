# protobuf.message 库模块帮助文档

<a id="protobuf"></a>
## protobuf 成员列表

Protobuf 序列化协议,  
支持 proto2,proto3 语法。  
用法 请参考：aardio 范例 > 网络应用 > protobuf

<a id="protobuf.message"></a>
### protobuf.message 
 Protobuf 消息对象，  
Protobuf 中所有类型都是继承自 protobuf.message。  
字段名中下划线后接小写字母会自动去掉下划线转换为驼峰式命名  
Protobuf 消息对象可以用 web.json.stringify 转换为 json，  
也可以用 web.json.strip 转换为纯 table 对象
