[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# 成员操作�?
参�?
[表对象](../datatype/table/_.html) [元表](https://www.aardio.com/zh-cn/doc/library-guide/builtin/table/_.html) [重载操作符](overloading.html)

## 成员操作符列�?
成员操作符访问对象的成员，以下面�?table 对象举例�?
```aardio aardio
var tab = {
    member = 123;
    count = 20;
}

```

成员操作符列表如下：

操作符示例说�?*.**var a = tab.member成员操作符，又称“属性操作符”�?
当使用形�?tab.member() 的格式调�?[\_get 元方法](https://www.aardio.com/zh-cn/doc/language-reference/datatype/table/meta.html#_get) �?ownerCall 参数�?true。如果只是写 tab.member 获取值，�?ownerCall 参数�?false。如果是�?tab\["member"\] 的格式则 \_get 元方法的 ownerCall �?null。\[\]var a = tab\["member"\]下标操作符，又称“索引操作符”�?
使用形如 owner\[表达式\] �?owner\["键名"\] 的下标操作符用于赋值语句在触发 [\_set 元方法](https://www.aardio.com/zh-cn/doc/language-reference/datatype/table/meta.html#_set) �?ownerIndex 参数�?true。用于获取键值并触发 \_get 元方法时 ownerCall 参数�?null ，可此用此特性在语法上区�?owner.键名 �?owner\["键名"\] 的不同作用。`[[]]`var a = tab\[\["member"\]\]直接下标操作符（raw subscript operator�?
 获取或设置对象成员，不会触发元方法。可用此操作符在元方法中避免递归调用元方法。直接下标只�?table 对象与字符串有效，用于其他对象则返回 null �?�?
以上几种访问对象成员的操作符都可以用于存取访问对象的成员�?
## 限制

字面量以及定义执行代码的对象（函数定义、类定义�?[lambda](../function/lambda.html) 表达式）不能直接在右侧写一元操作符（成员操作符、调用操作符），除非在外面加一层括号将其转换为普通表达式，例�?

```aardio aardio
var v;

v = "abc"[1] //语法错误
v = ("abc")[1] //语法正确

v = {}.name  //语法错误
v = ({}).name //语法正确

```

## 直接下标的容错�?[\#](\#raw-subscript)

使用双层中括号的直接下标 `[[]]` 不会调用对象的元方法，而是直接返回对象直接包含的元素�?
直接下标有较好的容错性�?
虽然直接下标只对 table 对象与字符串、buffer 有效，但是用于其他类型对象不会报错而是返回 null 值�?
例如�?
```aardio aardio
//无论 object 存储什么�?var object = null;

//下面的代码不会报错，失败只会是返�?null 值�?var name = object[["name"]];

```

无论什么原�?object 不存在名�?"name" 的成员， `object[["name"]]` 都会返回 null 而不是报错。但是，如果我们将上面代码的 `object[["name"]]` 改为 `object["name"]` �?`object.name` 运行就会报错�?
直接下标需要按双层中括号的一个好处是可以让我们重复确认这不是一个笔误�?
## 字符串、buffer 的下标与直接下标操作 [\#](\#string)

参考： [字符串](../datatype/string.html)

下标操作�?`[]` 用于字符串、或 buffer 对象时返回的是指定索引位置的字节码（数值），例如：

```aardio aardio
import console;

var str = "test测试"
var buf = raw.buffer("abc测试");

console.log( str[1], buf[1] );
console.pause(true);

```

下标用于字符串只能进行只读访问（只能读不能写）， buffer 对象的下标的用法跟字符串也类似，�?buffer 对象的下标操作符是可读可写的（可使用下标修改字节码）�?
对字符串�?buffer 使用双层中括号的直接下标操作�?`[[]]` 返回的则是指定位置的字符�?包含单个字符的字符串对象 ）而不是字节码。不能使用直接下标对字符串或 buffer 执行写入操作�?
示例�?
```aardio aardio
import console;

var str ="abc";

//返回字节码，下标越界会返�?0 而不是报错�?console.log( str[1] == 'a'# )

//字符串的直接下返回单字节字符串，下标越界会返�?null 而不是报错�?console.log( str[[1]] == 'a' )

```

对字符串�?buffer 使用下标 `[]` 读取对应位置的字节码时，如果索引值超出字符串的长度（下标越界）会返回 0 而不是报错�?
对字符串�?buffer 使用直接下标 `[[]]` 读取对应位置的字符时，如果索引值超出字符串的长度（下标越界）会返回 null 而不是报错�?
�?Unicode(UTF-16) 字符串可以同样规则使用下标或直接下标操作符，区别仅仅�?Unicode(UTF-16) 字符串以 2 个字节为一个单位�?
示例�?
```aardio aardio
import console;

var wstr = '宽字符串，Unicode(UTF-16) 编码'u

console.log( "宽字节码", wstr[1] );
console.log( "宽字�?, wstr[[1]] );

console.pause(true);

```

�?Unicode(UTF-16) 字符�?`wstr` 使用下标�?例如 `wstr[1]` ）返回的是双字节表示�?16 位宽字节码（索引按字符计数），使用直接下标（ 例如 `wstr[[1]]` ）返回的是双字节表示�?16 位宽字符（索引按字符计数）�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/language-reference/operator/member-access.md)
