[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 字符串列�?
```aardio aardio
//字符串列�?import console;

var str = "
key1: value1
key2: value2
"

/*
以行为单位的字符串属性表可用 string.table 解析�?可用等号或冒号分隔键值，忽略分隔符前后的空白，可自定义分隔符�?参数 @3 指定�?'#'# 可启用注释�?*/
var strList = string.table(str);

/*
string.list 则用于解析格式类似但更复杂一些的字符串列表�?字符串列表允许字段值包含跨行的引用段�?
aardio 字符串列表格式说�?
一、字符串列表本格�?
'键名=值\r\n键名2=�?\r\n键名3=�?'

其中行分隔符(lineDelimiter)默认�?'\r\n',可修改设置为其他字符�?键值对分隔�?nameValueSeparator)默认�?'=',等号前后忽略空格。可修改设置为其他字符串,
键值都忽略首尾空格�?键值都必须是字符串

二、注�?
当一个行中不包含键值对分隔�?nameValueSeparator),
则该行在解析时被忽略键名中不允许出现行分隔符

三、引用段

在字符串列表中的值文本中,
可以指定由两个引用符(引号或括�?括起来的引用�?引用段中忽略分隔符�?引用符号必须在值文本首尾匹配�?*/
import console;
import string.list;

var str =
/*============================================
示例一: 遍历配置列表文件所有字�?============================================*/
console.log( str );

var tlist = string.list( "~/config/use.cfg" );
for i,k,v in tlist.each() {
    console.log( i,  k + tlist.mark + v )
}

var str =
/*============================================
示例�? 使用字符串列�?============================================*/
console.log( str );

var str = /*
姓名 = 张三
年龄 = 30
住址 = 北京

*/

//创建字符串列�?var strList = string.list(str)

//保存到文�?strList.save("/test.txt")

//从文件读取字符串列表
strList.load("/test.txt")

//访问成员
console.log( strList.姓名 )
//添加新成�?strList.工作单位 = "aardio论坛"

//转换为普通字符串
str = tostring(strList)

//拼接成网址参数格式
var str = tostring(strList,'&' );
console.log( str  )

//如果是简单的字符串列�?可以自已拆分也很简�?var list = {};
for line in string.lines(str,'\&') {
    var nv = string.splitEx(line,"=",2);
    list[ nv[1] ] = nv[2];
}
console.dump(list)

console.pause()

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/Text/list.md)
