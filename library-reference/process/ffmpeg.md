# process.ffmpeg 库模块帮助文档


<details>  <summary>FFmpeg调用参数说明</summary>  <p>
[FFmpeg调用参数说明](https://quickref.me/zh-CN/docs/ffmpeg.html)
</p></details>


<a id="process"></a>
## process 成员列表


<a id="process.ffmpeg"></a>
### process.ffmpeg("/","-y","-i",) 
 调用 ffmpeg.exe，返回 process.popen 管道对象。  
参数 @1 指定工作目录，传入空值则默认设为"/"。  
可传入一个或多个启动命令行参数。  
如果有多个命令行参数，则不在双引号内、且包含空白或需要转义的参数时，  
转义处理该参数后并在首尾添加双引号。  
  
参数 "-y" 表示允许覆盖同名文件。  
参数 "-i" 的下一个参数指定输入文件路径（~或单正反斜杆开头的路径自动转为完整路径）。

<a id="process.ffmpeg"></a>
### process.ffmpeg() 
 [返回对象:processPopenObject](https://www.aardio.com/zh-cn/doc/library-reference/process/popen.html#processPopenObject)

<a id="process.ffmpeg"></a>
## process.ffmpeg 成员列表

调用 ffmpeg.exe，返回 process.popen 进程管道对象。  
可用于处理或转换视频、音频、图像文件。  
[FFmpeg调用参数说明](https://quickref.me/zh-CN/docs/ffmpeg.html)

<a id="process.ffmpeg.cdnFilename"></a>
### process.ffmpeg.cdnFilename 
 默认下载的 ffmpeg 文件名。  
64位系统默认为 "ffmpeg-win32-x64"，32位默认为 "ffmpeg-win32-ia3"

<a id="process.ffmpeg.cdnUrl"></a>
### process.ffmpeg.cdnUrl 
 ffmpeg.exe 默认下载地址。

<a id="process.ffmpeg.cdnVersion"></a>
### process.ffmpeg.cdnVersion 
 默认下载的 ffmpeg 版本。  
当前为 "6.0"。

<a id="process.ffmpeg.getPath"></a>
### process.ffmpeg.getPath() 
 返回 ffmpeg.exe 路径。  
如果找不到路径则会自动安装。

<a id="global"></a>
## 全局对象 成员列表


<a id="setPath()"></a>
### setPath() 
 自定义 ffmpeg.exe 路径。  
参数 @1 指定文件路径
