[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# sys.runAsTask 库模块帮助文�?
说明

查看计划任务列表�?raw.execute("control","schedtasks");

## sys 成员列表

### sys.runAsTask

用于创建开机启动任务，以管理员权限启动 \- 不会出现警告窗口

建议大家不要滥用此功能，

用户未在设置中主动设置开机启动，请不要自动添加，

滥用自动开机只会招致用户反感，或被安全软件清除

### sys.runAsTask()

[返回对象:SysRunAsTaskObject](#SysRunAsTaskObject)

### sys.runAsTask(taskName,description,author)

创建开机启动任务，

@taskName：计划任务名�?
@description: 计划任务描述

@author: 创建者名称，可选参�?
## SysRunAsTaskObject 成员列表

### SysRunAsTaskObject.delete()

删除计划任务

### SysRunAsTaskObject.get()

返回已注册计划任务�?
返回对象�?Name（名称）,Path（路径） 属性�?
如果未注册返�?null

### SysRunAsTaskObject.register(arguments,path,workDir)

添加计划任务

@arguments：启动参数，该参数必须是字符串�?
@path：启动的应用程序路径,省略则为当前应用程序路径

@workdir：启动程序工作目录，可选参�?
### SysRunAsTaskObject.taskName

任务名�?
调用 register 函数指定有效，默认值为 EXE 文件�?
### SysRunAsTaskObject.trigger.Enabled

可指定一个布尔值以设置是否允许开机启动�?
调用 register 函数指定有效，默认值为 true

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/sys/runAsTask.md)

