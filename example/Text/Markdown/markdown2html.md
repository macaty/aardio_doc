# aardio 范例: markdown 转换为 HTML

``````aardio
//markdown 转换为 HTML

var md = /*
# 列表

1. 列表。
2. 列表。
	- 嵌套列表
	- 嵌套列表
	
# 表格


| foo | bar |
| --- | ---: |
| baz | bim |

	
# 代码块

```aardio
print("你好！");
```
*/

import string.markdown;
var markdown = string.markdown();

var html = markdown.render(md); 
print(html); 
``````