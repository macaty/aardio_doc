[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 调用 AutoCAD - 对象数组

```aardio aardio
//aardio 调用 AutoCAD - 对象数组
import com.cad
var cad = com.cad();
cad.Visible = true;

var patternName = "ANSI31";//填充图案的名�?var patternType = 0 ;// 填充类型

//在模型空间中添加填充图案对象（Hatch�?var hatchObj = cad.ActiveDocument.ModelSpace.AddHatch(patternType, patternName, true);

//定义圆心和半�?var centerPoint = {0;0;0};
var radius = 1;

//创建圆对�?var circle = cad.ActiveDocument.ModelSpace.AddCircle(centerPoint, radius);

/*
如果数组成员为普�?COM 对象（IDispatch 对象），�?COM 接口中自动转换为 VT_DISPATCH 类型 SafeArray�?细节请参考「aardio 范例 / COM 组件 / 进阶提示 / 类型转换规则�?*/
var outerLoop = { circle };

//添加一个圆作为填充图案的外循环边界
hatchObj.AppendOuterLoop (  outerLoop );

//计算并更新填充图�?hatchObj.Evaluate();

//重新生成视图
cad.ActiveDocument.Regen(cad.acActiveViewport);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/AutoCAD/dispArray.md)

