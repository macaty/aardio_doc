# baidu.fanyi 库模块帮助文档


<details>  <summary>说明</summary>  <p>
通过个人认证并切换为高级版以后，百度翻译接口支持每月 100 万字符的免费调用量。
https://api.fanyi.baidu.com/product/111

baidu.fanyi 其于 web.rest: 
https://mp.weixin.qq.com/s/4mYRDnO49alwpQoBD_cILg
</p></details>


<a id="baidu"></a>
## baidu 成员列表


<a id="baidu.fanyi"></a>
### baidu.fanyi 
 百度翻译 API 客户端支持库  
百度翻译接口文档 https://api.fanyi.baidu.com/doc/21

创建 百度翻译 API 客户端。  
调用返回对象的 api 函数（省略接口地址参数）获取 api 对象

<a id="baidu.fanyi"></a>
### baidu.fanyi() 
 创建 百度翻译 API 客户端。  
可在创建对象后调用返回对象的 setAuth 函数修改应用ID与密钥  
  
[返回对象:webRestClientObject](https://www.aardio.com/zh-cn/doc/library-reference/web/rest/client.html#webRestClientObject)

<a id="baidu.fanyi"></a>
### baidu.fanyi(appId,secretKey) 
 appId 为应用 ID，secretKey 为应用密钥。  
也可以在创建对象后调用 setAuth 函数修改这两个参数
