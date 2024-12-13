# sys.mpPreference 库模块帮助文档


<details>  <summary>打开 Defender 设置</summary>  <p>
raw.execute("windowsdefender://Threat");               # Virus & Threat Protection
raw.execute("windowsdefender://ThreatSettings");       # Virus & Threat Protection Settings
raw.execute("windowsdefender://Account");              # Account Protection
raw.execute("windowsdefender://Network");              # Firewall & network Protection
raw.execute("windowsdefender://Hardware");             # Device Security
raw.execute("windowsdefender://DeviceSecurity");       # Device Security
raw.execute("windowsdefender://Family");               # Family Option
raw.execute("windowsdefender://AppBrowser");           # App & Browser Control
raw.execute("windowsdefender://Settings");             # Manage Notifications
raw.execute("windowsdefender://History");              # Protection History
raw.execute("windowsdefender://RansomwareProtection"); # Ransomware Protection
raw.execute("windowsdefender://ProtectedFolders");     # Ransomware Protection
raw.execute("windowsdefender://SecurityProcessor");    # Security Processor Details
raw.execute("windowsdefender://SecurityProcessorTroubleshooting"); #  Security Processor Troubleshooting
raw.execute("windowsdefender://SmartScreenPua");       # Smart Screen (Reputation Based Protection)
raw.execute("windowsdefender://AccountProtection");    # Account Protection
raw.execute("windowsdefender://ExploitProtection");    # Exploit Protection
raw.execute("windowsdefender://exclusions");           # exclusions
raw.execute("windowsdefender://fullscan");             # Select fullscan
raw.execute("windowsdefender://quickscan");            # Start quickscan 

或：
com.shell.findActivateApp(,"Microsoft.+\!SecHealthUI")
</p></details>


<a id="sys.mpPreference"></a>
## sys.mpPreference 成员列表

Windows Defender 设置，  
注意修改 Defender 设置需要管理权限。  
请参考相关扩展库 process.mpCmdRun

<a id="sys.mpPreference.add"></a>
### sys.mpPreference.add() 
 调用 Add-MpPreference 修改 Windows Defender 设置，  
参数 @1 指定包含配置项名值对的表，配置项名称前不必加短横线。  
可用配置项参考 https://docs.microsoft.com/en-us/powershell/module/defender/add-mppreference

<a id="sys.mpPreference.addExclusionPath"></a>
### sys.mpPreference.addExclusionPath() 
 添加一个路径到例外目录列表

<a id="sys.mpPreference.disableRealtimeMonitoring"></a>
### sys.mpPreference.disableRealtimeMonitoring(true) 
 关闭实时保护。  
需要用 thread.trustedInstaller 扩展库获取权限。  
需要事先关闭 Tamper Protection，  
可用 sys.mpPreference.isTamperProtection 函数检测该设置。  
Tamper Protection 只能手动关闭，  
可调用 raw.execute("windowsdefender://ThreatSettings") 打开设置页

<a id="sys.mpPreference.get"></a>
### sys.mpPreference.get() 
 调用 Get-MpPreferenc 获取 Windows Defender 设置，  
返回包含配置项名值对的表

<a id="sys.mpPreference.getExclusionPaths"></a>
### sys.mpPreference.getExclusionPaths() 
 获取例外目录列表，返回路径数组,  
可选在参数中指定要添加到返回列表中的路径,  
如果参数中传入的目录或该目录的父目录已经在排除列表中，则自动排除

<a id="sys.mpPreference.getThreat"></a>
### sys.mpPreference.getThreat() 
 返回检测到的威胁的历史记录

<a id="sys.mpPreference.getThreatDetection"></a>
### sys.mpPreference.getThreatDetection() 
 返回所有检测到的威胁明细

<a id="sys.mpPreference.isExclusionPath"></a>
### sys.mpPreference.isExclusionPath() 
 参数指定的路径是否属于例外目录

<a id="sys.mpPreference.isRealtimeMonitoring"></a>
### sys.mpPreference.isRealtimeMonitoring() 
 当前是否开启实时保护

<a id="sys.mpPreference.isTamperProtection"></a>
### sys.mpPreference.isTamperProtection() 
 是否关闭 Tamper Protection  
Tamper Protection 只能手动关闭，  
可调用 raw.execute("windowsdefender://ThreatSettings") 打开设置页

<a id="sys.mpPreference.remove"></a>
### sys.mpPreference.remove() 
 调用 Remove-MpPreference 移除 Windows Defender 设置，  
参数 @1 指定包含配置项名值对的表，配置项名称前不必加短横线。  
可用配置项参考 https://docs.microsoft.com/en-us/powershell/module/defender/remove-mppreference

<a id="sys.mpPreference.set"></a>
### sys.mpPreference.set() 
 调用 Set-MpPreferenc 修改 Windows Defender 设置，  
参数 @1 指定包含配置项名值对的表，配置项名称前不必加短横线。  
可用配置项参考 https://docs.microsoft.com/en-us/powershell/module/defender/set-mppreference

<a id="sys.mpPreference.setExclusionPaths"></a>
### sys.mpPreference.setExclusionPaths() 
 修改例外目录列表，参数传入路径数组,  
此函数自动除重
