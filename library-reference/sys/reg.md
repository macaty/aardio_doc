# sys.reg 库模块帮助文档

<a id="sys.reg"></a>
## sys.reg 成员列表

简单写注册表  
如果需要更多功能,请改用 win.reg

<a id="sys.reg.setValue"></a>
### sys.reg.setValue 
 写注册表

<a id="sys.reg.setValue"></a>
### sys.reg.setValue(name,value,path,root) 
 写注册表。  
@name 使用字符串指定值名称（null 或 空串表示默认值），  
@value 可指定数值、字符串、buffer、null  
数值为存为 _REG_DWORD 类型,  
字符串值存为 _REG_SZ 类型,  
buffer 值存为 _REG_BINARY 类型。,  
null 值表示删除。  
  
参数 @path 使用字符串指定注册表路径,  
参数 @root 指定注册表根键,省略则默认为 _HKEY_CURRENT_USER


### 全局常量

<a id="::Advapi32"></a>
### ::Advapi32 
 Advapi32.dll 模块  
以下标准库已加载该模块:  
crypt,process,service,sys,sys.reg,win.reg  
  
[返回对象:dllModuleObject](https://www.aardio.com/zh-cn/doc/library-reference/raw/_.html#dllModuleObject)
