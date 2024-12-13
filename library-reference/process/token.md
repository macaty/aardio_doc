[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.token 库模块帮助文�?
## process 成员列表

### process.token()

[返回对象:processTokenObject](#processTokenObject)

### process.token(process,access)

打开进程令牌,

@process 参数指定 process 进程对象、句柄、或已执行文件名，省略时取当前进程句�?

access指定访问权限,省略时默认值为 \_TOKEN\_QUERY

返回对象在回收时默认自动调用close函数

### process.token({token=tokenHandle})

绑定参数表中 tokenHandle 属性指定的进程令牌句柄,

可选用 gc 属性指定是否允许对象回收时自动释放 token

## process.token 成员列表

### process.token.sid(process)

返回运行进程的用�?SID，返回值为 buffer 类型指针�?
@process 参数指定进程对象、句柄、或已执行文件名，省略时取当前进程句�?
## processTokenObject 成员列表

### processTokenObject.close()

关闭对象

### processTokenObject.duplicate(level,tokenType,access,tokenAttributes)

复制 token 并返�?token 句柄�?
打开进程时请指定 4/\*\_TOKEN\_IMPERSONATE\*/\|2/\*\_TOKEN\_DUPLICATE\*/ 权限�?
所有参数可选，用法请参考源�?
### processTokenObject.elevation()

当前进程是否使用管理员权限启�?
### processTokenObject.info(infClass,info)

获取令牌信息

@infClass参数使用枚举数值标明要获取的类�?

@info参数为要获取的结构体,

成功返回info参数

### processTokenObject.sid()

返回进程的用�?SID，返回值为 buffer 类型指针�?
标准�?sys.acl 提供操作转换sid的函数，

例如可用 sys.acl.sidToUserName �?SID 转换为用户名

### processTokenObject.user()

获取进程令牌的用户信�?

返回TokenUser结构体，返回值不需要手动释�?
### 自动完成常量

\_TOKEN\_ADJUST\_DEFAULT=0x80

\_TOKEN\_ADJUST\_GROUPS=0x40

\_TOKEN\_ADJUST\_PRIVILEGES=0x20

\_TOKEN\_ADJUST\_SESSIONID=0x100

\_TOKEN\_ALL\_ACCESS=0xF00FF

\_TOKEN\_ASSIGN\_PRIMARY=1

\_TOKEN\_DUPLICATE=2

\_TOKEN\_EXECUTE=0x20000

\_TOKEN\_IMPERSONATE=4

\_TOKEN\_QUERY=8

\_TOKEN\_QUERY\_SOURCE=0x10

\_TOKEN\_READ=0x20008

\_TOKEN\_SOURCE\_LENGTH=8

\_TOKEN\_WRITE=0x200E0

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/token.md)

