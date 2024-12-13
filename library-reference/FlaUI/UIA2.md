# FlaUI.UIA2 库模块帮助文档

<a id="FlaUI.UIA2"></a>
## FlaUI.UIA2 成员列表


<a id="FlaUI.UIA2.UIA2Automation"></a>
### FlaUI.UIA2.UIA2Automation 
 UIA2 自动化接口。  
UIA2 老旧卡，建议使用更新更快的 FlaUI.UIA3。  
注意：不要在同一进程中同时导入 FlaUI.UIA2 与 FlaUI.UIA3

<a id="FlaUI.UIA2.UIA2Automation"></a>
### FlaUI.UIA2.UIA2Automation() 
 创建 UIA2Automation 对象  
  
[返回对象:FlaUIA2AutomationObject](#FlaUIA2AutomationObject)

<a id="FlaUIA2AutomationObject"></a>
## FlaUIA2AutomationObject 成员列表


<a id="FlaUIA2AutomationObject.By"></a>
### FlaUIA2AutomationObject.By() 
 [返回对象:FlaUICondition2Object](#FlaUICondition2Object)

<a id="FlaUIA2AutomationObject.By"></a>
### FlaUIA2AutomationObject.By(condition) 
 

```aardio
FlaUIA2AutomationObject.By(  
	ControlType = "Edit";  
	Name = "输入";/*创建节点搜索条件。  
表参数@1 中每个键值对指定一个匹配条件，多个条件为 And 关系。  
返回对象提供 And,Or,Not 函数，  
And,Or 可以此函数创建的其他搜索条件对象作为参数*/  
)
```



<a id="FlaUIA2AutomationObject.ConditionFactory"></a>
### FlaUIA2AutomationObject.ConditionFactory 
 用于创建节点搜索条件

<a id="FlaUIA2AutomationObject.ConnectionTimeout"></a>
### FlaUIA2AutomationObject.ConnectionTimeout 
 连接超时，  
值为 System.TimeSpan 对象。  
默认值为 2 秒

<a id="FlaUIA2AutomationObject.FindWindow"></a>
### FlaUIA2AutomationObject.FindWindow 
 查找窗口对象

<a id="FlaUIA2AutomationObject.FindWindow"></a>
### FlaUIA2AutomationObject.FindWindow() 
 [返回对象:FlaUIElementObject](#FlaUIElementObject)

<a id="FlaUIA2AutomationObject.FindWindow"></a>
### FlaUIA2AutomationObject.FindWindow(进程,窗口类名,标题,超时) 
 所有参数可选（至少指定一个查找条件）。  
参数@1可指定 process 对象、进程ID、EXE文件名、EXE路径。  
窗口类名、标题都支持模式匹配语法。  
超时可选指定一个单位为毫秒的数值

<a id="FlaUIA2AutomationObject.FocusedElement"></a>
### FlaUIA2AutomationObject.FocusedElement() 
 返回输入焦点所在节点

<a id="FlaUIA2AutomationObject.FromHandle"></a>
### FlaUIA2AutomationObject.FromHandle() 
 [返回对象:FlaUIElementObject](#FlaUIElementObject)

<a id="FlaUIA2AutomationObject.FromHwnd"></a>
### FlaUIA2AutomationObject.FromHwnd() 
 自参数@1指定的窗口句柄获取节点  
  
[返回对象:FlaUIElementObject](#FlaUIElementObject)

<a id="FlaUIA2AutomationObject.FromPoint"></a>
### FlaUIA2AutomationObject.FromPoint() 
 自参数@1指定的坐标获取节点。  
参数@1 应为 System.Drawing.Point 类型

[返回对象:FlaUIElementObject](#FlaUIElementObject)

<a id="FlaUIA2AutomationObject.GetDesktop"></a>
### FlaUIA2AutomationObject.GetDesktop() 
 返回桌面窗口

<a id="FlaUIA2AutomationObject.TransactionTimeout"></a>
### FlaUIA2AutomationObject.TransactionTimeout 
 处理超时，  
值为 System.TimeSpan 对象。  
默认值为 2 秒

<a id="FlaUICondition2Object"></a>
## FlaUICondition2Object 成员列表


<a id="FlaUICondition2Object.And"></a>
### FlaUICondition2Object.And() 
 逻辑与，参数 @1 可指定 By 函数返回的其他搜索条件对象

<a id="FlaUICondition2Object.Not"></a>
### FlaUICondition2Object.Not() 
 逻辑取反

<a id="FlaUICondition2Object.Or"></a>
### FlaUICondition2Object.Or() 
 逻辑或，参数 @1 可指定 By 函数返回的其他搜索条件对象
