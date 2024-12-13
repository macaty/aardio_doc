# gdip.stringformat 库模块帮助文档

<a id="gdip"></a>
## gdip 成员列表


<a id="gdip.CloneStringFormat"></a>
### gdip.CloneStringFormat 
 

```aardio
$.api("GdipCloneStringFormat","int(PTR strFmt,int& newFormat)")
```



<a id="gdip.CreateStringFormat"></a>
### gdip.CreateStringFormat 
 

```aardio
$.api("GdipCreateStringFormat","int(int formatAttributes,word language,pointer& StringFormat)")
```



<a id="gdip.DeleteStringFormat"></a>
### gdip.DeleteStringFormat 
 

```aardio
$.api("GdipDeleteStringFormat","int(PTR strFmt)")
```



<a id="gdip.GetStringFormatAlign"></a>
### gdip.GetStringFormatAlign 
 

```aardio
$.api("GdipGetStringFormatAlign","int(PTR strFmt,int& align)")
```



<a id="gdip.GetStringFormatFlags"></a>
### gdip.GetStringFormatFlags 
 

```aardio
$.api("GdipGetStringFormatFlags","int(PTR strFmt,int& flags)")
```



<a id="gdip.GetStringFormatHotkeyPrefix"></a>
### gdip.GetStringFormatHotkeyPrefix 
 

```aardio
$.api("GdipGetStringFormatHotkeyPrefix","int(PTR strFmt,int& hkPrefix)")
```



<a id="gdip.GetStringFormatLineAlign"></a>
### gdip.GetStringFormatLineAlign 
 

```aardio
$.api("GdipGetStringFormatLineAlign","int(PTR strFmt,int& align)")
```



<a id="gdip.GetStringFormatTrimming"></a>
### gdip.GetStringFormatTrimming 
 

```aardio
$.api("GdipGetStringFormatTrimming","int(PTR strFmt,int& trimming)")
```



<a id="gdip.SetStringFormatAlign"></a>
### gdip.SetStringFormatAlign 
 

```aardio
$.api("GdipSetStringFormatAlign","int(PTR strFmt,int align)")
```



<a id="gdip.SetStringFormatFlags"></a>
### gdip.SetStringFormatFlags 
 

```aardio
$.api("GdipSetStringFormatFlags","int(PTR strFmt,int flags)")
```



<a id="gdip.SetStringFormatHotkeyPrefix"></a>
### gdip.SetStringFormatHotkeyPrefix 
 

```aardio
$.api("GdipSetStringFormatHotkeyPrefix","int(PTR strFmt,int hkPrefix)")
```



<a id="gdip.SetStringFormatLineAlign"></a>
### gdip.SetStringFormatLineAlign 
 

```aardio
$.api("GdipSetStringFormatLineAlign","int(PTR strFmt,int align)")
```



<a id="gdip.SetStringFormatTrimming"></a>
### gdip.SetStringFormatTrimming 
 

```aardio
$.api("GdipSetStringFormatTrimming","int(PTR strFmt,int trimming)")
```



<a id="gdip.stringformat"></a>
### gdip.stringformat() 
 [返回对象:gdipstringformatObject](#gdipstringformatObject)

<a id="gdip.stringformat"></a>
### gdip.stringformat(formatAttributes,language) 
 创建文本格式对象  
参数都是可选参数,默认值为0

<a id="gdip.stringformat"></a>
## gdip.stringformat 成员列表


<a id="gdip.stringformat.genericTypographic"></a>
### gdip.stringformat.genericTypographic() 
 返回一个格式对象  
测量字符串的长度时，禁止GDI+添加额外长度或宽度  
测量结果偏小  
  
[返回对象:gdipstringformatObject](#gdipstringformatObject)

<a id="gdipstringformatObject"></a>
## gdipstringformatObject 成员列表


<a id="gdipstringformatObject.align"></a>
### gdipstringformatObject.align 
 

```aardio
gdipstringformatObject.align = _GdipStringAlignment ;
```



<a id="gdipstringformatObject.delete"></a>
### gdipstringformatObject.delete() 
 删除对象

<a id="gdipstringformatObject.flags"></a>
### gdipstringformatObject.flags 
 

```aardio
gdipstringformatObject.flags = _GdipStringFormatFlags ;
```



<a id="gdipstringformatObject.hotkeyPrefix"></a>
### gdipstringformatObject.hotkeyPrefix 
 

```aardio
gdipstringformatObject.hotkeyPrefix = _GdipHotkeyPrefix ;
```



<a id="gdipstringformatObject.lineAlign"></a>
### gdipstringformatObject.lineAlign 
 

```aardio
gdipstringformatObject.lineAlign = _GdipStringAlignment ;
```



<a id="gdipstringformatObject.trimming"></a>
### gdipstringformatObject.trimming 
 

```aardio
gdipstringformatObject.trimming = _GdipStringTrimming ;
```


