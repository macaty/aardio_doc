# process.atom 库模块帮助文档

<a id="process.atom"></a>
## process.atom 成员列表


<a id="process.atom.add"></a>
### process.atom.add("字符串参数") 
 添加字符串到全局原子表  
字符串转换为UTF-16编码以后长度必须小于255字节  
返回原子数值

<a id="process.atom.delete"></a>
### process.atom.delete(原子值) 
 减少原子引用计数  
当引用计数为0时删除原子

<a id="process.atom.find"></a>
### process.atom.find("字符串参数") 
 在全局原子表查找字符串  
忽略大写小全串匹配  
返回原子数值

<a id="process.atom.getName"></a>
### process.atom.getName(原子值) 
 返回原子字符串
