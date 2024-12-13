[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 数组

```aardio aardio
//数组
import console.int;

//创建数组，可以用分号（或逗号）分隔数组成员�?var array = {"a";"b";"c";"d";"e";"f"};

//也可以用中括号包含数组索引（也称为“下标”或“键”），数组索引可以省略不写�?var array = {
    [1]="a";
    [2]="b";
    [3]="c";
    [4]="d";
    [5]="e";
    [6]="f";
};

//截取并返回新数组，包含原数组索引 2 到数组索�?5 的所有元素�?var array2 = table.slice(array,2,5);

//可以用负数表示从尾部倒计数位置，-1表示最后一个元�?var array2 = table.slice(array,2,-3);

//展开数组，返回多个�?console.log( table.unpack(array2) )

//返回数组尾部�?3 个元素，返回多个值（ 不是返回数组 �?console.log( table.right(array2,3) )

//在数组中查找�?var idx = table.find(array2,17);
if( idx ){
    console.log("数组 array2 包含值：17 在索引："+idx)
}

//在数组中查找所有符合条件的值，参数 @2 指定判断函数�?var keys = table.findAll(array,function(v){
    return string.indexAny(v,"bcd");
});

console.dumpTable(keys);
/*
更多数组函数请查看《库函数文档�?*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/aardio/Array/array.md)

