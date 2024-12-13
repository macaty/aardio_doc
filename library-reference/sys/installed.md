# sys.installed 库模块帮助文档

<a id="sys.installed"></a>
## sys.installed 成员列表

用于检测指定的程序是否安装  
如果需要获取更多信息,请参考源码自注册表读取,  
MSI 安装程序可用 COM 对象 WindowsInstaller.Installer 读取更多信息

<a id="sys.installed.find"></a>
### sys.installed.find() 
 检测是否已安装指定的程序,  
参数指定要在显示名称中搜索的字符串,支持模式匹配  
成功返回包含 DisplayName、Version、DisplayVersion 字段的表,  
如果存在指示安装目标位置的字段 InstallLocation 则包含该字段,  
可能包含 InstallDate 字段用于指示安装日期,这是8个字符表示的日期,  
极个别的安装程序缺少 InstallDate 字段,  
未安装该程序则返回 null

<a id="sys.installed.programs"></a>
### sys.installed.programs() 
 返回所有已安装的程序,  
返回值为表,键为已安装程序的ID,  
值为安装信息,包含 DisplayName 与 Version 字段,  
DisplayName 为显示名称,Version 字段的版本数值可作为 fsys.version 的参数解析为版本号  
另安装信息包含2个可选字段：DisplayVersion,InstallDate
