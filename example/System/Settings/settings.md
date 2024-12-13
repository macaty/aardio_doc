[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 打开设置

```aardio aardio
//打开设置
import process.control;

//打开系统代理设置�?if(_WIN10_LATER) raw.execute("ms-settings:network-proxy");
else raw.execute("control.exe","inetcpl.cpl,,4");

/*
import process.rundll;
process.rundll("sysdm.cpl").EditEnvironmentVariables() //打开环境变量设置
process.rundll().Control_RunDLL("sysdm.cpl") //打开系统属�?process.rundll().Control_RunDLL("inetcpl.cpl",,4) //打开 Internet 属性窗口并切换到『连接』选项�?*/

/*
//打开 Internet 属性窗口并切换到『连接』选项�?process.control("inetcpl.cpl",,4)

//打开卸载程序管理，启动参数可以指定为 process.joinArguments() 函数支持的数组或表�?process.control("/name","Microsoft.ProgramsAndFeatures")

//打开系统用户管理（高级）
process.control("userpasswords2")

//打开 WIN10 设置
process.control("ms-settings:")

//打开 外观 背景 设置
process.control("ms-settings:personalization-background")

//打开系统用户管理
process.control("nusrmgr.cpl")

//打开系统用户管理（高级）
process.control("userpasswords2")

//打开控制面板高级模式
import process;
process.explore("shell:::{ED7BA470-8E54-465E-825C-99712043E01C}")
*/

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Settings/settings.md)

