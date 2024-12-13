# aardio 范例: HTML 转文本

```aardio
//HTML 转文本
import console;
import inet.http;
var html = inet.http().get("http://www.aardio.com")

import string.html; 
txt = string.html.toText(html);

console.log( txt )
console.pause();
 
```