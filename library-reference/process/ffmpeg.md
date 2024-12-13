[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# process.ffmpeg 库模块帮助文�?
FFmpeg调用参数说明

[FFmpeg调用参数说明](https://quickref.me/zh-CN/docs/ffmpeg.html)

## process 成员列表

### process.ffmpeg("/","-y","-i",)

调用 ffmpeg.exe，返�?process.popen 管道对象�?
参数 @1 指定工作目录，传入空值则默认设为"/"�?
可传入一个或多个启动命令行参数�?
如果有多个命令行参数，则不在双引号内、且包含空白或需要转义的参数时，

转义处理该参数后并在首尾添加双引号�?
参数 "-y" 表示允许覆盖同名文件�?
参数 "-i" 的下一个参数指定输入文件路径（~或单正反斜杆开头的路径自动转为完整路径）�?
### process.ffmpeg()

[返回对象:processPopenObject](popen.html#processPopenObject)

## process.ffmpeg 成员列表

调用 ffmpeg.exe，返�?process.popen 进程管道对象�?
可用于处理或转换视频、音频、图像文件�?
[FFmpeg调用参数说明](https://quickref.me/zh-CN/docs/ffmpeg.html)

### process.ffmpeg.cdnFilename

默认下载�?ffmpeg 文件名�?
64位系统默认为 "ffmpeg-win32-x64"�?2位默认为 "ffmpeg-win32-ia3"

### process.ffmpeg.cdnUrl

ffmpeg.exe 默认下载地址�?
### process.ffmpeg.cdnVersion

默认下载�?ffmpeg 版本�?
当前�?"6.0"�?
### process.ffmpeg.getPath()

返回 ffmpeg.exe 路径�?
如果找不到路径则会自动安装�?
## 全局对象 成员列表

### setPath()

自定�?ffmpeg.exe 路径�?
参数 @1 指定文件路径

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/process/ffmpeg.md)

