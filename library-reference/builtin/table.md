# builtin.table 库模块帮助文档

<a id="table"></a>
## table 成员列表


<a id="table.array"></a>
### table.array 
 创建数组，参数可以为空,  
数组元表中添加_type="array"，,  
例如table.isArray,web.json.stringify等函数  
会将此类数组对象视为数组而不是普通的表对象。  
  
数组类型声明仅在当前线程内有效。

<a id="table.array"></a>
### table.array( ,取值函数或类,任意个调用参数) 
 如果参数@1为空,且参数@2是函数或类,  
这时候会循环调用参数@2直到函数返回null值,  
每次取首个返回值放入数组,并返回该数组  
  
参数@2不可使用无状态的迭代器,  
也不支持迭代器的 owner 参数与控制变量参数,

<a id="table.array"></a>
### table.array(任意个数组长度,取值函数或类,任意个调用参数) 
 可使用不定个数长度参数指定多维数组长度,  
最后一个参数可以是创建默认值的函数或类,并在后面指定调用参数

<a id="table.array"></a>
### table.array(任意个数组长度,默认值) 
 可使用不定个数长度参数指定多维数组长度, 例：  
 table.array(3,5,{} );   
如果默认值是table对象使用浅拷贝复制,不复制嵌套包含的表  
默认值嵌套包含子表时应使用类对象作为参数

<a id="table.array"></a>
### table.array(取值函数或类,任意个调用参数) 
 如果参数@1是函数或类,  
这时候会循环调用参数@1直到函数返回null值,  
每次调用的所有返回值放到一个数组中,  
返回包含这些数组的数组,  
如果只想返回包含首个返回值的一维数组,  
请添加一个 null 参数,将参数@1移动到参数@2位置,  
  
参数@1不可使用无状态的迭代器,  
也不支持迭代器的 owner 参数与控制变量参数,

<a id="table.array"></a>
### table.array(源数组,最小长度) 
 如果参数 @1 为表，则复制（浅拷贝）并返回新表。  
新表声明为数组类型，如果指定最小长度则声明最小长度。  
最小长度为 -1 时则自动获取最大数值索引作为最小长度。  
返回数组传入 web.json 等支持定长数组的库函数时，允许在最小长度内包含 null 值。  
注意数组类型声明与最小长度仅在当前线程生效。  
包含 null 的数组是相当罕见并且通常是不必要的。

<a id="table.assign"></a>
### table.assign 
 覆盖式混入表,  
支持覆盖已存在的值,不支持递归混入成员表,  
此函数不复制元表。  
  
table.mix 函数混入表但不覆盖已存在的值  
table.clone函数递归混入成员且复制元表

<a id="table.assign"></a>
### table.assign(对象,任意多个混入对象) 
 参数@1为空则创建新表,  
使用后面的对象混入前面的对象(浅拷贝),并返回该对象  
该函数仅修改第一个参数(混入目标) ,覆盖已存在的键值  
此函数不会覆盖已存在的只读成员  
  
除参数@1，其他任何参数为 null 则停止合并返回结果

<a id="table.assignDeep"></a>
### table.assignDeep 
 递归式混入表、支持混入成员表,  
此函数不复制元表。

<a id="table.assignDeep"></a>
### table.assignDeep(对象,任意多个混入对象) 
 参数@1为空则创建新表,  
使用后面的对象混入前面的对象,并返回该对象  
对表成员支持递归混入,覆盖已存在的键值,  
如果在子级成员遇到表对象,则继续使用table.mixr混入而不是替换  
使用深拷贝,请避免复制递归引用自身的对象

<a id="table.cache"></a>
### table.cache() 
 创建并返回弱引用缓存表,  
弱引用指的是加入表中的键或值不会增加引用计数,  
不会阻止对象被回收,  
返回的弱引用表适合用于缓存对象

<a id="table.cache"></a>
### table.cache(getter) 
 创建并返回弱引用缓存表,  
可选用参数 @getter 指定读取值函数,  
该函数的参数为当前读取的键,函数应返回对应的值,  
在返回读取值以前,该值会被临时存入缓存表

<a id="table.cache"></a>
### table.cache(kv,getter) 
 创建并返回弱引用缓存表,  
可选用参数 @kv 指定弱引用类型,  
参数@1为字符串 "k" 时仅弱引用键,为 "v" 仅弱引用值,  
不指定刚默认为 "kv", 指弱引用键与值。  
可选用参数 @getter 指定读取值函数,  
该函数的参数为当前读取的键,函数应返回对应的值,  
在返回读取值以前,该值会被临时存入缓存表

<a id="table.clear"></a>
### table.clear() 
 清空参数 @1 指定的表对象内所有键值

<a id="table.create"></a>
### table.create(原型对象,任意多个混入对象) 
 创建表对象,  
如果指定了原型表,则返回对象使用_get元方法指向该原型表,  
返回表对象可以共享原型表中的成员,但不会复制并存储原型表的成员  
  
如果指定了混入对象,则会将混入对象的成员实际复制到返回的表对象内,  
混入规则与 table.assign 一致,按参数顺序从前向后混入,  
忽略已存在的只读成员

<a id="table.define"></a>
### table.define(表对象) 
 清空预定义键名

<a id="table.define"></a>
### table.define(表对象,...) 
 预定义一个或多个键名  
即使对应键的值为 null,仍然在 eachName 迭代器中显示出来  
注意该迭代器的预定排序对null值无效,  
此函数在对象的元表的 _define 元属性添加键名，  
如果 _define 为数组或 null 则可重复调用此函数。  
如果 _define 已经定义为函数对象则会失败  
 table.eachName,webs.json 等自动支持 _define 元属性

<a id="table.eachArgs"></a>
### table.eachArgs(args) 
 迭代器,  
从索引1到最大索引迭代所有元素值,包含中间的null值

<a id="table.eachIndex"></a>
### table.eachIndex(数组) 
 

```aardio
for i,v in table.eachIndex(/*指定数组对象  
按数组索引大小顺序遍历数组  
支持使用表对象的 length 属性,_length 元方法确定数组的长度,  
支持表对象使用 _startIndex 元属性自定义下标  
如果是普通的纯数组不需要用到这些功能,  
改用计数 for 循环会更快*/){
	
}
```



<a id="table.eachName"></a>
### table.eachName(表对象,排序函数,预定定前排键名) 
 

```aardio
for k,v in table.eachName(/*使用表中的键排序并遍历所有键值对  
参数: @1表对象, @2排序函数, @3排序表  
调用table.keys获取排序后的键名,支持_keys,_defined元方法  
所有参数用法与table.keys相同*/){
	
}
```



<a id="table.eachValue"></a>
### table.eachValue(表对象,排序值函数) 
 

```aardio
for k,v in table.eachValue(/*使用表中的值排序并遍历所有键值对,  
默认值最小的排在前面,可选在后面指定排序函数，  
排序函数的v,v2参数为正在比较的成员值,owner参数为表自身,  
如果要v排在前面返回true,请用<或>比较,不要用>=或<=  
省略排序值的函数则值小的排在前面*/,lambda(a,b) a > b ){  
	  
}
```



<a id="table.every"></a>
### table.every(表) 
 

```aardio
table.every(/*调用后面的回调函数计算表的每个值是否符合条件*/,function(v,k){  
	  
})
```



<a id="table.filter"></a>
### table.filter(数组) 
 

```aardio
table.filter(/*调用后面的回调函数筛选并返回新数组  
回调函数返回真值时添加该值到新数组中*/,function(v,index){  
	  
})
```



<a id="table.find"></a>
### table.find(表,回调函数) 
 遍历表中所有的值,  
并调用参数@2指定的回调函数，直到该函数返回true时返回匹配的键,值  
回调函数参数为（当前值,当前键,表对象）

<a id="table.find"></a>
### table.find(表,查找值) 
 使用恒等操作符查找表中是否存在某个值并返回对应的键,  
无任何匹配值时返回null

<a id="table.findAll"></a>
### table.findAll(表,回调函数) 
 遍历表中所有的非函数值，  
并调用参数@2指定的回调函数，该函数返回true时对应的键添加到返回值中,  
回调函数参数为（当前值,当前键,表对象）  
返回值为所有匹配键组成的数组,无任何匹配值返回空数组

<a id="table.findAll"></a>
### table.findAll(表,查找值) 
 使用恒等操作符查找表中是否存在某个值并返回对应的键数组  
找不到返回空数组,可使用#操作符检测长度

<a id="table.flat"></a>
### table.flat(array,depth) 
 展开@array 参数指定的数组中嵌套的数组并返回新数组,  
此函数不会修改传入参数而是返回新数组,  
可选用 @depth 参数指定要允许展开的嵌套深度,默认值为1

<a id="table.gc"></a>
### table.gc 
 添加对象在销毁前执行的析构函数  
按调用 table.gc 顺序的逆序析构对象,  
最后调用 table.gc 标记的对象会最先执行析构函数

<a id="table.gc"></a>
### table.gc(table对象,"析构函数名") 
 指定析构函数名,返回参数@1  
函数名可以是之后创建的成员函数,  
析构函数的 owner 参数为这里指定的 table 对象,  
如果指定的成员函数在析构时为逻辑false或null值,则忽略析构.  
注意析构函数不应抛出异常

<a id="table.gc"></a>
### table.gc(table对象,析构函数) 
 指定析构函数,返回参数@1  
注意析构函数不应抛出异常,  
析构函数的 owner 参数为这里指定的 table 对象

<a id="table.gcOnly"></a>
### table.gcOnly 
 创建一个被保护的对象析构函数,  
此析构函数只会在对象被自动回收时自动触发,  
主动调用此析构函数将被忽略

<a id="table.gcOnly"></a>
### table.gcOnly(dtor) 
 

```aardio
dtor 参数指定使用 table.gc 标记的析构对象的析构函数,  
此函数将返回一个新的用于覆盖原析构函数的函数,  
应将返回的析构函数重新赋值为对象的同名析构函数
```



<a id="table.getAttr"></a>
### table.getAttr 
 调用成员（属性）操作符获取对象的键值。

<a id="table.getAttr"></a>
### table.getAttr(object,member) 
 如果对象实际包含 @member 参数指定键的值则直接返回。  
否则调用 _get 元方法获取指定键的值，元方法第 3 个参数（@ownnerCall）设为 false。   
使用索引下标 [] 获取键值触发 _get 元方法时 @ownnerCall 参数为 null 。

<a id="table.getByNamespace"></a>
### table.getByNamespace("表内名字空间路径.名字[2]",表对象) 
 返回两个值:名字路径指向对象,该对象所在的表.  
参数一为表内名字空间路径,参数二可选指定查找路径的表对象,  
默认在global全局对象内查找路径  
  
要注意此函数会触发表的元方法，  
而 namespace 语句以及 table.namespace 函数不会触发元方法

<a id="table.getCall"></a>
### table.getCall 
 以 ownerCall 方式获取函数对象。  
ownerCall 指形如 object.method() 格式的函数调用语句。  
函数内的 owner 参数设为成员操作符前面的 object 对象。  
如果对象使用 _get 元方法返回函数，  
则 _get 元方法的 ownerCall 参数为 true 。

<a id="table.getCall"></a>
### table.getCall(object,"funcName") 
 如果对象实际包含 "funcName" 指定的成员则直接返回。  
否则模拟 object.funcName() 格式触发 _get 元方法，获取函数对象（但不会调用该函数）。  
调用 _get 元方法时 ownerCall 参数为 true。  
  
适用于对 object.funcName() ， object["funcName"] 区分处理的对象，  
例如 .NET 对象。

<a id="table.indexOf"></a>
### table.indexOf(表,查找值,开始索引) 
 在数组中自前向后查找参数@2指定的值并返回对应的数组索引,,  
开始索引省略时默认值为1，可用负数表示自尾部开始的倒计数索引值,  
无任何匹配值时返回null，有匹配值时返回大于或等于1的索引值

<a id="table.invert"></a>
### table.invert() 
 翻转参数 @1 指定表对象的键值对，  
使值变为键，键变为值。

<a id="table.isArray"></a>
### table.isArray() 
 此函数调用 table.type 函数检测表的类型是否为数组。  
如果表的类型为 "array" 则返回 true ，否则返回 false 。  
  
表的 _type 元属性为 "array" 则直接返回 true。  
其他检测规则请参考 table.type 函数说明。   
  
使用 table.array 函数可以创建一个符合此检测条件的数组

<a id="table.keys"></a>
### table.keys(表对象,排序函数,优先前排键名) 
 获取表中的所有字符串类型的键名,不包含_struct  
  
如果元表中定义了_keys元方法,则调用该方法获取全部自定义键名取代表本身的键名列表  
_keys元方法可以是一个键名数组，或者是返回键名数组的函数,  
  
如果元表中定义了_defined元方法,则使用该方法获取允许为null的键值,  
_defined可以是一个键名数组，或者是返回键名数组的函数,_defined返回的键,  
名数组不会覆盖表本身的键名数组或者_keys元方法定义的数组,仅起到键名占位的作用,  
  
可选指定键名排序函数,如果不指定则使用默认字典序排序,  
可选使用参数@3预定优先排序在最前面的键名数组

<a id="table.lastIndexOf"></a>
### table.lastIndexOf(表,查找值,开始索引) 
 在数组中自后向前查找参数@2指定的值并返回对应的数组索引,  
开始索引省略时默认值为1，可用负数表示自尾部开始的倒计数索引值,  
无任何匹配值时返回null，有匹配值时返回大于或等于1的索引值

<a id="table.len"></a>
### table.len(数组) 
 获取数组长度  
在数组本身的长度,数组的length属性,以及数组的元表length属性中取最大值返回  
web.json调用此函数以支持定长数组

<a id="table.map"></a>
### table.map(tab,function) 
 

```aardio
table.map(/*应用后面的回调函数计算每个表成员的新值并返回新表,  
此函数不会修改参数中传入的表而是返回新表,  
回调函数的参数v为值,k为键,result为返回的表  
回调函数如果不返回值或返回null时忽略不操作  
因此可选通过result修改键值而不是返回新值*/,function(v,k,result){  
	  
})
```



<a id="table.map"></a>
### table.map(tab,lambda) 
 

```aardio
table.map(/*应用后面的 lambda 函数计算每个表成员的新值并返回新表,  
此函数不会修改参数中传入的表而是返回新表,  
lambda 函数的参数v为值,k为键  
nlambda 函数返回null时忽略不操作*/,lambda(v,k) v[1] )
```



<a id="table.mapDeep"></a>
### table.mapDeep(表) 
 

```aardio
table.mapDeep(/*应用后面的回调函数计算新值并返回新表,  
此函数不会修改参数中传入的表而是返回新表,  
如果遇到成员值是一个表时,递归调用table.mapDeep函数处理成员表,  
回调函数的参数v为值,k为键,result为当前返回的表  
回调函数如果不返回值或返回null时忽略不操作  
因此可选通过result修改键值而不是返回新值*/,function(v,k,result){  
	  
})
```



<a id="table.mix"></a>
### table.mix 
 混入表但不覆盖已存在的值,  
此函数不复制元表

<a id="table.mix"></a>
### table.mix(对象,任意多个混入对象) 
 参数@1为空则创建新表  
使用后面的对象补全前面的对象(浅拷贝),并返回该对象  
该函数仅修改第一个参数(混入目标),不覆盖已存在的键值.  
可用于设置表的默认值  
  
除参数@1，其他任何参数为 null 则停止合并返回结果

<a id="table.namespace"></a>
### table.namespace() 
 创建字符串参数@1指定的全局名字空间,  
查询或创建名字空间不会触发元方法，  
如果名字被非表对象占用导致名称冲突则返回 null，  
成功返回该名字空间  
  
此函数的作用与 namespace 语句相同，但不会改变当前名字空间

<a id="table.parseValue"></a>
### table.parseValue() 
 如果参数不是表则直接返回，  
否则将表（table）转换为纯值表。  
如果对象定义了 _json 元方法，则调用该元方法（返回值 2 为 true 时不采用其结果）。  
  
纯值表只包含纯值类型数据。  
纯值类型指的是字符串、数值、布尔值、buffer、指针、纯值表。  
纯值表必须遵守规则如下：  
1、索引只能为数值或者字符串，移除其他索引。  
2、移除类型为 function,class,fiber,cdata 成员，值为表则必须也是纯值表。  
3、表要么是索引自1开始的有序数组，要么是只包含名值对的对象，只能二选一（数组优先）。  
4、纯值表的所有数据都直接保存在表中，也就是用直接下标可以获取所有值。  
5、纯值表是可保持原值序列化的表，并且兼容 JSON。   
  
web.json.strip 函数的转换结果也属于纯值

<a id="table.removeByValue"></a>
### table.removeByValue 
 在数组中查找指定值并移除指定值,  
此函数无返回值,直接修改参数传入的数组。

<a id="table.removeByValue"></a>
### table.removeByValue(数组,值) 
 在数组中查找指定值,  
并移除第一个找到的非null值,  
如果移除了元素则返回移除元素的索引,  
  
如果参数@2为null，则清除所有null值。  
  
此函数无返回值。

<a id="table.removeByValue"></a>
### table.removeByValue(数组,值,true) 
 在数组中查找指定值并将找到的值全部移除,  
如果参数@2为 null，则使用 table.range 函数取最大索引，  
这会导致最大索引前的所有null值都作为数组元素处理，  
建议查看此函数源码以避免错误使用导致性能降低。  
  
此函数无返回值。

<a id="table.setAttr"></a>
### table.setAttr 
 调用成员（属性）操作符修改对象的键值。

<a id="table.setAttr"></a>
### table.setAttr(object,member) 
 如果对象实际包含 @member 参数指定键的值则直接修改。   
否则调用 _set 元方法修改指定键的值，元方法第 3 个参数（@ownnerAttr）设为 true。   
使用索引下标 [] 修改键值触发 _set 元方法时 ownnerAttr 参数为 false 。

<a id="table.setByNamespace"></a>
### table.setByNamespace("表内名字空间路径.名字[]",新值,表对象) 
 参数一指定表内名字空间路径,如果不存在则则创建此表内名字空间,  
参数二指定需要设置的值,如果不指定则创建空表并赋值,  
参数三可选指定一个表对象,默认为global全局对象  
  
要注意此函数会触发表的元方法，  
而 namespace 语句以及 table.namespace 函数不会触发元方法

<a id="table.shuffle"></a>
### table.shuffle() 
 对参数中指定的数组原地随机打乱排序,  
返回原数组

<a id="table.slice"></a>
### table.slice(数组,开始位置,结束位置) 
 从指定位置截取并返回新数组,  
开始位置可选,默认为1  
结束位置可选,默认为数组长度,返回值包含结束位置元素,  
如果位置参数为负数,则自右侧反向计算

<a id="table.some"></a>
### table.some(表) 
 

```aardio
table.some(/*调用后面的回调函数计算表的任意某个值是否符合条件*/,function(v,k){  
	  
})
```



<a id="table.spliceArgs"></a>
### table.spliceArgs(数组,位置,删除长度,参数表) 
 类似splice函数替换数组片段,  
从索引1到最大索引取参数表所有元素插入数组指定位置,  
返回包含删除元素的数组

<a id="table.spliceArgs"></a>
### table.spliceArgs(数组,位置,删除长度,参数表,开始索引,结束索引) 
 类似splice函数替换数组片段,  
从开始到结束索引取出参数表元素插入数组指定位置,  
返回包含删除元素的数组

<a id="table.type"></a>
### table.type() 
 参数 @1 指定表（table），返回表的实际类型。   
此函数返回 "object" 则表为对象，返回 "array" 则表为数组。  
如果参数不是一个表（table）返回 null。  
  
检测步骤如下：  
如果表的 _type 元属性为 "object" 或 "array" 则返回该值，  
如果表的 _key 或 _defined 元属性非空则返回  "object" 。  
如果表是结构体则返回  "object" 。  
com.SafeArray 创建或相兼容的 COM 数组返回 "array" 。  
如果表的 length 元属性非空则返回 "array" 。  
如果在表的元表中定义了 length 属性且为数值。返回"array"。  
如果使用#操作符取数组长度返回值不是 0, 返回"array"。  
其他表一律返回 "object"  
  
可用 {} 创建空对象，table.array 函数可创建空数组   
  
web.json使用此函数区分数组与对象，解析 JSON 时会自动指定表的 _type 元属性

<a id="table.unpackArgs"></a>
### table.unpackArgs(args) 
 从索引1到最大索引返回所有元素值,包含中间的null值