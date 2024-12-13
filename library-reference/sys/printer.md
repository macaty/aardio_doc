# sys.printer 库模块帮助文档

<a id="sys"></a>
## sys 成员列表


<a id="sys.printer"></a>
### sys.printer() 
 [返回对象:sysprinterObject](#sysprinterObject)

<a id="sys.printer"></a>
### sys.printer(printerName,printerDefaults) 
 打开打印机设备  
printerName指定打印机名称,省略打开默认打印机  
printerDefaults可省略

<a id="sys.printer"></a>
## sys.printer 成员列表


<a id="sys.printer.default"></a>
### sys.printer.default() 
 返回默认打印机名称

<a id="sys.printer.device"></a>
### sys.printer.device() 
 [返回对象:sysprinterdcObject](#sysprinterdcObject)

<a id="sys.printer.device"></a>
### sys.printer.device(hdc) 
 创建绘图设备对象  
如果不指定hdc,则自动获取默认打印机绘图设备句柄  
如果参数@2为true,则负责释放参数@1指定的hdc

<a id="sys.printer.each"></a>
### sys.printer.each(flags) 
 

```aardio
for printerName,serverName,attributes in sys.printer.each(){
	/*遍历系统打印机:  
printerName为打机机名称,  
serverName为服务名,  
attributes为_PRINTER_ATTRIBUTE_前缀常量*/
}
```



<a id="sys.printer.setDefault"></a>
### sys.printer.setDefault(名称) 
 设置默认打印机

<a id="sysprinterObject"></a>
## sysprinterObject 成员列表


<a id="sysprinterObject.createDevice"></a>
### sysprinterObject.createDevice() 
 创建绘图设备对象,  
可选在参数中使用任意个键值对重新指定DEVMODE部分字段的值  
  
[返回对象:sysprinterdcObject](#sysprinterdcObject)

<a id="sysprinterObject.documentProperties"></a>
### sysprinterObject.documentProperties() 
 获取或修改DEVMODE缓冲区指针  
可选在参数中使用任意个键值对重新指定DEVMODE部分字段的值

<a id="sysprinterObject.endDoc"></a>
### sysprinterObject.endDoc() 
 结束打印一个文档

<a id="sysprinterObject.endPage"></a>
### sysprinterObject.endPage() 
 结束打印一个页面

<a id="sysprinterObject.start"></a>
### sysprinterObject.start(回调函数,文档名,文档类型,输出文件) 
 

```aardio
sysprinterObject.start(  
	function(){  
			  
	}  
);
```



<a id="sysprinterObject.startDoc"></a>
### sysprinterObject.startDoc(docName,dataType,outputFile) 
 开始打印文档,所有参数可选  
参数参考API函数StartPagePrinter的说明

<a id="sysprinterObject.startPage"></a>
### sysprinterObject.startPage() 
 开始打印一个页面

<a id="sysprinterObject.write"></a>
### sysprinterObject.write() 
 写入字符串

<a id="sysprinterObject.writePack"></a>
### sysprinterObject.writePack() 
 写入一个或多个字节码

<a id="sysprinterdcObject"></a>
## sysprinterdcObject 成员列表


<a id="sysprinterdcObject.dpi"></a>
### sysprinterdcObject.dpi() 
 返回DPI

<a id="sysprinterdcObject.endDoc"></a>
### sysprinterdcObject.endDoc() 
 结束打印一个文档

<a id="sysprinterdcObject.endPage"></a>
### sysprinterdcObject.endPage() 
 结束打印一个页面

<a id="sysprinterdcObject.rect"></a>
### sysprinterdcObject.rect() 
 返回一个表示绘图区块的 RECT 结构体  
  
[返回对象:rectObject](https://www.aardio.com/zh-cn/doc/library-reference/global/_.html#rectObject)

<a id="sysprinterdcObject.reset"></a>
### sysprinterdcObject.reset() 
 修改打印机设置  
参数应为 sys.printer.documentProperties 函数返回的 DEVMODE 指针

<a id="sysprinterdcObject.size"></a>
### sysprinterdcObject.size() 
 返回 2 个返回值，分别为绘图区块的宽，高。

<a id="sysprinterdcObject.start"></a>
### sysprinterdcObject.start(回调函数,文档名,文档类型,输出文件,类型) 
 

```aardio
sysprinterdcObject.start(  
	function(hdcPrinter,rc){  
		::Gdi32.TextOut(hdcPrinter,20,20,"测试打印",4);	/*回调参数 hdcPrinter 为绘图设备上下文句柄（hdc）,  
rc 为绘图区块（ ::RECT 结构体）。*/  
	}  
);
```



<a id="sysprinterdcObject.startDoc"></a>
### sysprinterdcObject.startDoc(docName,dataType,output,fwType) 
 开始打印文档,所有参数可选  
参数参考 API 函数 StartPage 的说明

<a id="sysprinterdcObject.startPage"></a>
### sysprinterdcObject.startPage() 
 开始打印一个页面
