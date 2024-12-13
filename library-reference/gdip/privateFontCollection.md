# gdip.privateFontCollection 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.privateFontCollection"></a>
### gdip.privateFontCollection() 
 私有字体集合,调用时不应在参数中指定指针  
较老的系统在私有字体集合释放后,会导致该容器加载并仍在使用的的字体异常  
稳妥的方式是调用 gdip.privateFontCollection.getInstance 函数  
获取私有字体集合的单一实例  
  
[返回对象:gdipprvfontcollObject](#gdipprvfontcollObject)

<a id="gdip.privateFontCollection"></a>
## gdip.privateFontCollection 成员列表

私有字体集合,  
请在 fonts 名字空间下添加库,并调用 fonts.createFamily 函数注册嵌入字体

<a id="gdip.privateFontCollection.createFamily"></a>
### gdip.privateFontCollection.createFamily(字体路径,字体名) 
 创建字体家族,创建失败返回空值  
参数@1可以是路径或资源文件、内存数据  
如果不指定名字,则返回字体列表中的第一个字体家族

<a id="gdip.privateFontCollection.createFont"></a>
### gdip.privateFontCollection.createFont(字体路径,字体名,大小,样式,单位) 
 创建字体  
参数@1可以是路径或资源文件、内存数据  
单位默认为像素

<a id="gdip.privateFontCollection.getInstance"></a>
### gdip.privateFontCollection.getInstance() 
 获取默认的私有字体集合,  
较老的系统在私有字体集合释放后,会导致该容器加载并仍在使用的的字体异常,  
 稳妥的方式是调用此函数获取单一实例的自定义容器  
aardio 会在程序结束前自动释放此容器对象,  
但手动调用此对象的 delete 函数将被忽略,  
  
  
[返回对象:gdipprvfontcollObject](#gdipprvfontcollObject)

<a id="gdipprvfontcollObject"></a>
## gdipprvfontcollObject 成员列表


<a id="gdipprvfontcollObject.add"></a>
### gdipprvfontcollObject.add 
 添加自字义字体

<a id="gdipprvfontcollObject.add"></a>
### gdipprvfontcollObject.add(字体) 
 参数可以是字体文件,资源文件  
或字体文件加载到内存的数据

<a id="gdipprvfontcollObject.count"></a>
### gdipprvfontcollObject.count() 
 返回字体列表中包含的字体家族总数,  
一个字体家族可以用于创建不同大小、不同样式的同名字体

<a id="gdipprvfontcollObject.createFamily"></a>
### gdipprvfontcollObject.createFamily 
 创建字体家族对象

<a id="gdipprvfontcollObject.createFamily"></a>
### gdipprvfontcollObject.createFamily("字体名") 
 参数为字体名  
如果不指定名字,则返回字体列表中的最后一个添加的字体家族

<a id="gdipprvfontcollObject.createFamily"></a>
### gdipprvfontcollObject.createFamily() 
 [返回对象:gdipfamilyObject](#gdipfamilyObject)

<a id="gdipprvfontcollObject.delete"></a>
### gdipprvfontcollObject.delete() 
 删除字体

<a id="gdipprvfontcollObject.getFamilies"></a>
### gdipprvfontcollObject.getFamilies 
 返回字体集合中的字体家族数组,  
一个字体家族可以用于创建不同大小、不同样式的同名字体

<a id="gdipprvfontcollObject.getFamilies"></a>
### gdipprvfontcollObject.getFamilies(sought,clone) 
 返回字体集合中的字体家族数组,所有参数可选,  
参数  @sought 指定期望返回的字体家族数目,  
不指定则自动获取全部字体家族并返回,clone参数指定是否复制字体家族对象,  
如果不复制，在字体列表被删除以后，此函数返回的字体家族也不能再使用

<a id="gdipprvfontcollObject.getLastFamily"></a>
### gdipprvfontcollObject.getLastFamily() 
 [返回对象:gdipfamilyObject](#gdipfamilyObject)

<a id="gdipprvfontcollObject.getLastFamily"></a>
### gdipprvfontcollObject.getLastFamily(clone) 
 返回字体集合中的最后一个添加的字体家族,  
可选参数 @sought 指定期望返回的字体家族数目,  
不指定则自动获取全部字体家族并返回,clone参数指定是否复制字体家族对象,  
如果不复制，在字体列表被删除以后，此函数返回的字体家族也不能再使用
