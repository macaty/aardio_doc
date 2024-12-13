# process.cmdline 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.cmdline"></a>
### process.cmdline() 
 参数指定进程ID,返回进程的启动命令行,  
用 process.wmi(pid).CommandLine 也可以获得启动参数,  
但是在无法获取启动命令行时 process.cmdline 会以返回启动文件路径,  
如果目标进程以管理权限启动但当前进程没有管理权限会失败,  
此函数失败返回 null,  
不指定参数或参数为0直接返回 null
