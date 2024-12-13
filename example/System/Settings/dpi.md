[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 缩放 / 分辨�?
```aardio aardio
//缩放 / 分辨�?import sys.dpi;
import sys.monitor;
import gdi;

//获取系统默认缩放（表示百分比的小数）
var dpiScale = gdi.getDpiScale();

//切换系统缩放，参数为表地百分比的整数，参数为 false 恢复默认�?sys.dpi.scaling(dpiScale!=1.25 ? 125);

//修改显示器分辨率
sys.monitor.changeMode(pelsWidth=1920,pelsHeight=1080);

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Settings/dpi.md)

