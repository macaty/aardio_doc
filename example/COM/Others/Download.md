[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - 下载网页

```aardio aardio
//COM 接口 - 下载网页
import com;
import console;

//创建COM对象
var winHttp = com.CreateObject("WinHttp.WinHttpRequest.5.1")

winHttp.setOption(6,0 ) //禁止自动重定�?不能写成 winHttp.Option(6) = 0
winHttp.SetTimeouts( 9999999,9999999,9999999,9999999 ) //设置超时,调用函数不能省略括号

//创建请求
winHttp.Open("GET", "http://bbs.aardio.com", true/*是不是异�?/ )

//自定义请求头,下面修改User Agent
winHttp.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows; U; Windows NT 6.0; zh-CN; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3 (.NET CLR 3.5.30729)");

//发送请�?调用函数不能省略括号
winHttp.Send()

//注意这个对象不支持挂接动态事件接口，不要浪费时间去尝试�?//可以用下面的函数等待请求完成（不会卡界面�?参数指定超时,-1为不限制时间
winHttp.WaitForResponse(-1);//不卡界面

console.log("状态码",winHttp.Status)

//获取返回的网页数�?arrArray = winHttp.ResponseBody

//输出到控制台窗口
console.log( arrArray )

console.log( "-----------HTTP�?----------" )
console.log( winHttp.GetAllResponseHeaders() )

console.log( "-----------COOKIE-----------" )
try{
    console.log( winHttp.GetResponseHeader( "Set-Cookie: " ) )
}

console.pause();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/Download.md)

