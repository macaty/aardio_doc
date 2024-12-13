# fsys.cookies 库模块帮助文档

<a id="fsys"></a>
## fsys 成员列表


<a id="fsys.cookies"></a>
### fsys.cookies 
 netscape/curl cookie文件格式解析器

<a id="fsys.cookies"></a>
### fsys.cookies() 
 创建netscape/curl cookie文件格式解析器  
此对象包含解析后的cookie数组,并包含以域名为键的cookie数组值,  
  
每个cookie的字段含义如下：  
domain = 域名  
flag = 给定域的所有计算机是否可访问该值  
path = cookie路径  
secure = cookie是否仅适用于https连接  
expires = 过期时间,  
这是一个time.gmt对象,RFC1123格式的时间值  
会话cookie这个字段的值为null  
name = cookie名字  
value = cookie的值  
  
[返回对象:fsyscookiesObject](#fsyscookiesObject)

<a id="fsyscookiesObject"></a>
## fsyscookiesObject 成员列表


<a id="fsyscookiesObject.clear"></a>
### fsyscookiesObject.clear() 
 清空已加载的cookie

<a id="fsyscookiesObject.get"></a>
### fsyscookiesObject.get() 
 返回指定网址或域名的cookies,  
可用参数@1指定网址,也可以用参数@1指定域名,参数@2指定网站路径  
不指定网站路径时默认为"/"

<a id="fsyscookiesObject.getCookies"></a>
### fsyscookiesObject.getCookies() 
 返回键值对组成的cookies字符串,可用于http请求头,失败返回null,  
可用参数@1指定网址,也可以用参数@1指定域名,参数@2指定网站路径  
不指定网站路径时默认为"/"

<a id="fsyscookiesObject.header"></a>
### fsyscookiesObject.header 
 cookie文件头描述,一般不用指定

<a id="fsyscookiesObject.load"></a>
### fsyscookiesObject.load() 
 自文件加载cookie，参数指定类型  
此函数会清空之前加载的cookie

<a id="fsyscookiesObject.mixin"></a>
### fsyscookiesObject.mixin(_) 
 混入兼容cookie数组

<a id="fsyscookiesObject.parse"></a>
### fsyscookiesObject.parse() 
 解析多行cookie文本,参数指定字符串  
此函数会清空之前加载的cookie

<a id="fsyscookiesObject.parseLine"></a>
### fsyscookiesObject.parseLine() 
 解析一行cookie文本,参数指定字符串  
此函数 不会 清空之前加载的cookie

<a id="fsyscookiesObject.push"></a>
### fsyscookiesObject.push 
 更新或添加cookie,参数应当是一个表,  
如果指定域下已经存在同名cookie，则更新cookie  
否则添加cookie

<a id="fsyscookiesObject.push"></a>
### fsyscookiesObject.push(cookie) 
 

```aardio
fsyscookiesObject.push( {  
    domain = domain;  
    flag  = flag;  
    path = path;  
    secure = secure;  
    expires = ..time.gmt() ;  
    name = name;  
    value = value;  
    httpOnly = httpOnly;  
})
```



<a id="fsyscookiesObject.save"></a>
### fsyscookiesObject.save() 
 保存到文件,参数指定文件路径

<a id="fsyscookiesObject.stringify"></a>
### fsyscookiesObject.stringify() 
 所有cooke转换为字符串

<a id="fsyscookiesObject.stringifyLine"></a>
### fsyscookiesObject.stringifyLine() 
 cookie转换为字符串，参数指定索引  
也可以直接传入一个cookie对象

<a id="fsyscookiesObject.stringifySetCookieLine"></a>
### fsyscookiesObject.stringifySetCookieLine() 
 cookie转换为HTTP Set-Cookie响应头格式,  
参数指定索引,也可以直接传入一个cookie对象,  
可选使用参数指定前缀，不指定时默认为"Set-Cookie: ",  
成功返回非空字符串
