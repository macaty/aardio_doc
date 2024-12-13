# php.simpleHttpServer 库模块帮助文档

<a id="php.simpleHttpServer"></a>
## php.simpleHttpServer 成员列表

调用 process.php.simpleHttpServer 以 CGI 方式启动 PHP,  
php-cgi.exe 路径默认指定为 "~\lib\php\.dll\php-cgi.exe";

<a id="php.simpleHttpServer.startUrl"></a>
### php.simpleHttpServer.startUrl 
 查找可用端口创建PHP/CGI服务器，返回返回完整URL  
此服务端限制使用本机IP127.0.0.1访问,并随机分配端口不会出现端口冲突  
如果PHP/CGI服务器已启动则直接返回URL而不是重复启动服务器,  
注意当前线程结束时,此服务器线程会自动退出

<a id="php.simpleHttpServer.startUrl"></a>
### php.simpleHttpServer.startUrl(path,documentRoot) 
 查找可用端口创建PHP/CGI服务器，返回返回完整URL  
如果PHP/CGI服务器已启动则直接返回URL而不是重复启动服务器,  
省略参数返回首页URL,尾部不包含斜杠  
可选用@path参数指定请求目标文件的相对路径  
可选使用参数@documentRoot指定网站根目录,默认为"/"
