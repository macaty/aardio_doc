[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.file 库模块帮助文�?
## process.file 成员列表

### process.file.delete(EXE路径)

中止进程、并删除执行程序文件

一直重试直到删除成�?
### process.file.each( )

```aardio aardio
for( path,prcs in process.file.each() ){
    break ;
}

```

### process.file.each()

[返回对象:processObject](_.html#processObject)

### process.file.eachDir( )

```aardio aardio
for( path,prcs in process.file.each(/*输入EXE文件所属上级目�?/) ){
    break ;
}

```

### process.file.find()

[返回对象:processObject](_.html#processObject)

### process.file.find(EXE路径)

使用物理路径查找并返回进程对�?
仅使用文件名查找请使用process.find函数

### process.file.terminate(EXE路径)

中止进程

### process.file.test(EXE路径)

检测指定路径的进程是否存在

该函数不会返回进程对�?
### process.file.wait(EXE路径)

等待指定的进程启�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/file.md)

