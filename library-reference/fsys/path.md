# fsys.path 库模块帮助文档

<a id="fsys.path"></a>
## fsys.path 成员列表

提供文件路径相关函数,  
在导入 fsys 库时将自动导入 fsys.path 库。

<a id="fsys.path.addBackslash"></a>
### fsys.path.addBackslash(路径) 
 首先替换所有正斜杠为反斜杠  
如果目录最后面没有反斜杠,则追加反斜杠,  
这个函数实际是调用  io.joinpath(path,"/")

<a id="fsys.path.canonicalize"></a>
### fsys.path.canonicalize(路径,是否处理短路径) 
 转换为完整路径，并对路径进行归一化处理。  
参数 @2 可选（默认为true）。  
  
扩展和适当置换路径中包含的所有 ".." 和 "."   
该函数保证除分区根目录外保证尾部不为斜杠。  
盘符大写。

<a id="fsys.path.cmp"></a>
### fsys.path.cmp(路径,比较路径) 
 比较两个路径是否表示相同路径。  
  
此函数会归一化路径，并忽略大小写进行比较。  
返回值意义与 string.cmp 函数相同，  
路径相同则返回 0，注意 0 在条件表达式中为 false。  
如果任何一个参数为 null 时返回 -1。  
  
更准确的检测相同或不同的路径是否指向同一真实文件，  
应使用 fsys.fileInfo 函数

<a id="fsys.path.cmpName"></a>
### fsys.path.cmpName(路径, 比较文件名) 
 参数 @1 指定要比较的的文件路径。  
参数 @2 如果包含正斜杆或反斜杆，则调用比较与参数 @1 是否表示相同路径，  
否则仅比较两个参数的文件名是否相同。  
  
此函数会归一化路径，并忽略大小写进行比较。  
返回值意义与 string.cmp 函数相同，  
相同则返回 0，注意 0 在条件表达式中为 false。  
如果任何一个参数为 null 时返回 -1。  
  
如果要检测不同路径是否指向同一位置，请参考 fsys.fileInfo 函数。

<a id="fsys.path.commonPrefix"></a>
### fsys.path.commonPrefix(路径,路径2) 
 返回两个文件路径的公共前缀目录  
该函数失败保证返回的是一个目录比以斜杠结尾,失败返回null,  
在比较以前自动对路径归一化处理,忽略大小写

<a id="fsys.path.compact"></a>
### fsys.path.compact(文件路径,显示像素宽度) 
 截断路径来适合一定数目的像素

<a id="fsys.path.eofBackslash"></a>
### fsys.path.eofBackslash("文件路径") 
 首先替换所有正斜杠为反斜杠  
检测路径尾部是否有反斜杠

<a id="fsys.path.full"></a>
### fsys.path.full(path) 
 如果路径是绝对路径则返回该路径（不作任何转换）,  
否则返回null

<a id="fsys.path.full"></a>
### fsys.path.full(path,root) 
 如果path是相对路径，并且不以`/`、`\`、`~`等字符开始,  
则返回io.joinpath(root,path)  
否则转换为绝对路径返回

<a id="fsys.path.isDir"></a>
### fsys.path.isDir(路径) 
 如果文件路径存在并且是一个目录,  
或者路径路径以斜杠、反斜杠结束返回真

<a id="fsys.path.ischild"></a>
### fsys.path.ischild(目录,路径) 
 检测参数 @2 指定的路径是否在参数 @1 指定的目录之下。  
两个参数指向同一目录时也会返回 true。

<a id="fsys.path.long"></a>
### fsys.path.long(路径) 
 转为长路径

<a id="fsys.path.relative"></a>
### fsys.path.relative(路径,目录,返回路径是否以斜杠开始) 
 将路径转换为指定目录下层的相对路径,  
在比较以前自动对路径归一化处理,忽略大小写  
相同路径则返回空字符串,不是该目录下的路径则返回null  
参数三可选,默认首字符为斜杠

<a id="fsys.path.relativeTo"></a>
### fsys.path.relativeTo(参考路径,目标路径,参考路径属性,目标路径属性) 
 自参数@1指定的路径得到一个相对路径指向目标路径  
注意相对路径不一定是子目录,如果是上层目录使用 ../ 表示  
路径属性可为0,或 _FILE_ATTRIBUTE_DIRECTORY,可省略

<a id="fsys.path.removeBackslash"></a>
### fsys.path.removeBackslash(路径) 
 首先转换为完整路径,替换所有正斜杠为反斜杠  
移除路径最后面的反斜杠,并返回新路径以及尾字符  
如果尾字符为反斜杠并已移除,第二个返回值为空字符  
如果是分区号后的反斜杠或路径只有一个反斜杠,第二个返回值为反斜杠

<a id="fsys.path.replaceDir"></a>
### fsys.path.replaceDir(路径,根目录,新的根目录) 
 将路径转换为参数2指定根目录下的相对路径  
再将其转换为新的根目录下的绝对路径

<a id="fsys.path.replaceExt"></a>
### fsys.path.replaceExt(路径,新后缀名) 
 替换路径中的后缀名部分，后缀名要包含前面的 `.` 。

<a id="fsys.path.replaceFile"></a>
### fsys.path.replaceFile(路径,新文件名) 
 替换路径中的文件名部分

<a id="fsys.path.short"></a>
### fsys.path.short(路径) 
 转为符合 8.3 格式短路径。  
如果文件名符合 8.3 格式且包含空格（例如目录名不超过 8 个字符），则不会去除空格。  
如果文件不存在,返回空值。  
  
短文件名指向会因实际文件数变更,所以不能把短路径存入数据库  
且并不保证会去除空格。   
创建 process 对象或调用类似函数时，  
用数组或多参数指定启动参数可自动处理包含空格的路径。

<a id="fsys.path.validName"></a>
### fsys.path.validName(路径) 
 检测文件名是否合法,  
返回修正后的合法名称  
传入非字符串参数直接返回空值