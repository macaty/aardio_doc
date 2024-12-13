# fsys.drives 库模块帮助文档

<a id="fsys.drives"></a>
## fsys.drives 成员列表

逻辑分区相关函数。  
相关库：sys.volume , sys.storage

<a id="fsys.drives.each"></a>
### fsys.drives.each(driveType) 
 

```aardio
for drive,driveType in fsys.drives.each() {
	/*按字母序遍历所有逻辑分区,  
可选在参数中用一个数值指定分区类型,例如 _DRIVE_FIXED,  
返回值 drive 为盘符,以冒号结束,  
driveType 为分区类型,请参考 ::Kernel32.GetDriveType 的文档 */
}
```



<a id="fsys.drives.eachFixed"></a>
### fsys.drives.eachFixed() 
 

```aardio
for drive in fsys.drives.eachFixed() {
	/*按字母序遍历所有硬盘逻辑分区,  
迭代变量 drive 为盘符,以冒号结束,  
注意 USB 硬盘也会遍历到,  
但忽略普通 U盘,  
可使用 sys.storage.isUsbDevice 函数检测 USB 存储设备*/
}
```



<a id="fsys.drives.eachRemovable"></a>
### fsys.drives.eachRemovable() 
 

```aardio
for drive in fsys.drives.eachRemovable() {
	/*按字母序遍历所有移动盘逻辑分区,这个一般指的是 U盘,  
迭代变量 drive 为盘符,以冒号结束,  
可使用 sys.storage.isUsbDevice 函数检测是否 USB 存储设备*/
}
```



<a id="fsys.drives.free"></a>
### fsys.drives.free() 
 返回首个未使用的可用盘符

<a id="fsys.drives.get"></a>
### fsys.drives.get() 
 返回包含所有逻辑分区的数组,按字母排序,  
可选用参数@1指定包含所有可用分区的数组,  
可选用参数@2 指定分区类型,  
可用分区类型请参考 ::Kernel32.GetDriveType 的文档

<a id="fsys.drives.getFixed"></a>
### fsys.drives.getFixed() 
 返回包含所有硬盘逻辑分区的数组,按字母排序,  
包含 USB 硬盘但不包含 U盘,  
可使用 sys.storage.isUsbDevice 函数检测 USB 存储设备*/

<a id="fsys.drives.getRemovable"></a>
### fsys.drives.getRemovable() 
 返回包含所有移动盘逻辑分区的数组,按字母排序
