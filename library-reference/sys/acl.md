# sys.acl 库模块帮助文档

<a id="sys.acl"></a>
## sys.acl 成员列表

系统用户访问权限控制接口

<a id="sys.acl.daclGrant"></a>
### sys.acl.daclGrant(sid,objName,objType,trusteeType,premissions) 
 对@objName指定名称的对象获取@sid指定用户的@premissions参数指定的权限,  
@objType可省略，默认值为_SE_FILE_OBJECT,  
其他参数请参考函数源码与MSDN

<a id="sys.acl.daclGrantAdmin"></a>
### sys.acl.daclGrantAdmin(objName,objType,premissions) 
 对@objName指定名称的对象获取管理员用户组的@premissions参数

<a id="sys.acl.daclGrantEveryone"></a>
### sys.acl.daclGrantEveryone(objName,objType,premissions) 
 对@objName指定名称的对象获取Everyone用户的@premissions参数指定的权限

<a id="sys.acl.getUserName"></a>
### sys.acl.getUserName() 
 返回当前系统用户名

<a id="sys.acl.sidAdmin"></a>
### sys.acl.sidAdmin() 
 创建SID，返回管理员用户组SID句柄

<a id="sys.acl.sidCreate"></a>
### sys.acl.sidCreate(identifierAuthority,...) 
 创建SID，返回SID句柄  
参数@1使用数值数组指定SID_IDENTIFIER_AUTHORITY结构体的值,  
后续可使用1到8个参数指定SID子权限

<a id="sys.acl.sidEveryone"></a>
### sys.acl.sidEveryone() 
 创建SID，返回Everyone用户SID句柄

<a id="sys.acl.sidFromString"></a>
### sys.acl.sidFromString(sidStr) 
 参数传入文本格式SID,  
返回SID内存句柄

<a id="sys.acl.sidFromUserName"></a>
### sys.acl.sidFromUserName(userName,systemName) 
 参数@userName传入系统用户名,,省略取当前登录用户名,  
@systemName参数可省略,  
返回SID内存句柄

<a id="sys.acl.sidStringFromUserName"></a>
### sys.acl.sidStringFromUserName(userName,systemName) 
 参数@userName传入系统用户名,省略取当前登录用户名  
@systemName参数可省略,  
返回文本格式SID

<a id="sys.acl.sidStringToUserName"></a>
### sys.acl.sidStringToUserName(sidStr,systemName) 
 参数传入文本格式 SID，@systemName 参数可省略。  
返回账户名，账户所在域名，账户类型（SID_NAME_USE 枚举）

<a id="sys.acl.sidToString"></a>
### sys.acl.sidToString(sid) 
 参数传入SID句柄,  
返回SID文本格式字符串

<a id="sys.acl.sidToUserName"></a>
### sys.acl.sidToUserName(sid,systemName) 
 参数传入SID，@systemName参数可省略。  
返回账户名，账户所在域名，账户类型（SID_NAME_USE 枚举）

<a id="sys.acl.sidWellKnown"></a>
### sys.acl.sidWellKnown(sidType,domainSid) 
 获取通用SID,  
参数@1参考::Advapi32.CreateWellKnownSid函数说明  
参数@2可省略,  
返回buffer对象不需要释放

<a id="sys.acl.takeOwnByAdmin"></a>
### sys.acl.takeOwnByAdmin(objName,objType) 
 对objName指定名称的对象获取管理员用户组的所有者权限,\@nobjType可省略，默认值为_SE_FILE_OBJECT

<a id="sys.acl.takeOwnBySid"></a>
### sys.acl.takeOwnBySid(sid,objName,objType) 
 对@objName指定名称的对象获取sid指定用户的所有者权限,  
sid应当是sid句柄或内存指针,  
@objType可省略，默认值为_SE_FILE_OBJECT

<a id="sys.acl.takeOwnBySidString"></a>
### sys.acl.takeOwnBySidString(sid,objName,objType) 
 对@objName指定名称的对象获取@sid指定用户的所有者权限,  
@si参数指定文本格式SID,注意不是内存指针或句柄,  
@objType可省略，默认值为_SE_FILE_OBJECT

<a id="sys.acl.takeOwnByUserName"></a>
### sys.acl.takeOwnByUserName(userName,objName,objType) 
 对@objName指定名称的对象获取@userName参数指定用户的所有者权限,  
@objType可省略，默认值为_SE_FILE_OBJECT
