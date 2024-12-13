[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - MapWinGIS

```aardio aardio
//COM 接口 - MapWinGIS
import win.ui;
/*DSG{{*/
var winform = win.form(text="MapWinGIS";right=759;bottom=469)
winform.add()
/*}}*/

var mapEmbed = winform.tryCreateEmbed("MAPWINGIS.Map.1")
if(!mapEmbed){
    import inet.installer;
    if( inet.installer("MapWinGIS"
        ,"https://github.com/MapWindow/MapWinGIS/releases/download/v5.2.4/MapWinGIS-only-v5.2.4-Win32-VS2017.exe"
        ,"/VERYSILENT /SUPPRESSMSGBOXES /NORESTART /NOICONS"
    ) ){
        mapEmbed = winform.tryCreateEmbed("MAPWINGIS.Map.1")
    }
}
if(!mapEmbed) return;

var axMap = mapEmbed._object
axMap.Projection = axMap.PROJECTION_GOOGLE_MERCATOR;
axMap.TileProvider = axMap.OpenStreetMap;
axMap.KnownExtents = axMap.keUSA;

axMap.Tiles.AutoDetectProxy(); //自动获取系统代理
//axMap.Tiles.SetProxy("ip_address_of_proxy", port); //指定代理服务�?
//axMap.CursorMode = axMap.cmZoomIn; //放大
//axMap.CursorMode = axMap.cmZoomOut; //缩小
//axMap.CursorMode = axMap.cmPan; //漫游
//axMap.ZoomToMaxExtents(); //全幅

//测量
axMap.CursorMode = axMap.cmMeasure;
axMap.Measuring.MeasuringType= axMap.MeasureArea;

winform.show();
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/MapWinGIS.md)

