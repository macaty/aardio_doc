# process.rpc.tcpJsonClient 库模块帮助文档

<a id="process.rpc"></a>
## process.rpc 成员列表


<a id="process.rpc.tcpJsonClient"></a>
### process.rpc.tcpJsonClient 
 调用启动 JSON-PRC 服务端的目标程序

调用启动 JSON-PRC 服务端的目标程序，  
创建管道并隐藏子进程的控制台黑窗口。  
自进程输出读取 "127.0.0.1:端口" 或 "localhost:端口" 格式地址，  
并创建 JSON-RPC 客户端连接该地址。  
  
成功返回 wsock.tcp.jsonClient 客户端，  
失败返回 3 个值：null,错误信息,错误代码

<a id="process.rpc.tcpJsonClient"></a>
### process.rpc.tcpJsonClient() 
 [返回对象:wsockRpcJsonClientObject](#wsockRpcJsonClientObject)

<a id="process.rpc.tcpJsonClient"></a>
### process.rpc.tcpJsonClient(执行文件,命令行参数,STARTUPINFO) 
 调用启动 JSON-PRC 服务端的目标程序。  
命令行参数可以是一个数组、一个或多个字符串参数,  
  
数组或多个命令行参数调用 process.joinArguments 合并,  
不在双引号内、且包含空白或需要转义的参数转义处理后首尾添加双引号