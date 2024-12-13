# builtin.struct 库模块帮助文档

<a id="pointObject"></a>
## pointObject 成员列表

::POINT 结构体对象，包含用于表示坐标的数值字段 x,y

<a id="pointObject.x"></a>
### pointObject.x 
 x坐标

<a id="pointObject.y"></a>
### pointObject.y 
 y坐标

<a id="rectObject"></a>
## rectObject 成员列表

::RECT 结构体对象，包含用于表示区块位置的数值字段 left,top,right,bottom

<a id="rectObject.bottom"></a>
### rectObject.bottom 
 下

<a id="rectObject.contains"></a>
### rectObject.contains(x,y) 
 检测指定的 x,y 坐标是否位于矩形区块内

<a id="rectObject.copy"></a>
### rectObject.copy 
 复制并返回新的矩形区块结构体

<a id="rectObject.copy"></a>
### rectObject.copy() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.copy"></a>
### rectObject.copy(width,height) 
 可选在参数中指定新的宽度、高度  
所有参数都可以省略

<a id="rectObject.expand"></a>
### rectObject.expand 
 扩展或缩小右下角坐标

<a id="rectObject.expand"></a>
### rectObject.expand() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.expand"></a>
### rectObject.expand(dx,dy) 
 dx指定正数扩展右边,负数缩小右边,  
dy指定正数扩展底边,负数缩小底边  
左上角不变,  
返回自身

<a id="rectObject.float"></a>
### rectObject.float() 
 无参数时转换为 ::RECTF 结构体并返回该结构体  
如果参数中指定::RECTF结构体,则使用参数更新位区块自身,  
指定参数则此函数无返回值  
  
[返回对象:rectfObject](https://www.aardio.com/zh-cn/doc/library-reference/gdip/core.html#rectfObject)

<a id="rectObject.height"></a>
### rectObject.height() 
 高度

<a id="rectObject.inflate"></a>
### rectObject.inflate 
 扩大区块并返回矩形区块自身

<a id="rectObject.inflate"></a>
### rectObject.inflate() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.inflate"></a>
### rectObject.inflate(左右单位,上下单位) 
 扩大区块并返回矩形区块自身  
忽略参数请传入0,不可省略  
上,下,左,右分别扩大指定的单位  
负数为缩小

<a id="rectObject.intersect"></a>
### rectObject.intersect 
 检测与参数指定的矩形区块相交

<a id="rectObject.intersect"></a>
### rectObject.intersect(rc) 
 检测与参数指定的矩形区块相交  
成功修改当前区块并返回自身,失败返回空

<a id="rectObject.intersectsWith"></a>
### rectObject.intersectsWith 
 检测两个矩形区块是否碰撞相交

<a id="rectObject.intersectsWith"></a>
### rectObject.intersectsWith(rc) 
 检测两个矩形区块是否碰撞相交

<a id="rectObject.left"></a>
### rectObject.left 
 左

<a id="rectObject.ltrb"></a>
### rectObject.ltrb 
 用于将 x,y,width,height 转换为 left,top,right.bottom 并返回

<a id="rectObject.ltrb"></a>
### rectObject.ltrb() 
 返回结构体的 left,top,right,bottom 等4个值

<a id="rectObject.ltrb"></a>
### rectObject.ltrb(x,y,width,height) 
 使用传入参数修改左、上坐标,以及宽度、高度,  
返回结构体的left,top,right,bottom等4个值

<a id="rectObject.move"></a>
### rectObject.move 
 移动左上角坐标

<a id="rectObject.move"></a>
### rectObject.move() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.move"></a>
### rectObject.move(dx,dy) 
 使用参数指定的x,y坐标偏移量移动左上角坐标,  
正数向右下移动,负数向左上移动,  
右下角位置不变  
返回自身  
如果需要移动坐标且大小不变请改用offset函数  
移动到指定坐标而不是偏移量请改用setPos函数

<a id="rectObject.offset"></a>
### rectObject.offset 
 移动矩形框并返回自身

<a id="rectObject.offset"></a>
### rectObject.offset() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.offset"></a>
### rectObject.offset(横偏移,纵偏移) 
 移动矩形框并返回自身,矩形大小不变,  
左上移使用负坐标,右下移使用正坐标  
忽略参数请传入0,不可省略

<a id="rectObject.right"></a>
### rectObject.right 
 右

<a id="rectObject.setPos"></a>
### rectObject.setPos 
 重新调整坐标与大小,  
返回结构体自身

<a id="rectObject.setPos"></a>
### rectObject.setPos() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="rectObject.setPos"></a>
### rectObject.setPos(x,y,cx,cy) 
 移动到x,y指定的坐标,  
可选用cx,cy重新指定宽度和高度,  
所有参数可选,不指定则保持旧值

<a id="rectObject.top"></a>
### rectObject.top 
 上

<a id="rectObject.width"></a>
### rectObject.width() 
 宽度

<a id="rectObject.xywh"></a>
### rectObject.xywh 
 用于将left,top,right.bottom转换为 x,y,width,height 并返回

<a id="rectObject.xywh"></a>
### rectObject.xywh() 
 返回结构体的左上角坐标x,y 以及宽度width,高度height等4个值

<a id="rectObject.xywh"></a>
### rectObject.xywh(left,top,right,bottom) 
 修改左、上、右、下的值,  
返回结构体的左上角坐标x,y 以及宽度width,高度height等4个值

<a id="sizeObject"></a>
## sizeObject 成员列表

::SIZE 结构体对象，包含用于表示大小的数值字段 cx,cy

<a id="sizeObject.cx"></a>
### sizeObject.cx 
 宽

<a id="sizeObject.cy"></a>
### sizeObject.cy 
 高


### 全局常量

<a id="::OffsetRect(rc,dx,dy)"></a>
### ::OffsetRect(rc,dx,dy) 
 移动矩形框，  
此函数已废弃，请直接调用 rc.offset 函数

<a id="::POINT"></a>
### ::POINT 
 整型坐标结构体  
此结构体通过标准库 builtin.struct 默认加载

<a id="::POINT()"></a>
### ::POINT() 
 [返回对象:pointObject](#pointObject)

<a id="::POINT(x,y)"></a>
### ::POINT(x,y) 
 创建整型坐标结构体  
可选在参数中指定 x,y 坐标初始值

<a id="::RECT"></a>
### ::RECT 
 表示矩形区块的结构体  
此结构体通过标准库 builtin.struct 默认加载

<a id="::RECT()"></a>
### ::RECT() 
 [返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="::RECT(left,top,right,bottom)"></a>
### ::RECT(left,top,right,bottom) 
 创建矩形区块结构体  
可选在参数中指定左,上,右,下初始值

<a id="::SIZE"></a>
### ::SIZE 
 整型尺寸结构体  
此结构体通过标准库 builtin.struct 默认加载

<a id="::SIZE()"></a>
### ::SIZE() 
 [返回对象:sizeObject](#sizeObject)

<a id="::SIZE(cx,cy)"></a>
### ::SIZE(cx,cy) 
 创建整型尺寸结构体  
可选在参数中指定宽高 cx,cy 初始值
