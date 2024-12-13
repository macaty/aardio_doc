# process.job.limitKill 库模块帮助文档

<a id="process.job"></a>
## process.job 成员列表


<a id="process.job.limitKill"></a>
### process.job.limitKill 
 使用子进程对象的 assignToJobObject 函数绑定此对象,  
则进程退出时子进程自动终止  
  
[返回对象:processJobLimitKillObject](#processJobLimitKillObject)

创建新的 process.job.limitKill 作业对象

<a id="process.job.limitKill"></a>
### process.job.limitKill() 
 [返回对象:processJobLimitKillObject](#processJobLimitKillObject)

<a id="process.job.limitKill"></a>
### process.job.limitKill(limitFlags) 
 创建新的 process.job.limitKill 作业对象。  
limitFlags 可指定以下值：  
_JOB_OBJECT_LIMIT_SILENT_BREAKAWAY_OK 下级进程不自动继承作业对象  
_JOB_OBJECT_LIMIT_BREAKAWAY_O 允许创建下级进程时指定 CREATE_BREAKAWAY_FROM_JOB

<a id="processJobLimitKillObject"></a>
## processJobLimitKillObject 成员列表


<a id="processJobLimitKillObject.assignProcess"></a>
### processJobLimitKillObject.assignProcess(processId) 
 将参数指定的进程绑定当前作业对象,  
参数可以指定使用数值指定进程ID，或使用指针指定进程句柄,  
也可以传入 process 或 process.popen 对象

<a id="processJobLimitKillObject.isIn"></a>
### processJobLimitKillObject.isIn(processId) 
 判断参数指定的进程是否属于当前作业对象,  
参数可以指定使用数值指定进程ID，或使用指针指定进程句柄,  
也可以传入 process 或 process.popen 对象
