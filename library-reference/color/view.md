[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# color.view 库模块帮助文�?
## color 成员列表

### color.view

用于显示color.table色表的视图控�?
### color.view()

[返回对象:colorviewObject](#colorviewObject)

### color.view(plusCtrl)

创建色表视图,

参数必须指定一个plus控件

## colorviewObject 成员列表

### colorviewObject.addItem(rgb,name)

添加色卡,rgb为RGB格式颜色数�?name为颜色名,

名称中的英文名或副名称应放在括号�?
### colorviewObject.delItem(index)

删除色卡,参数指定索引

### colorviewObject.getColorTable()

返回色表数据

### colorviewObject.getItemRect()

返回指定项所在区块的::RECT结构�?

参数@1使用数值指定索�?如果索引超出范围返回null,

可选指定参数@2为true返回屏幕坐标

[返回对象:rectObject](../global/_.html#rectObject)

### colorviewObject.loadColorTable

加载色表

### colorviewObject.loadColorTable(clrTable,startIndex,endIndex,rows)

所有参数可�?

参数@1指定色表,不指定则自动创建默认色表,

startIndex,endIndex指定当前页开始、结束索�?

rows指定色卡行数,默认�?2

### colorviewObject.onItemClick()

```aardio aardio
colorviewObject.onItemClick = function(index,rgb,argb,name,ename){
    /*鼠标点击色卡触发此事�?index为为色卡索引,rgb为GDI颜色�?argb为GDI+颜色�?
name为颜色中文名�?ename为英文名�?/
}

```

### colorviewObject.onItemDoubleClick()

```aardio aardio
colorviewObject.onItemDoubleClick = function(index,rgb,argb,name,ename){
    /*鼠标双击击色卡触发此事件
index为色卡索�?rgb为GDI颜色�?argb为GDI+颜色�?
name为颜色中文名�?ename为英文名�?/
}

```

### colorviewObject.onItemHover()

```aardio aardio
colorviewObject.onItemHover = function(index,rgb,argb,name,ename){
    /*鼠标移动到色卡上触发此事�?index为色卡索�?rgb为GDI颜色�?argb为GDI+颜色�?
name为颜色中文名�?ename为英文名�?/
}

```

### colorviewObject.onItemLeave

```aardio aardio
colorviewObject.onItemLeave = function(){
    /*鼠标离开色卡且未移动到其他色卡时触发此事�?/
}

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/color/view.md)

