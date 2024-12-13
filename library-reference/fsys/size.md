# fsys.size 库模块帮助文档

<a id="fsys.size"></a>
## fsys.size 成员列表


<a id="fsys.size.GB"></a>
### fsys.size.GB 
 

```aardio
0x40000000;
```



<a id="fsys.size.KB"></a>
### fsys.size.KB 
 

```aardio
0x400;
```



<a id="fsys.size.MB"></a>
### fsys.size.MB 
 

```aardio
0x100000;
```



<a id="fsys.size.bytes"></a>
### fsys.size.bytes 
 

```aardio
1;
```



<a id="fsys.size.format"></a>
### fsys.size.format(长度,长度高位,单位大小,精度) 
 格式化大小,所有参数可选  
默认自动计算最大单位大小,精度默认为最大2位小数  
返回值依次为:大小,单位大小,单位名称  
  
建议改用math.size64实现此函数的功能
