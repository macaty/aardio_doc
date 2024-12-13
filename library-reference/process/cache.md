[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.cache 库模块帮助文�?
## process.cache 成员列表

用于搜索运行过的程序

### process.cache.each()

```aardio aardio
for(path in process.cache.each() ){
    /*遍历最近运行过的程序路径，
path 为程序路径，可能为已删除的路�?/
}

```

### process.cache.find

查找并返回运行过或在 AppPath 注册过的有效程序路径�?
返回路径必须�?exe 后缀，且文件名不包含 Install,Setup 等单�?
### process.cache.find("文件�?,"版本信息产品名称",是否搜索快捷方式)

查找并返回运行过或在 AppPath 注册过的有效程序路径�?
忽略大小写比�?并支持模式匹配语�?

文件名与产品名称必须至少指定一个，

越是指定严格的文件名匹配条件搜索越快�?
参数@3 �?false 不搜索快捷方式，可加快返回速度

### process.cache.list()

返回最近运行的应用程序路径数组�?
返回数组可能包含已删除的程序

如果参数 @1 �?true �?
则允许在列表中包含在 AppPath 注册的应用程序路�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/cache.md)

