# fsys.file 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.file"></a>
### fsys.file("字符串参数") 
 只读模式打开,文件必须存在  
如果路径以斜杠结束,则以目录模式打开.  
更多参数参考源码

<a id="fsys.file"></a>
### fsys.file("字符串参数","a") 
 只写追加模式打开,创建新文件保留原文件

<a id="fsys.file"></a>
### fsys.file("字符串参数","a+") 
 读写追加模式打开,创建新文件保留原文件

<a id="fsys.file"></a>
### fsys.file("字符串参数","r+") 
 读写模式打开,文件必须存在  
文件路径也可以指定一个目录,可使用返回对象读写目录时间属性,  
更多参数参考源码

<a id="fsys.file"></a>
### fsys.file("字符串参数","w") 
 只写模式打开,创建新文件清空原文件

<a id="fsys.file"></a>
### fsys.file("字符串参数","w+") 
 读写模式打开,创建新文件清空原文件

<a id="fsys.file"></a>
### fsys.file("字符串参数","w+D") 
 读写模式打开临时文件,关闭对象时自动删除文件

<a id="fsys.file"></a>
### fsys.file() 
 [返回对象:fsysfileObject](#fsysfileObject)

<a id="fsys.file"></a>
### fsys.file(path,mode,shareMode,creation,flagsAndAttributes,secAttrib) 
 所有参数可选,  
参数详细用法参考此函数源码与CreateFile参数用法,  
mode参数可指定数值指定打开模式,也可使用与io.file相同规则的描述字符  
shareMode参数默认为 _FILE_SHARE_READ | _FILE_SHARE_WRITE  
creation参数默认值为 _OPEN_EXISTING  
@flagsAndAttributes 为可选参数，指定文件属性,省略则自动设置此参数  
@secAttrib 不必指定

<a id="fsys.file"></a>
### fsys.file(文件句柄) 
 可以指定文件、管道等句柄

<a id="fsys.file"></a>
### fsys.file(文件句柄,true) 
 直接文件、管道等句柄  
添加析构函数负责释放句柄

<a id="fsys.file"></a>
## fsys.file 成员列表

用于打开或创建文件对象,  
fsys.file 返回的文件对象可传入其他线程使用。

<a id="fsys.file.is"></a>
### fsys.file.is() 
 判断参数是不是fsys.file对象

<a id="fsys.file.lastModified"></a>
### fsys.file.lastModified() 
 参数 @1 指定文件路径，返回文件最后修改时间。  
返回值是 time.gmt 对象，即 RFC1123 格式时间。HTTP 协议使用该对象  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="fsys.file.lastModified"></a>
### fsys.file.lastModified(,"2024/1/1 11:01:00") 
 参数 @1 指定文件路径，\b参数 @2 指定任何可作为 time.iso8601 参数的时间格式，可指定字符串。  
如果文件修改时间大于参数 @2 指定的时间则返回 true

<a id="fsys.file.lines"></a>
### fsys.file.lines(path) 
 

```aardio
for line in fsys.file.lines(/*请输入逐行读取的文本文件路径*/) { 
	
}
```



<a id="fsys.file.temp"></a>
### fsys.file.temp() 
 [返回对象:fsysfileObject](#fsysfileObject)

<a id="fsys.file.temp"></a>
### fsys.file.temp(pathOrExt,dontDeleteOnClose) 
 创建临时文件,  
可选用 @pathOrExt 参数指定临时文件路径或后缀名,  
指定临时文件后缀名时第一个字符必须是 . 号,  
可选指定 @dontDeleteOnClose 参数值为 true 禁止关闭对象自动删除文件,  
@dontDeleteOnClose 为 true 时文件才会有共享读写权限,  
可通过返回文件对象的 path 属性获取临时文件路径

<a id="filefiletimesObject"></a>
## filefiletimesObject 成员列表


<a id="filefiletimesObject.access"></a>
### filefiletimesObject.access 
 文件最后访问时间  
  
[返回对象:fsysTimeObject](#fsysTimeObject)

<a id="filefiletimesObject.creation"></a>
### filefiletimesObject.creation 
 文件创建时间  
  
[返回对象:fsysTimeObject](#fsysTimeObject)

<a id="filefiletimesObject.write"></a>
### filefiletimesObject.write 
 文件最后修改时间  
  
[返回对象:fsysTimeObject](#fsysTimeObject)

<a id="filetimesObject"></a>
## filetimesObject 成员列表


<a id="filetimesObject.access"></a>
### filetimesObject.access 
 文件最后访问时间  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="filetimesObject.creation"></a>
### filetimesObject.creation 
 文件创建时间  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="filetimesObject.write"></a>
### filetimesObject.write 
 文件最后修改时间  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="fsysfileObject"></a>
## fsysfileObject 成员列表


<a id="fsysfileObject.close"></a>
### fsysfileObject.close() 
 关闭文件句柄

<a id="fsysfileObject.delete"></a>
### fsysfileObject.delete() 
 关闭并删除文件

<a id="fsysfileObject.deviceIoControl"></a>
### fsysfileObject.deviceIoControl 
 对设备驱动程序发送控制指令

<a id="fsysfileObject.deviceIoControl"></a>
### fsysfileObject.deviceIoControl(控制码,输入结构体,输出结构体) 
 参数可以为空或结构体,  
输出结构体也可以是raw.malloc分配的缓冲区,  
成功返回true,以及读取的字节数

<a id="fsysfileObject.flush"></a>
### fsysfileObject.flush() 
 刷新缓冲区

<a id="fsysfileObject.getFileTime"></a>
### fsysfileObject.getFileTime() 
 返回创建时间、最后修改时间、最后访问时间，  
所有返回时间为 UTC 标准时间  
  
[返回对象:filefiletimesObject](#filefiletimesObject)

<a id="fsysfileObject.getTime"></a>
### fsysfileObject.getTime() 
 返回创建时间、最后修改时间、最后访问时间，  
所有返回时间为 UTC 标准时间  
  
[返回对象:filetimesObject](#filetimesObject)

<a id="fsysfileObject.handle"></a>
### fsysfileObject.handle 
 返回文件句柄

<a id="fsysfileObject.lastModified"></a>
### fsysfileObject.lastModified() 
 返回最后修改时间,返回值是time.gmt对象,  
即RFC1123格式时间,HTTP协议使用该对象  
  
[返回对象:timeObject](https://www.aardio.com/zh-cn/doc/library-reference/time/_.html#timeObject)

<a id="fsysfileObject.path"></a>
### fsysfileObject.path 
 返回文件路径

<a id="fsysfileObject.read"></a>
### fsysfileObject.read() 
 读取一行文本  
返回文本不包含回车换行符

<a id="fsysfileObject.read"></a>
### fsysfileObject.read(-1) 
 读取所有内容到文件尾部

<a id="fsysfileObject.read"></a>
### fsysfileObject.read(0) 
 是否未到达文件尾。  
如果已经到达文件尾返回 null，否则返回空字符串。  
注意在布尔表达式工 null 等于 false，空字符串等于 true。

<a id="fsysfileObject.read"></a>
### fsysfileObject.read({int number} ) 
 读取结构体  
不支持多参数

<a id="fsysfileObject.read"></a>
### fsysfileObject.read(字节数) 
 读取指定长度的字节  
不支持多参数

<a id="fsysfileObject.readAll"></a>
### fsysfileObject.readAll() 
 移动指针到文件头，  
读取到文件尾返回全部数据。  
改用 -1 为参数调用 read 函数可自当前位置读取到文件尾。

<a id="fsysfileObject.readBuffer"></a>
### fsysfileObject.readBuffer 
 读取数据到 buffer ,成功返回读取长度,失败返回null

<a id="fsysfileObject.readBuffer"></a>
### fsysfileObject.readBuffer(buffer,读取长度) 
 直接读数据到内存  
参数@1可以是 buffer 对象,或内存指针,  
如果是指针则必须指定读取长度,否则长度参数可选  
成功返回读取长度

<a id="fsysfileObject.readTo"></a>
### fsysfileObject.readTo 
 读取直到以指定的字符串结束

<a id="fsysfileObject.readTo"></a>
### fsysfileObject.readTo('结束串') 
 读取直到以指定的字符串结束,返回值不包含结束串,  
该函数每次仅读取一个字节,效率较低

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek("cur",) 
 移动至相对当前位置的指定偏移量，  
偏移量应当是一个普通数值。

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek("end") 
 移动指针至结束处  
返回当前位置,返回值大于2GB则为负值,  
获取文件大小推荐使用 size() 函数

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek("end",) 
 移动至相对结束处的指定偏移量，  
偏移量应当是一个普通数值。

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek("set") 
 移动指针到开始

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek("set",) 
 移动至相对开始处的指定偏移量，  
偏移量应当是一个普通数值。  
  
普通数值的整数上限为 8PB，没有可能会写这么大的文件。  
所以偏移量不支持、也不必要使用 math.size64 对象

<a id="fsysfileObject.seek"></a>
### fsysfileObject.seek() 
 得到当前位置

<a id="fsysfileObject.setFileTime"></a>
### fsysfileObject.setFileTime(creation=创建时间;access=访问时间;write=修改时间) 
 

```aardio
fsysfileObject.setFileTime(  
	creation = fsys.time();  
	access = fsys.time();  
	write = fsys.time()   
)
```



<a id="fsysfileObject.setTime"></a>
### fsysfileObject.setTime(creation=创建时间;access=访问时间;write=修改时间) 
 

```aardio
fsysfileObject.setTime(  
	creation = time();  
	access = time();  
	write = time()   
)
```



<a id="fsysfileObject.seteof"></a>
### fsysfileObject.seteof() 
 将当前文件位置设为文件末尾,  
用于快速改变文件大小  
成功返回true

<a id="fsysfileObject.size"></a>
### fsysfileObject.size() 
 返回文件大小。  
size 函数表示的容量可以达到 8PB，一般不必要 size64 函数，  
math.size64 对象主要用于格式化为适合单位表示的文本。

<a id="fsysfileObject.size64"></a>
### fsysfileObject.size64() 
 返回文件大小。  
返回值为 math.size64 长整数对象。  
可调用返回对象的 format 函数格式化为适合单位表示的文本。  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="fsysfileObject.type"></a>
### fsysfileObject.type() 
 获取文件对象的类型  
例如控制台，管道，本地文件....等等  
返回值请参考_FILE_TYPE_前缀的常量

<a id="fsysfileObject.write"></a>
### fsysfileObject.write(字符串) 
 写入字符串  
参数也可以是数值、结构体

<a id="fsysfileObject.writeBuffer"></a>
### fsysfileObject.writeBuffer 
 写入缓冲区数据,成功返回写入长度,失败返回null

<a id="fsysfileObject.writeBuffer"></a>
### fsysfileObject.writeBuffer(buffer,写入长度) 
 直接写数据到内存  
参数@1可以是 buffer 对象、字符串、内存指针。  
如果是指针则必须指定写入长度，否则长度参数可选。  
成功返回写入长度


### 自动完成常量
_FILEOPENORD=0x600  
_FILE_ATTRIBUTE_ARCHIVE=0x20  
_FILE_ATTRIBUTE_COMPRESSED=0x800  
_FILE_ATTRIBUTE_DIRECTORY=0x10  
_FILE_ATTRIBUTE_HIDDEN=2  
_FILE_ATTRIBUTE_NORMAL=0x80  
_FILE_ATTRIBUTE_READONLY=1  
_FILE_ATTRIBUTE_SYSTEM=4  
_FILE_ATTRIBUTE_TEMPORARY=0x100  
_FILE_BEGIN=0x0  
_FILE_CASE_PRESERVED_NAMES=2  
_FILE_CASE_SENSITIVE_SEARCH=1  
_FILE_CURRENT=1  
_FILE_END=2  
_FILE_FILE_COMPRESSION=0x10  
_FILE_FLAG_BACKUP_SEMANTICS=0x2000000  
_FILE_FLAG_DELETE_ON_CLOSE=0x4000000  
_FILE_FLAG_NO_BUFFERING=0x20000000  
_FILE_FLAG_OVERLAPPED=0x40000000  
_FILE_FLAG_POSIX_SEMANTICS=0x1000000  
_FILE_FLAG_RANDOM_ACCESS=0x10000000  
_FILE_FLAG_SEQUENTIAL_SCAN=0x8000000  
_FILE_FLAG_WRITE_THROUGH=0x80000000  
_FILE_NOTIFY_CHANGE_ATTRIBUTES=4  
_FILE_NOTIFY_CHANGE_DIR_NAME=2  
_FILE_NOTIFY_CHANGE_FILE_NAME=1  
_FILE_NOTIFY_CHANGE_LAST_WRITE=0x10  
_FILE_NOTIFY_CHANGE_SECURITY=0x100  
_FILE_NOTIFY_CHANGE_SIZE=0x8  
_FILE_PERSISTENT_ACLS=0x8  
_FILE_SHARE_DELETE=4  
_FILE_SHARE_READ=1  
_FILE_SHARE_WRITE=2  
_FILE_TYPE_CHAR=2  
_FILE_TYPE_DISK=1  
_FILE_TYPE_PIPE=3  
_FILE_TYPE_REMOTE=0x8000  
_FILE_TYPE_UNKNOWN=0x0  
_FILE_UNICODE_ON_DISK=4  
_FILE_VOLUME_IS_COMPRESSED=0x8000  
