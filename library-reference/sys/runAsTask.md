# sys.runAsTask 库模块帮助文档


<details>  <summary>说明</summary>  <p>
查看计划任务列表： raw.execute("control","schedtasks");
</p></details>


<a id="sys"></a>
## sys 成员列表


<a id="sys.runAsTask"></a>
### sys.runAsTask 
 用于创建开机启动任务，以管理员权限启动 - 不会出现警告窗口  
  
建议大家不要滥用此功能，  
用户未在设置中主动设置开机启动，请不要自动添加，  
滥用自动开机只会招致用户反感，或被安全软件清除

<a id="sys.runAsTask"></a>
### sys.runAsTask() 
 [返回对象:SysRunAsTaskObject](#SysRunAsTaskObject)

<a id="sys.runAsTask"></a>
### sys.runAsTask(taskName,description,author) 
 创建开机启动任务，  
@taskName：计划任务名称  
@description: 计划任务描述  
@author: 创建者名称，可选参数

<a id="SysRunAsTaskObject"></a>
## SysRunAsTaskObject 成员列表


<a id="SysRunAsTaskObject.delete"></a>
### SysRunAsTaskObject.delete() 
 删除计划任务

<a id="SysRunAsTaskObject.get"></a>
### SysRunAsTaskObject.get() 
 返回已注册计划任务。  
返回对象含 Name（名称）,Path（路径） 属性。  
如果未注册返回 null

<a id="SysRunAsTaskObject.register"></a>
### SysRunAsTaskObject.register(arguments,path,workDir) 
 添加计划任务  
@arguments：启动参数，该参数必须是字符串。  
@path：启动的应用程序路径,省略则为当前应用程序路径  
@workdir：启动程序工作目录，可选参数

<a id="SysRunAsTaskObject.taskName"></a>
### SysRunAsTaskObject.taskName 
 任务名。  
调用 register 函数指定有效，默认值为 EXE 文件名

<a id="SysRunAsTaskObject.trigger.Enabled"></a>
### SysRunAsTaskObject.trigger.Enabled 
 可指定一个布尔值以设置是否允许开机启动。  
调用 register 函数指定有效，默认值为 true
