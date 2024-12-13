[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# icmp.ping 库模块帮助文�?
## icmp 成员列表

### icmp.ping

PING工具

### icmp.ping()

创建PING对象

[返回对象:icmpPingObject](#icmpPingObject)

## icmpPingObject 成员列表

### icmpPingObject.close()

关闭对象

### icmpPingObject.echoReply.data

回复数据指针

### icmpPingObject.echoReply.dataSize

回复数据大小

### icmpPingObject.echoReply.options.tos

服务类型

### icmpPingObject.echoReply.options.ttl

生存时间

### icmpPingObject.echoReply.roundTripTime

往返时间RTT,单位毫秒

### icmpPingObject.echoReply.status

状态码

### icmpPingObject.ip

IP地址

### icmpPingObject.perform("目标IP地址")

执行PING

### icmpPingObject.requestData

发送数�?默认�?2字节数据

### icmpPingObject.timeout

超时,默认�?000毫秒

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/icmp/ping.md)

