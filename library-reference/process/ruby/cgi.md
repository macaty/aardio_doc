# process.ruby.cgi 库模块帮助文档

<a id="process.ruby"></a>
## process.ruby 成员列表


<a id="process.ruby.cgi"></a>
### process.ruby.cgi 
 用于HTTP服务器创建Ruby CGI进程  
适用于 wsock.tcp.simpleHttpServer 或 wsock.tcp.asynHttpServer

<a id="process.ruby.cgi"></a>
### process.ruby.cgi(response,request,cgiPath,...) 
 

```aardio
response,@request参数为HTTP服务器的请求与响应对象,  
@cgiPath指定 ruby.exe的路径,  
可选添加任意个php-cgi.exe的启动参数
```


