# process.temp 库模块帮助文档

<a id="process.temp"></a>
## process.temp 成员列表

创建可删除EXE文件自身的临时进程  
可用于卸载更新等辅助程序  
  
同一路径同一文件自动阻止重复启动自删进程

<a id="process.temp.run"></a>
### process.temp.run 
 创建可删除EXE文件自身的临时进程  
注意同一EXE文件，并且是同一文件名，同一时间只能运行一个实例，  
启动多个实例会忽略不执行并返回false,  
此函数执行成功返回true

<a id="process.temp.run"></a>
### process.temp.run( 启动应用程序的函数 ) 
 

```aardio
process.temp.run(   
    function( exePath,argv ){  
        io.remove(exePath);   
        /*exePath为原EXE文件，可如上直接删除  
当前目录,应用程序目录已设置为exePath的父目录,一般也是你的软件所在目录  
自删进程会保持"/"指向的路径不变,启动原EXE的命令行参数不变*/  
        io.print( "原EXE文件所在目录:",io.fullpath("/") );  
        io.print( "自删进程EXE文件所在目录:",io.fullpath("~/") );  
    }  
)
```


