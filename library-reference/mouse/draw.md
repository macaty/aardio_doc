# mouse.draw 库模块帮助文档

<a id="mouse.draw"></a>
## mouse.draw 成员列表


<a id="mouse.draw.ellipse"></a>
### mouse.draw.ellipse(x,y,a,b,precision) 
 x,y 中心所在的屏幕坐标(像素)  
a,b 长轴和短轴的长度(像素)  
precision   边缘精细度

<a id="mouse.draw.involute"></a>
### mouse.draw.involute(fx,fy) 
 画渐开线  
fx,fy   宽高,参数可以忽略(默认为屏幕范围)

<a id="mouse.draw.involute2"></a>
### mouse.draw.involute2(x,y,R,n) 
 画渐开线2   
x,y   基圆圆心  
R  	基圆半径  
n  	渐开线周波数

<a id="mouse.draw.line"></a>
### mouse.draw.line(x1,y1,x2,y2) 
 画直线  
x1,y1 起始坐标  
x2,y2结束坐标

<a id="mouse.draw.move"></a>
### mouse.draw.move 
 

```aardio
mouse.draw.move = function(x,y){ 
 
	mouse.move(x,y,true)
	sleep(10) 
	
	return true;/*继续画线*/
}
```



<a id="mouse.draw.poly"></a>
### mouse.draw.poly(x,y,r,n) 
 x,y 中心所在的屏幕坐标(像素)  
r   多边形外接圆半径(像素)  
n   多边形的边数

<a id="mouse.draw.rect"></a>
### mouse.draw.rect(x1,y1,x2,y2) 
 画矩形  
x1,y1 起始坐标  
x2,y2结束坐标

<a id="mouse.draw.rectInvolute"></a>
### mouse.draw.rectInvolute(step,n,x1,y1,x2,y2) 
 画方形仿渐开线   
step   步长  
n  		起始正方形边长,指定中间忽略不扫描的正方形边长(默认等于20)  
x1,y1   扫描范围坐标,参数可省略(默认等于 1 X 1)  
x2,y2   扫描范围坐标2,参数可省略(默认等于屏幕大小)

<a id="mouse.draw.rectInvolute2"></a>
### mouse.draw.rectInvolute2(x,y,m,n=5,k=50) 
 x,y   坐标  
m   扫描范围  
n   扫描速度,可省略(默认等于5)  
k   扫描密度,可省略(默认等于50)

<a id="mouse.draw.sin"></a>
### mouse.draw.sin(w,h) 
 画正弦曲线  
w,h 宽,高,可省略(默认取屏幕范围)
