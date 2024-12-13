# sys.display 库模块帮助文档

<a id="sys.display"></a>
## sys.display 成员列表

显卡函数库。  
相关的库：sys.monitor, sys.display, sys.ddcci

<a id="sys.display.eachMode"></a>
### sys.display.eachMode() 
 [返回对象:DEVMODEDISPLAYDEVICEObject](#DEVMODEDISPLAYDEVICEObject)

<a id="sys.display.eachMode"></a>
### sys.display.eachMode(flags,idx) 
 

```aardio
for( devMode in sys.display.eachMode() ){
	if( devMode.pelsWidth > (devMode.pelsWidth > devMode.pelsHeight ? 640 : 480) ){
		/*列出显卡支持的分辨率*/
	}
}
```



<a id="sys.display.enumAdapters"></a>
### sys.display.enumAdapters(回调函数) 
 

```aardio
sys.display.enumAdapters(  
function(info,description,driverVersion){  
	/*枚举显卡,info为显卡信息,description为显卡名称  
第一个显卡是默认显示  
返回true退出枚举*/  
})
```



<a id="sys.display.getAdapter"></a>
### sys.display.getAdapter() 
 获取显卡信息  
  
[返回对象:D3DADAPTERIDENTIFIER9Object](#D3DADAPTERIDENTIFIER9Object)
