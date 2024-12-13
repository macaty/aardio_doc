# fsys.hosts 库模块帮助文档

<a id="fsys.hosts"></a>
## fsys.hosts 成员列表


<a id="fsys.hosts.flushDns"></a>
### fsys.hosts.flushDns() 
 清空DNSxe

<a id="fsys.hosts.load"></a>
### fsys.hosts.load() 
 自host文件中读取一个表，每个键值对表示一个域名对应的IP

<a id="fsys.hosts.loadText"></a>
### fsys.hosts.loadText() 
 自host文件直接读取文本内容

<a id="fsys.hosts.ownCacls"></a>
### fsys.hosts.ownCacls() 
 获取host文件的控制权限，  
当前进程需要以管理权限启动

<a id="fsys.hosts.path"></a>
### fsys.hosts.path 
 HOSTS文件路径

<a id="fsys.hosts.saveText"></a>
### fsys.hosts.saveText() 
 将参数指定的文本保存到host文件

<a id="fsys.hosts.update"></a>
### fsys.hosts.update(hostSetting) 
 

```aardio
fsys.hosts.update(  
	[/*在这里指定要在host中修改IP的域名*/] = "127.0.0.1";  
)
```


