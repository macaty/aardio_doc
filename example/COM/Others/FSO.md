[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - FSO

```aardio aardio
//COM 接口 - FSO
import com;
import console;

//定义函数
function ListFiles(path = "/" ) {
    var fs = com.CreateObject("Scripting.FileSystemObject")
    var dir = fs.GetFolder( io.fullpath(path) )

    for index,folder in com.each(dir.SubFolders) {
        ListFiles( folder.path )
    }

    for index,file in com.each(dir.Files) {
        console.log(file.path)
    }
}

ListFiles();
console.pause();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/FSO.md)

