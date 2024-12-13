# sys.volume 库模块帮助文档

<a id="sys.volume"></a>
## sys.volume 成员列表

存储卷相关函数。  
相关库：fsys.drives, sys.storage

<a id="sys.volume.deviceDefine"></a>
### sys.volume.deviceDefine(文件路径) 
 将指定的目录映射为虚拟分区  
成功返回分区路径

<a id="sys.volume.deviceDefine"></a>
### sys.volume.deviceDefine(文件路径,"Z:") 
 将指定的目录映射为虚拟分区  
成功返回分区路径

<a id="sys.volume.deviceRemove"></a>
### sys.volume.deviceRemove("字符串参数") 
 移除分区

<a id="sys.volume.getAllDevice"></a>
### sys.volume.getAllDevice() 
 返回所有设备名

<a id="sys.volume.getDeviceName"></a>
### sys.volume.getDeviceName(文件路径) 
 文件路径转换为设备名

<a id="sys.volume.getDriveType"></a>
### sys.volume.getDriveType(驱动器路径) 
 返回驱动器类型  
以_DRIVE_为前缀的常量表示不同类型

<a id="sys.volume.getFreeDrive"></a>
### sys.volume.getFreeDrive() 
 获取未使用的盘符（自"C:"开始）  
这个函数实际指向 fsys.drives.free 函数

<a id="sys.volume.getInfo"></a>
### sys.volume.getInfo() 
 [返回对象:volumeinfoObject](#volumeinfoObject)

<a id="sys.volume.getInfo"></a>
### sys.volume.getInfo(分区或完整路径) 
 返回分区信息,  
参数可指定盘符或完整文件路径  
盘符可带冒号也可以不带

<a id="sys.volume.getLogicalDrives"></a>
### sys.volume.getLogicalDrives() 
 返回一个包含所可用的逻辑分区盘符的数组,  
盘符以冒号结束  
  
这个函数实际指向 fsys.drives.get

<a id="sys.volume.getPathName"></a>
### sys.volume.getPathName(设备名) 
 设备名转换为文件路径

<a id="sys.volume.getSpaceSize"></a>
### sys.volume.getSpaceSize("C:\") 
 获取分区空间大小, 剩余大小等信息  
参数可以是该驱动器下有效的目录路径

<a id="sys.volume.getSpaceSize"></a>
### sys.volume.getSpaceSize() 
 [返回对象:valuespacesizeObject](#valuespacesizeObject)

<a id="sys.volume.maxSpace"></a>
### sys.volume.maxSpace(子目录路径) 
 将指定的子目录路径转换为空间最大的分区下的完整路径。  
返回转换后的路径

<a id="sys.volume.setLabel"></a>
### sys.volume.setLabel("字符串参数","卷标") 
 设置区分卷标

<a id="valuespacesizeObject"></a>
## valuespacesizeObject 成员列表


<a id="valuespacesizeObject.availablePercentage"></a>
### valuespacesizeObject.availablePercentage 
 有效空间百分比

<a id="valuespacesizeObject.avaliableSize"></a>
### valuespacesizeObject.avaliableSize 
 剩余有效空间大小  
返回值为math.size64对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="valuespacesizeObject.freePercentage"></a>
### valuespacesizeObject.freePercentage 
 剩余空间百分比

<a id="valuespacesizeObject.freeSize"></a>
### valuespacesizeObject.freeSize 
 剩余空间大小  
返回值为math.size64对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="valuespacesizeObject.totalSize"></a>
### valuespacesizeObject.totalSize 
 总大小  
返回值为math.size64对象  
  
[返回对象:mathSize64Object](https://www.aardio.com/zh-cn/doc/library-reference/math/_.html#mathSize64Object)

<a id="volumeinfoObject"></a>
## volumeinfoObject 成员列表


<a id="volumeinfoObject.drive"></a>
### volumeinfoObject.drive 
 分区路径

<a id="volumeinfoObject.flag"></a>
### volumeinfoObject.flag 
 标志位

<a id="volumeinfoObject.fsys"></a>
### volumeinfoObject.fsys 
 文件系统

<a id="volumeinfoObject.label"></a>
### volumeinfoObject.label 
 卷名

<a id="volumeinfoObject.maxlen"></a>
### volumeinfoObject.maxlen 
 文件路径最大长度

<a id="volumeinfoObject.serial"></a>
### volumeinfoObject.serial 
 序列号

<a id="volumeinfoObject.serialNum"></a>
### volumeinfoObject.serialNum 
 序列号(数值)
