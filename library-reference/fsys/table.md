# fsys.table 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.table"></a>
### fsys.table 
 支持将 table 对象自动序列化为硬盘文件。  
fsys.table 可作为普通 table 对象使用，  
在线程退出时将会同步存储到文件中。  
  
一般建议直接使用 fsys.config

<a id="fsys.table"></a>
### fsys.table("/config/setting.table",默认配置表 ) 
 创建 table 对象，在线程退出时将会同步存储到文件中。  
可选使用 参数@2 指定一个 table 对象指定字段的默认值。  
  
fsys.table 并非实时读写，而是将配置读入内存。  
所以请不要多对象、多线程、多进程打开同一配置文件。  
这会导致多份不同步的配置写入存储设备时会相互覆盖。  
  
注意此对象不可跨线程传递。  
多线程可通过 winform 成员函数转发到界面线程操作配置文件即可，  
多进程可利用原子窗体、进程互斥体避免冲突

<a id="fsys.table"></a>
### fsys.table() 
 [返回对象:fsysTableObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/table.html#fsysTableObject)

<a id="fsysTableObject"></a>
## fsysTableObject 成员列表


<a id="fsysTableObject.?"></a>
### fsysTableObject.? 
 自配置文件读写属性。  
使用 table.tostring 函数序列化配置表。  
  
仅序列化以字符串、数值为键的元素，  
仅序列化值为字符串、数值、buffer 以及定义了 _serialize 元方法的成员。  
循环引用的值转换为 null，序列化时忽略成员函数。  
  
配置文件在首次使用时自动加载,退出程序时自动保存.

<a id="fsysTableObject.afterLoad"></a>
### fsysTableObject.afterLoad 
 指定一个函数,在下次重新加载配置文件时调用  
此函数默认为空函数,在调用 winform.bindConfig 后会被自动赋值用于写入控件值

<a id="fsysTableObject.assign"></a>
### fsysTableObject.assign() 
 [返回对象:fsysTableObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/table.html#fsysTableObject)

<a id="fsysTableObject.assign"></a>
### fsysTableObject.assign(混入表) 
 

```aardio
fsysTableObject.assign(  
   键名 = 值;  
   键名2 = 值;  
);//该数会自动调用 save 函数保存配置到文件
```



<a id="fsysTableObject.beforeSave"></a>
### fsysTableObject.beforeSave 
 指定一个函数,在保存配置以前自动调用  
此函数默认为空函数,在调用 winform.bindConfig 后会被自动赋值用于读取控件值

<a id="fsysTableObject.load"></a>
### fsysTableObject.load() 
 从文件载入  
加载成功返回对象,加载失败返回null空值  
  
[返回对象:fsysTableObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/table.html#fsysTableObject)

<a id="fsysTableObject.mix"></a>
### fsysTableObject.mix() 
 [返回对象:fsysTableObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/table.html#fsysTableObject)

<a id="fsysTableObject.mix"></a>
### fsysTableObject.mix(混入默认值表) 
 

```aardio
fsysTableObject.mix(  
   键名 = 默认值;  
   键名2 = 默认值;  
);//该函数用于设定默认值,但不会修改已存在的值
```



<a id="fsysTableObject.save"></a>
### fsysTableObject.save() 
 存储到文件  
在线程退出时也会自动调用该函数  
  
[返回对象:fsysTableObject](https://www.aardio.com/zh-cn/doc/library-reference/fsys/table.html#fsysTableObject)
