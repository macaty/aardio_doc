# aardio 范例: web.rest 客户端 - web.rest.htmlClient

```aardio
//web.rest 客户端 - web.rest.htmlClient
import console.int; 
import web.rest.htmlClient;
 
var htmlDoc = web.rest.htmlClient.get("https://translate.*******.com/m",{
	q="hello",sl="en",tl="zh-CN",hl="zh-CN"
});
 
if(htmlDoc){
	var resultContainer = htmlDoc.queryEle({"class":"result-container"})
 
	if(resultContainer){
		console.log(resultContainer.innerText());
	}
}
```