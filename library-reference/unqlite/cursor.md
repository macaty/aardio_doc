# unqlite.cursor 库模块帮助文档

<a id="unqliteCursorObject"></a>
## unqliteCursorObject 成员列表


<a id="unqliteCursorObject.data"></a>
### unqliteCursorObject.data() 
 返回当前值

<a id="unqliteCursorObject.dataObject"></a>
### unqliteCursorObject.dataObject() 
 返回表对象值

<a id="unqliteCursorObject.delete"></a>
### unqliteCursorObject.delete() 
 删除当前行,可选在参数中指定键名

<a id="unqliteCursorObject.each"></a>
### unqliteCursorObject.each() 
 

```aardio
for(k,v in unqliteCursorObject.each() ){ 
	
}
```



<a id="unqliteCursorObject.eachObject"></a>
### unqliteCursorObject.eachObject() 
 

```aardio
for(k,v in unqliteCursorObject.eachObject() ){ 
	
}
```



<a id="unqliteCursorObject.first"></a>
### unqliteCursorObject.first() 
 移动到首行

<a id="unqliteCursorObject.key"></a>
### unqliteCursorObject.key() 
 返回当前键名

<a id="unqliteCursorObject.last"></a>
### unqliteCursorObject.last() 
 移动到尾行

<a id="unqliteCursorObject.next"></a>
### unqliteCursorObject.next() 
 后移一行

<a id="unqliteCursorObject.prev"></a>
### unqliteCursorObject.prev() 
 前移一行

<a id="unqliteCursorObject.release"></a>
### unqliteCursorObject.release() 
 关闭游标对象

<a id="unqliteCursorObject.reset"></a>
### unqliteCursorObject.reset() 
 重置游标

<a id="unqliteCursorObject.seek"></a>
### unqliteCursorObject.seek("键名") 
 移动游标到指定键

<a id="unqliteCursorObject.valid"></a>
### unqliteCursorObject.valid() 
 是否有效数据
