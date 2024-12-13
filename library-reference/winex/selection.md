# winex.selection 库模块帮助文档

<a id="winex.selection"></a>
## winex.selection 成员列表

用于获取当前焦点窗口文本选区，可用于实现划词功能。

<a id="winex.selection.get"></a>
### winex.selection.get(true) 
 如果鼠标左键是放开状态，获取焦点窗口选区文本。  
成功返回文本,焦点窗口句柄。  
仅适用于支持 UIA 选区接口的窗口。  
  
参数 @1 为 true 则允许使用剪贴板复制选区文本，  
在获取选区文本失败才会使用剪贴板，  
用后会尝试还原剪贴板文本与图像。  
不建议连续无间隔地调用此函数以免点用过多 CPU
