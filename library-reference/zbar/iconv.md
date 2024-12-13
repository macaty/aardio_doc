[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# zbar.iconv 库模块帮助文�?
## zbar 成员列表

### zbar.iconv()

[返回对象:zbarIconvObject](#zbarIconvObject)

### zbar.iconv(fromCode,toCode)

创建转换对象,

建议直接使用标准库函�?string.fromto 转换编码

## zbarIconvObject 成员列表

### zbarIconvObject.close()

关闭对象

### zbarIconvObject.convert(str)

转换参数str指定的字符串编码，成功返回新的字符串,

此函数不会自动设置UTF标记�?
建议改用标准库函�?string.fromto

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/zbar/iconv.md)

