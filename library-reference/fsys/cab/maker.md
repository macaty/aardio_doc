# fsys.cab.maker 库模块帮助文档

<a id="fsys.cab.maker"></a>
## fsys.cab.maker 成员列表


<a id="fsys.cab.maker.compress"></a>
### fsys.cab.maker.compress(待压缩目录或文件,输出目录,"MSZIP") 
 压缩文件名目录（路径不能包含Unicode 字符），生成 cab 文件。  
支持嵌套子目录  
参数 @2 ,参数 @3 可省略,默认使用 LZX 算法(压缩率较高).  
成功返回 true,失败返回 null,错误信息

<a id="fsys.cab.maker.logger"></a>
### fsys.cab.maker.logger 
 指定压缩进度默认回显对象  
该对象必须有 log 或 write 成员函数用于输出信息
