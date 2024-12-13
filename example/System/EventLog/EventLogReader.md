[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 查询自定义日�?
```aardio aardio
//查询自定义日�?//相关范例: ~\codes\范例程序\9) 网络应用\0) 网络管理\6) wlanEnumInterfaces.aardio

import console.int;
import System.Diagnostics.Eventing;

//查询条件
var query = System.Diagnostics.Eventing.Reader.EventLogQuery("Microsoft-Windows-NetworkProfile/Operational",1)
query.ReverseDirection = true;//设置查询方向为从最新到最�?
//读日志对�?var logReader = System.Diagnostics.Eventing.Reader.EventLogReader(query);

//遍历事件记录
while( var eventInstance = logReader.ReadEvent() ) {

    //联网事件
    if(eventInstance.Id==10000
        || eventInstance.Id==10001){

        console.log( eventInstance.TimeCreated ,eventInstance.Id  )
        console.log( eventInstance.FormatDescription() )
        console.more(1)
    }
}

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/EventLog/EventLogReader.md)

