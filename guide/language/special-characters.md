# aardio 之特殊符号用法大全   

在 aardio 编辑器中仅选中`特殊符号或标记`，按 `F1` 可直接打开相关文档。
 
## `{}` 表构造器、语句块标记

{} 可用作包含 [语句块](../../language-reference/statements/blocks.html) 的首尾标记，语句块一组顺序执行的[语句](../../language-reference/basic-syntax.html#statement) 组成，并可创建独立的[局部变量](../../language-reference/variables-and-constants.html) 作用域，局部变量拥有最高的存取优先级，查找同名变量时将优先搜索当前语句块的局部变量，例如下面的代码创建了多个语句块：  
  
```aardio
import console;

//创建函数体  
var func = function(cond){    

	//声明局部变量 
	var v = 1;  
    
    //条件语句  
    if(cond){        
    	//声明局部变量 
    	var v = 2;  
        console.log(v);  
    }  
}  
  
func(true);  
console.pause(true);
```


`{}` 在表达式中用于构造[表对象](../../language-reference/datatype/table/_.html)，[表](../../language-reference/datatype/table/_.html)是 aardio 中唯一的复合数据类型，  
即可用作哈希表，也可以同时包含有序数组、稀疏数组等成员。声明字段的[原生类型](../../library-guide/builtin/raw/datatype.html)时 —— 还可以表示[结构体](../../library-guide/builtin/raw/struct.html)。  
  
表中默认用 `;` 号分隔成员（ 可用逗号替代 ），默认用 `=` 号分隔键值对成员（非结构体字段可用 `:` 号替代 ），示例：  
  
```aardio
var object = { name1 = "abc"; name2 = 123 }  
var object2 = { ["name1"]="abc", ["name2"]=123 }  
var object3 = { name1:"abc", name2:123 }  
var object4 = { "name1":"abc", "name2":123 }  
var array = { 1;2;3 }var array2 = { 1,2,3 }var objectAndArray = { name1 = "abc"; name2 = 123; 1;2;3 }
```

虽然在 aardio 中以上构造表的语法都是正确的，但一般建议大家使用 `;` 号分隔元素，并使用 `=` 号分隔键值对。


## `.`  成员操作符 

用于访问对象的成员,  
例如 io.open 表示 open 函数是 [io](../../library-guide/builtin/io/console.html)对象的成员( 这里是名字空间成员 )

  
## `..` 全局成员操作符


这个操作符用在自定义的[名字空间](../../language-reference/namespace.html)里访问全局名字空间 global;  
例如 `..io.open()` 实际上等价于 `global.io.open()`

  
## `::` 保留常量操作符


这个操作符用于将一个合法的变量名转换为 global 名字空间下的[保留常量](../../language-reference/variables-and-constants.html#reserved-constant)名 - 并保护该常量在其后加载的代码中一旦赋为非空值后即不可修改，例如：  

```aardio
::Kernel32 := raw.loadDll("Kernel32.dll");  
```

保留常量需要遵守以下使用规则  

*  保留常量名首字母必须大写（以区别普通变量 ）。   
  
*  当一个变量被定义为保留常量，赋于非空值以后其值即不能再随意更改 。  
     保留常量一般使用 `::Name := 初始值` 赋值，等价于使用 `::Name = ::Name or 初始值 ` 以避免重复初始化。  
  
*  保留常量以后即使不添加 `::` 前缀仍然属于相同的保留常量。注意 `::` 的作用域是根据代码的载入与编译顺序向下向后生效，但是代码文件的载入顺序存在不确定性，因此在任何时候都不应当省略保留常量的 `::` 前缀。

 
## `#` 计数操作符
 

当 [\# 操作符](../../language-reference/operator/len.html) 在一个数组前面时返回数组长度。

`#` 操作符用在字符串或 buffer 对象前面时返回字节数。注意 UTF16/UTF8 字符串用 `#` 取到的都是字节数而不是字符数，UTF8 字符串使用 `string.len()` 函数可以获取字符数，而 UTF16 字符串只要简单的用字节数除以 2 就可以得到字符数。  
  
如果 `#`在一个单引号包含的字符后面，计算并返回字符的 ASCII 码，例如 `'a'#` 返回表示 `a` 的字节码的数值`97`。 

当`#`放在数字中间时，用来表示自定义进值，例如 `2#101` 表示2进制的101


## `[]` 下标操作符( 或者叫索引操作符 ) 

也是用来访问对象的成员,中括号里面应当是一个合法的表达式。  
例如 `io.open` 用索引索作符来表示就是 `io["open"]` 。
          
而 [. 成员操作符](../../language-reference/operator/member-access.html) 这里的成员名字不需要放到引号里，并且必须是一个合法的变量名。但索引操作符就不同了，可以放任意的表达式，例如 `io[ "o" + "pen" ]` 这样写也是可以的。  
          
另外一个区别：当你使用索引操作符调用成员函数时，被调用函数的 owner 参数为空。 所以一般不应当写为 `io["open"]()` , 应当写 `io.open()` 以保证正确传递 owner 参数。  
  
下标操作符也可以用于字符串、或buffer对象，返回的是指定位置的字节码（数值），例如：  
  
```aardio
import console;  

var str = "test测试"  
var wstr = 'Unicode/UTF16宽字符串'u  
var buf = raw.buffer("abc测试");  
console.log( str\[1\], wstr\[1\], buf\[1\] );

console.pause(true);  
```
  
要特别注意的是：  
Unicode/UTF16字符串使用下标操作符返回的是宽字节码（2个字节组成的16位数值）。  
如果需要返回字符而不是字节码，需要改用下面会讲到的直接下标操作符 `[[]]`

## `[[]]` 直接下标操作符 


这个操作符与 `[]` 的用法基本是一样的,  
唯一的区别是他不会触发元方法,所以数组里实际有这个成员就是有,没有就是没有,忽悠不了这个操作符。  
  
这个[直接下标操作符](../../language-reference/operator/member-access.html)可以应用于任何类型的对象( 包括null空值 ）不会报错，  
如果对象不包含直接下标操作符中指定的成员就简单的返回 null空值。所以 `[[]]` 即可以用来取值同时又可以方便地检测对象类型，例如：  
  
```aardio
if( 可能为空或任意类型的变量[["test"]] ){
    print(  可能为空或任意类型的变量[["test"]] )
}
```
  
不要小看这个操作符 - 使用频率非常高，而且可以节省不少的代码。  
最近Javascript, Typescript里一个炒的很火的新语法“可选链”跟这个直接下标有点像，解决的也是类似的问题，实际上 aardio十几年前就有这些了。  
  
将普通下标操作符用于字符串时, `[]`操作符取的是字节码、是个数值，而 `[[]]` 取出来的是字符。  
例如定义字符串变量 `var str = "abcd"` 之后，`str[1]` 是 "a" 的 ASCII 码 97，而 `str[[1]]` 则返回字符"a" 本身（仍然是一个字符串对象）。
  
对于Unicode/UTF16字符串，`[]` 操作符取的是宽字节码（ 以 2 个字节为单位的 16 位数值 ），而  `[[]]` 操作符返回的是宽字符（ 也是以2个字节为单位的单个Unicode字符 ），但使用 #取长度时就总是返回字节长度 - 这个要注意区别，下面看一个完整例子。  


```aardio
import console;var ws = 'abc中文'u;

for(i=1;#ws/2 ){
    console.log("Unicode字节码", ws[ i ], "Unicode字符",ws[[ i ]] )
}
console.pause(true);
```

## `@` 元表操作符 


这个操作符表来读取或设置对象的元表, 关于这个请查看[帮助文档](../../language-reference/datatype/table/meta.html)  

一个简单的示例  
  
```aardio
var tab = { a = 123 };

tab@ = {
    _get = function(name){  return "有没有:" + name;
    }
}

print( tab.a ) // -> 显示123
print( tab.b ) // -> 显示"有没有:b"
print( tab[["b"]] ) // -> 显示 null 空值
```

`@` 在[模式匹配](../../library-guide/builtin/string/patterns.html)里还有特殊用途。

如果一个模式串的第一个字符是‘@’，表示全局禁用模式语法执行普通的二进制匹配。

如果一个模式串的第一个字符是两个'@@',同上表示禁用模式语法并且执行文本匹配（不会截断宽字符。）

也可以在模式串的尖括号中使用一个'@" 或两个 '@@' 表示局部禁用模式语法（ 两个‘@@’ 表示启用文本匹配，并且忽略大小写 ）
  
示例如下： 

```aardio
var  str = "abc\d测试字符串"

//模式匹配
var i,j = string.find(str,"\\d")

//禁用模式匹配
var i,j = string.find(str,"@\d")

//禁用模式匹配、且启用文本匹配
var i,j = string.find(str,"@@\d")

//局部禁用模式匹配
var i,j = string.find(str,"<@\d@>:+")

//局部禁用模式匹配、且启用文本匹配、并且忽略大小写
var i,j  = string.find(str,"<@@\D@>:+")
```

## `_` 下划线


如果在一个[成员变量](../../language-reference/datatype/table/_.html#readonly-member)的前面加上下划线，则声明该变量的值为只读，在赋值后不可修改  
例如执行 `_version = 123` 以后你就不能在后面再执行 `_version = 456` 修改非 `null` 值的 `_version`, 这种习惯在其他动态语言中或许只是一种书写习惯，但是在 aardio 则是语法级别的强制约束。  
  
如果下划线后面的变量名全部大写，则表示全局只读的常量  
例如 `_VERSION = 123` 表示他在所有名字空间都有效。
  
另外数值的字面值允许加入下划线作为数值分隔符，  
例如 `123_456` 等价于 123456, `2#1010_1100` 等价于 `2#10101100`,  
数值分隔符不能使用连续多个下划线，并且不能在字符串中使用数值分隔符，例如:  
  
```aardio
tonumber("123_456") //返回的是123
("123456") + 1 //返回的是一个数值 123457
("123_456") + 1 //会报错
```

  
##  `“\”,"/"` 应用程序根目录


在 aardio 中[文件路径](../../library-guide/builtin/io/path.html)如果以单个斜杆或反斜杆开始表示[『应用程序根目录』](../../library-guide/builtin/io/path.html)。


『应用程序根目录』指启动程序文件所在目录，在开发时指 aardio 工程目录，在发布后指启动 EXE 目录。


如果启动文件在工程外部，或者当前没有打开工程，则以启动文件所在目录为 『应用程序根目录』。


如果在开发环境中运行没有保存的 aardio 代码，则仍以当前工程根目录为『应用程序根目录』，如果没有打开工程，则以 aardio.exe 所在目录为 『应用程序根目录』。


## `~` EXE 目录，按位取反运算符

`~` 在 aardio 里有两个用途：

1. 在文件路径的开始出现时表示 EXE 根目录。

    在 aardio 中如果文件以 "~" 右单个斜杠或反斜杠开始表示启动[EXE 所在目录](../../library-guide/builtin/io/path.html)。

    如果没有生成 EXE ，在开发环境中直接运行代码，EXE 目录指的是 aardio.exe 所在目录。  

2. 数值按位取反运算符

    单个 `~` 作为数值位运算符使用时表示[按位取反](../../language-reference/operator/bitwise.html#not)。


## `$` 包含操作符，模式匹配尾部锚点


1. 包含操作符

    这个[包含操作符](../../language-reference/operator/include.html) 挺有意思，  
    只要在文件路径前面加上这个符号, 就会将该文件编译为一个普通的字符串对象.  

    例如  `str = $"e:/我的图像/x.jpg"` ,在程序发布后,程序即可脱离原来的文件运行,因为该文件已经被编译为一个普通字符串变量并内嵌到EXE中了。  在 aardio 编辑器里，只要将资源管理器里的文件直接往编辑器里一拖就行了，会自动加上这个包含指令符。
    
    如果 `$` 包含的文件路径以`~/`或`~\`开始，并且查找文件失败，  
    aardio 会移除路径前面的`~`，转换为`\`或`/`开头的应用程序根目录路径继续查找。  
    应用程序根目录在开发时指工程根目录（工程之外的 aardio 文件指启动aardio文件所在目录）。  
    
    反之，如果包含的文件以`/`或`\`开始，并且查找包含文件失败，  
    aardio 不会在路径前面添加 `~` 到EXE目录下查找（EXE目录在开发时指 aardio 开发环境所在目录）。  
    
    默认如果找不到包含文件会报错，但是如果包含文件路径前面添加一个问号,  
    找不到文件时不报错而是返回null。 例如： `str = $"?找不到的文件"`  

1.  模式匹配尾部锚点

    在模式匹配中用于匹配字符串尾部边界。参考：[模式语法 - 首尾锚点](../../library-guide/builtin/string/patterns.html#anchors)


## `^` 位异或

[按位异或操作符](../../language-reference/operator/bitwise.html#xor)。

在模式匹配语法中表示字符串的 [开始锚点](../../library-guide/builtin/string/patterns.html#anchors)。
  
## `++` 字符串连接操作符

在 aardio 里 `1 + 2` 的结果是数值 `3`，  
而 `1 + "" + 2` 的结果是字符串 `12` 这个不难理解吧？  
  
上面的 `+ "" +` 可以直接缩写为 `++` ，
也就是说 `1 ++ 2` 等价于  `1 + "" + 2`，相加的结果就是字符串 `12` 。
  
如果加号前面或后面出现了引号包含的字符串字面值，连接字符串就不用再写两个加号，例如：  
`"1" +  "2"` 的结果是 字符串 `12`，
  
也就是说，只有在 + 号前后没有引号包含的字符串字面值，
你就需要用这个 ++ 来告诉 aardio，你要做的是[字符串连接](../../language-reference/operator/concat.html)，而不是数值加运算。

  
## `//` 行注释语句

这个是比较通用的语法, 不过在aardio里有一个特殊的用法：  
行注释可以用于赋值语句中表示字符串，例如 var str = //这是一个字符串  
  
这个与双引号类似,字符串都表示字面意义，没有转义符。

  
## `/*  */` 块注释语句

这个也类似其他类 C 语言，但注意首尾的星号可以用多个、并且首尾星号的数目一定要匹配。  
aardio使用这个特性来解决注释嵌套的麻烦问题。  
  
另外，块注释也可以用在赋值语句中表示字符串，字符串都表示字面意义，没有转义符。  
而换行总是被强制解释为 '\\r\\n'，以避免不同文本编辑器导致的可能混淆的结果。  
这个特性用来包含HTTP头之类严格指定回车换行的文本很方便。  
  
  
aardio中可以调用一些其他语言的源代码，通常要包含大段的其他语言的源码，放到这个块注释里赋值给字符串变量就可以了。直接复制粘帖，不需要象其他语言里一样苦闷的折腾字符串转换。

  
## 双引号

"这个用来表示  
普通字符串字面值"  

双引号里表示普通[字符串](../../language-reference/datatype/string.html)、不支持转义符。  
而且双引号里面的文件是可以换行的，换行都被强制解释为 '\\n'  
也就是说在双引号里绝对不会、也没办法出现回车符，也就是 '\\r'。

## 单引号
  
'这个用来表示转义字符串,  
例如\\r\\n表示回车换行,  
注意这后面的换行被忽略  
注意这前面的换行被忽略'  

单引号表示[字符串](../../language-reference/datatype/string.html)时支持转义符，例如'\\r\\n'表示回车换行，  
而且只能用 '\\r\\n'表示回车换行,文本本身的换行会被忽略,上面的示例中就只有一个回车换行

  
## 反引号 

\`**反引号即键盘左上角ESC键下方的按键，字符串也可以放在反引号中**，其作用与放在双引号中完全一样，通常含单引号的字符串我们用双引号，含双引号的字符串我们用单引号，那么同时包含单引号双引号的字符串呢？当然我们可以使用转义符、注释字符串，但是反引号包含字符的方法会更方便书写。\`  

上面使用是键盘左上角ESC键下方的按键输入反引号，  
反引号在 aardio 中语法作用完全等价于双引号，唯一的区别就是可以用来包含双引号字面值。

  
##  `**` 乘方运算 

例如 2 的3次方写为 `2 ** 3`

  
## % 取模运算 

例如 24 小时制的 19 点转换为 12 时制就可以表示为 `19 % 12`，计算结果是 7 点。
  

##  `or` `||`  `:`  逻辑或运算符

这几个运算符语义都是完全相同的，唯一的区别是 `:` 的优先级略低

  
## `and` `&&` `?`  逻辑与运算符

这几个运算符语义也是完全相同的，唯一的区别提 `?` 的优先级略低

  
## a ? b : c 三元运算符

这个是三元运算符，计算规则为：  
a为真则计算 b( b 为真则返回 b,否则仍然计算并返回 c )，否则计算并返回c。  

当 a 与 b 条件满足时不会计算 c( c 如果是一个函数调用就不会执行 ），a 为假时不会计算 b。  
  
注意与 C 语言有所区别：  
**当 b 运算结果为假的时候仍然会返回 c，aardio 里这个三元运算符是尽最大可能去取回真值**。  

## `()` 括号 

这个用在表达式中可以改变[操作符的优先级](../../language-reference/operator/precedence.html), 例如 `7 * ( 2 + 3 )` 括号里面的会先运算.  

放在函数名后面则表示调用执行该函数，例如  
  
```aardio
print("还可以写一个或多个参数")  
```

[定义函数](../../language-reference/function/definitions.html)的时候用来表示形参，例如  
  
```aardio
func = function(a,b,c){  
   print("收到参数",a,b,c )  
}
```
  
## `...` 不定参数 

运行下面的示例你就明白了:
  
```aardio
func = function( a,... ){  
   print( "收到参数",... )  
}  

func( 1 )  
func( 1,2 )  
func( 1,2,3,4 )
```

`...` 用于表示不定个数的调用参数，注意 `...` 只能放在参数列表的尾部。

我们可以使用 `{...}` 将不定个数的参数转换为数组对象。
  
## `λ` 希腊字母 λ 在aardio中可用于替代 lambda 关键字 

[lambda](../../language-reference/function/lambda.html) 用于定义匿名函数，示例代码：  
  
```aardio
import console;    
var arr = {1;2;3;4;7}    
var value = reduce(arr,λ(a,b) a + b );

console.dump(value);
console.pause(true);
```
  
代码 `λ(a,b) a + b`    
等价于 `lambda(a,b) a + b`    
也等价于 `function(a,b) return a+b;`

## `<? ?>`，`<?= ?>` 模板语法

aardio 源码文件自动支持模板语法，模板主要由两个部分组成：

- 模板标记 `<?` 到 `?>` 之间的部分为 aardio 代码。
- `?>` 之后或 `<?` 之前的部分为模板代码。

模板代码实际上是解析为调用 print 函数的参数，而 `<?= exp ?>` 则被解析为 `print(exp)` 调用。

aardio 模板语法通常用于网站服务端生成 HTML 页面，有时候也被用调用 aardio 代码以生成其他格式的字符串。

aardio 源文件按以下规则开始解析模板语法：

- 默认 aardio 源码文件开始部分直到  `?>` 标记被解析为代码，遇到  `?>` 则开始解析模板代码。
- 如果开始于 HTML 标签则开始部分直到  `<?` 标记被解析为模板。

string.loadcode 等函数支持用 aardio 模板语法解析代码并返回输出的字符串。

另外还有一些库函数的字符串参数可选支持 aardio 模板语法，这些函数通常会要求字符串以 `<?` 或 `?>` 开始才会以 aardio 模板语法进行解析（ 可参考 string.loadcode 源码 ），否则将参数作为普通字符串处理。

请参考： [模板语法](../../language-reference/templating/syntax.html)

## `/*DSG{{*/ /*}}*/` 窗体设计器代码块

aardio 窗体设计器生成的代码会置于 `/*DSG{{*/` 到 `/*}}*/` 中间。

例如：

```aardio
import win.ui;
/*DSG{{*/
var winform = win.form(text="aardio form";right=759;bottom=469;)
winform.add(
button={cls="button";text="Button";left=221;top=297;right=340;bottom=329;z=2;};
edit={cls="edit";text="Edit";left=66;top=175;right=314;bottom=203;edge=1;multiline=1;z=1;};
)
/*}}*/

winform.show();
win.loopMessage();
```

在 aardio 开发环境中打开 *.aardio 源文件时，
aardio 会搜寻 `/*DSG{{*/` 到 `/*}}*/` 的创建窗体与控件的代码块，并可以在窗体设计器中呈现并修改生成窗体的 aardio 代码。

 