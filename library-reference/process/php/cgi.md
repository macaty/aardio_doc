# process.php.cgi 库模块帮助文档

<a id="process.php"></a>
## process.php 成员列表


<a id="process.php.cgi"></a>
### process.php.cgi 
 用于HTTP服务器创建PHP CGI进程  
适用于 wsock.tcp.simpleHttpServer 或 wsock.tcp.asynHttpServer

<a id="process.php.cgi"></a>
### process.php.cgi(response,request,cgiPath,iniPath,...) 
 

```aardio
response,@request参数为HTTP服务器的请求与响应对象,  
@cgiPath指定php-cgi.exe的路径,  
@iniPath为可选参数，用于指定php.ini的路径,  
可选添加任意个php-cgi.exe的启动参数
```


