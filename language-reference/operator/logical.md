[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# 逻辑操作�?
逻辑操作符将其操作数视为条件表达�? 可理解为与布尔�?true 比较的等式，请参考： [等式运算符](equality.html) )，首先将操作数求值，并转换为逻辑�? boolean �?)�?, null 转换为false，而所有非零、非 false、非 null 值转换为 true，如果结果为 false 则条件为假，结果�?true 则条件为真�?
> 布尔值（ boolean ）是只有 true, false 两种值的逻辑数据类型。true 表示真，false 表示假。布尔值通常用在条件表达式中。通俗一点说，true 表示是、符合条件，false 表示不是、不符合条件�?
## 一、逻辑操作�?
1. 逻辑�?
   逻辑非运算符首先取得操作数的布尔�? boolean )，然后取反比较。如要操作数�?true 则返�?false,如果操作数为 false 则返�?true.也就是反过来取值的意思�?   运算符说明`!`逻辑非not逻辑�?   �?aardio 中逻辑操作符有 `!` �?`not` 两种，作用相同�?
2. 逻辑�?
   逻辑或要求两个操作数其中之一为真( true ),如果第一个操作数为真则直接返回第一个操作数，否则返回第二个操作数。表达式会直接返回操作数的原值（不是转换为逻辑值的true或false�?   运算符说明\|\|逻辑或`or`逻辑或`:`逻辑或，注意�?`:` 号作为用作表构造器中的键值对分隔符时不表示逻辑或�?   `||` �?`or` 是完全等价的，优先级也相同。�?`:` 的优先级略低�?
   注意在表构造器中， `:` 可以替代 `=` 用作键值对分隔符�?
3. 逻辑�?
   逻辑与要求两个操作数取布尔值后都为true,如果第一个操作数为真则返回第二个操作数，如果第一个操作数为假则返回第一个操作数(注意返回的是操作数原值，而不是转换后的布尔�?�?   运算符说明`&&`逻辑与`and`逻辑与`?`逻辑�?   `&&` �?`and` 是完全等价的，优先级也相同。�?`?` 的优先级略低�?

## 二、惰性求�?
逻辑与、逻辑或运算符支持惰性求值，当取得第一个操作数的值并满足条件时，即不再计算第二个表达式的值�?
示例�?
```aardio aardio
import console;

a = true || console.log("偷懒成功,第一个操作数已经能确定返回值了")
a = false && console.log("偷懒成功,第一个操作数已经能确定返回值了")
a = true && console.log("偷懒失败,第一个操作数不能确定返回�?)

console.pause();

```

## 三、条件取�?
逻辑或、逻辑运算符返回的不是转换后的布尔值，而是操作的原值。利用此特性，可以有条件的取得操作数的值�?
```aardio aardio
import console;

console.log( true ? 123 ) //显示123
console.log( false ? 123 ) //显示false
console.log( 0 : 123 ) //显示123
console.log( 1 : 123 ) //显示1

console.log( false ? 2 : 3 ) //显示3
console.log( true ? 2 : 3 ) //显示2
console.log( true ? false : 3 ) //显示3
console.log( true && false || 3 ) //同上

console.pause();

```

![](../../icon/info.gif) 使用逻辑操作符构�?`a?b:c` 的三元表达式时，如果 a 为真但是 b 为false，返回的仍然�?c 的原值， 这一点与其他编程语言的三元操作符不同，请注意区分�?
## 四、条件赋�?
逻辑或、逻辑与操作符可以用于赋值语句，进行有条件赋值�?
示例�?
```aardio aardio
a = a : 123;//如果a为false、null�?时赋值为123
a := 123; //等价于上面的语句，通常用于常量赋值，以避免重复赋值�?
```

`a := b` 是复合赋值语句，等价�?`a = a : b` ，也就相当于 `a = a or b`�?
示例�?
```aardio aardio
import console;
str = "abcdefg"
str ?= string.left(str,3); //如果str为null，则不赋值，以避免string.left抛出错误
console.log( str )

```

`a ?= b(a)` 等价�?`a = a ? b(a)` ，也就相当于 `a = a and b(a)`。这样就实现了如�?`a` 为真则会调用 `b(a)`�?
对于代码 `string.left(str,3)` ，如�?str �?null 就会出错。使�?`str ?= string.left(str,3)` 就可以实现只�?str 为真�?自然也就不可能是 null 值了 ）才会执行这句代码�?
[Markdown 格式](https://www.aardio.com/zh-cn/doc/language-reference/operator/logical.md)
