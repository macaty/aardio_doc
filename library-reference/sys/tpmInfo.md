# sys.tpmInfo 库模块帮助文档

<a id="sys.tpmInfo"></a>
## sys.tpmInfo 成员列表

用于获取可信平台模块（Trusted Platform Module）支持信息

<a id="sys.tpmInfo.get"></a>
### sys.tpmInfo.get() 
 返回 TPM 信息,  
不支持 TPM 返回 null,  
  
[返回对象:sysTpmInfoObject](#sysTpmInfoObject)

<a id="sysTpmInfoObject"></a>
## sysTpmInfoObject 成员列表


<a id="sysTpmInfoObject.activated"></a>
### sysTpmInfoObject.activated 
 是否激活

<a id="sysTpmInfoObject.enabled"></a>
### sysTpmInfoObject.enabled 
 是否启用

<a id="sysTpmInfoObject.version"></a>
### sysTpmInfoObject.version 
 支持版本,  
多个版本以逗号分开,  
如果进程无管理权限仅返回当前版本号
