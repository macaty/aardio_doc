# icmp.ping 库模块帮助文档

<a id="icmp"></a>
## icmp 成员列表


<a id="icmp.ping"></a>
### icmp.ping 
 PING工具

<a id="icmp.ping"></a>
### icmp.ping() 
 创建PING对象  
  
[返回对象:icmpPingObject](#icmpPingObject)

<a id="icmpPingObject"></a>
## icmpPingObject 成员列表


<a id="icmpPingObject.close"></a>
### icmpPingObject.close() 
 关闭对象

<a id="icmpPingObject.echoReply.data"></a>
### icmpPingObject.echoReply.data 
 回复数据指针

<a id="icmpPingObject.echoReply.dataSize"></a>
### icmpPingObject.echoReply.dataSize 
 回复数据大小

<a id="icmpPingObject.echoReply.options.tos"></a>
### icmpPingObject.echoReply.options.tos 
 服务类型

<a id="icmpPingObject.echoReply.options.ttl"></a>
### icmpPingObject.echoReply.options.ttl 
 生存时间

<a id="icmpPingObject.echoReply.roundTripTime"></a>
### icmpPingObject.echoReply.roundTripTime 
 往返时间RTT,单位毫秒

<a id="icmpPingObject.echoReply.status"></a>
### icmpPingObject.echoReply.status 
 状态码

<a id="icmpPingObject.ip"></a>
### icmpPingObject.ip 
 IP地址

<a id="icmpPingObject.perform"></a>
### icmpPingObject.perform("目标IP地址") 
 执行PING

<a id="icmpPingObject.requestData"></a>
### icmpPingObject.requestData 
 发送数据,默认为32字节数据

<a id="icmpPingObject.timeout"></a>
### icmpPingObject.timeout 
 超时,默认为1000毫秒
