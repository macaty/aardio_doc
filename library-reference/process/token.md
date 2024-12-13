# process.token 库模块帮助文档

<a id="process"></a>
## process 成员列表


<a id="process.token"></a>
### process.token() 
 [返回对象:processTokenObject](#processTokenObject)

<a id="process.token"></a>
### process.token(process,access) 
 打开进程令牌,  
@process 参数指定 process 进程对象、句柄、或已执行文件名，省略时取当前进程句柄,  
access指定访问权限,省略时默认值为 _TOKEN_QUERY  
返回对象在回收时默认自动调用close函数

<a id="process.token"></a>
### process.token({token=tokenHandle}) 
 绑定参数表中 tokenHandle 属性指定的进程令牌句柄,  
可选用 gc 属性指定是否允许对象回收时自动释放 token

<a id="process.token"></a>
## process.token 成员列表


<a id="process.token.sid"></a>
### process.token.sid(process) 
 返回运行进程的用户 SID，返回值为 buffer 类型指针，  
@process 参数指定进程对象、句柄、或已执行文件名，省略时取当前进程句柄

<a id="processTokenObject"></a>
## processTokenObject 成员列表


<a id="processTokenObject.close"></a>
### processTokenObject.close() 
 关闭对象

<a id="processTokenObject.duplicate"></a>
### processTokenObject.duplicate(level,tokenType,access,tokenAttributes) 
 复制 token 并返回 token 句柄，  
打开进程时请指定 4/*_TOKEN_IMPERSONATE*/|2/*_TOKEN_DUPLICATE*/ 权限，  
所有参数可选，用法请参考源码

<a id="processTokenObject.elevation"></a>
### processTokenObject.elevation() 
 当前进程是否使用管理员权限启动

<a id="processTokenObject.info"></a>
### processTokenObject.info(infClass,info) 
 获取令牌信息  
@infClass参数使用枚举数值标明要获取的类型,  
@info参数为要获取的结构体,  
成功返回info参数

<a id="processTokenObject.sid"></a>
### processTokenObject.sid() 
 返回进程的用户 SID，返回值为 buffer 类型指针，  
标准库 sys.acl 提供操作转换sid的函数，  
例如可用 sys.acl.sidToUserName 将 SID 转换为用户名

<a id="processTokenObject.user"></a>
### processTokenObject.user() 
 获取进程令牌的用户信息,  
返回TokenUser结构体，返回值不需要手动释放


### 自动完成常量
_TOKEN_ADJUST_DEFAULT=0x80  
_TOKEN_ADJUST_GROUPS=0x40  
_TOKEN_ADJUST_PRIVILEGES=0x20  
_TOKEN_ADJUST_SESSIONID=0x100  
_TOKEN_ALL_ACCESS=0xF00FF  
_TOKEN_ASSIGN_PRIMARY=1  
_TOKEN_DUPLICATE=2  
_TOKEN_EXECUTE=0x20000  
_TOKEN_IMPERSONATE=4  
_TOKEN_QUERY=8  
_TOKEN_QUERY_SOURCE=0x10  
_TOKEN_READ=0x20008  
_TOKEN_SOURCE_LENGTH=8  
_TOKEN_WRITE=0x200E0  
