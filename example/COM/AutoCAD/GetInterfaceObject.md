[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 调用 AutoCAD - 进程内对�?
```aardio aardio
//aardio 调用 AutoCAD - 进程内对�?import console
import com.cad;

var cad = com.cad();
cad.ShowForeground();

/*
上面�?cad 是进程外对象( 也就�?ActiveX EXE)�?但是通过 cad.GetInterfaceObject(progId) 可以创建 AutoCAD 进程内对象，
这就非常有趣了，下面看例子：
*/

//�?AutoCAD 内创�?WSH 对象
var wsh = cad.GetInterfaceObject("WScript.Shell")

//访问 AutoCAD 进程内环境变�?var cadEnv = wsh.Environment("Process")

//修改 AutoCAD 进程内环境变�?cadEnv.setItem("aarEnvName","这是�?aardio 中设置的环境变量 ")

//读取 AutoCAD 进程内环境变�?var env = cadEnv.getItem("aarEnvName")

//AutoLISP 读取第一次设置的环境变量以后似乎会缓存，再次修改环境变量可能无效�?cad.SendCommand(`(getenv "aarEnvName")`);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/AutoCAD/GetInterfaceObject.md)

