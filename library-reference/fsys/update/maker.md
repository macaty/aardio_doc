# fsys.update.maker 库模块帮助文档

<a id="fsys.update"></a>
## fsys.update 成员列表


<a id="fsys.update.maker"></a>
### fsys.update.maker 
 用于生成自动更新文件  
成功返回true,失败返回空值,以及错误信息

<a id="fsys.update.maker"></a>
### fsys.update.maker() 
 更新文件生成工具  
  
[返回对象:fsysUpMakerObject](#fsysUpMakerObject)

<a id="fsysUpMakerObject"></a>
## fsysUpMakerObject 成员列表


<a id="fsysUpMakerObject.appDir"></a>
### fsysUpMakerObject.appDir 
 应用程序源目录

<a id="fsysUpMakerObject.compress"></a>
### fsysUpMakerObject.compress(是否仅添加单个主EXE文件) 
 压缩并生成更新文件  
成功返回true, 失败返回null,错误信息

<a id="fsysUpMakerObject.description"></a>
### fsysUpMakerObject.description 
 更新说明,  
可以不设置

<a id="fsysUpMakerObject.main"></a>
### fsysUpMakerObject.main 
 主输出文件

<a id="fsysUpMakerObject.onCompress"></a>
### fsysUpMakerObject.onCompress 
 

```aardio
fsysUpMakerObject.onCompress = function(size,outSize){
    /*开始处理文件*/
}
```



<a id="fsysUpMakerObject.onFile"></a>
### fsysUpMakerObject.onFile 
 

```aardio
fsysUpMakerObject.onFile = function(path,size){
    /*开始处理文件*/
}
```



<a id="fsysUpMakerObject.outDir"></a>
### fsysUpMakerObject.outDir 
 更新文件输出目录

<a id="fsysUpMakerObject.updater"></a>
### fsysUpMakerObject.updater 
 可选用于指定更新工具相对路径  
不指定则默认指定为main属性

<a id="fsysUpMakerObject.url"></a>
### fsysUpMakerObject.url 
 更新文件目录上传后的url,  
必须指定该参数

<a id="fsysUpMakerObject.version"></a>
### fsysUpMakerObject.version 
 应用程序版本号,  
不指定则自动获取
