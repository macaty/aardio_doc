[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.cmdline 库模块帮助文�?
## process 成员列表

### process.cmdline()

参数指定进程ID,返回进程的启动命令行,

�?process.wmi(pid).CommandLine 也可以获得启动参�?

但是在无法获取启动命令行�?process.cmdline 会以返回启动文件路径,

如果目标进程以管理权限启动但当前进程没有管理权限会失�?

此函数失败返�?null,

不指定参数或参数�?直接返回 null

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/cmdline.md)

