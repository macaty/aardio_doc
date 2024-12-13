[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: 调用 AutoCAD - .NET 接口

```aardio aardio
//aardio 调用 AutoCAD - .NET 接口
import console;
console.showLoading("正在编译 .NET DLL");

import dotNet;
import com.cad;
var cad = com.cad();
cad.Visible = true;

//创建 C# 语言编译器（AutoCAD 2025 及之后版本请改用 VS 编译�?var compiler = cad.NetCompiler("C#");

//设置待编译C#源码�?注释可赋值为字符串，注释标记首尾星号数目要一�?�?//支持模板语法�?https://www.aardio.com/zh-cn/doc/language-reference/templating/syntax.html
compiler.Source = /******
using System;
using System.Collections.Generic;
using System.Text;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.Runtime;
using Autodesk.AutoCAD.Windows;
using Autodesk.AutoCAD.EditorInput;

public class TestCAD
{
         [LispFunction("aardioTestNetApi")]
         public static ResultBuffer TestNetApi(ResultBuffer lspArgs)
         {
             ResultBuffer lspRet = new ResultBuffer();
             if (lspArgs == null) return null;

             TypedValue[] args = lspArgs.AsArray();
             try
             {
                 if (args.Length == 2)
                 {
                     string a = args[0].Value as string;
                     string b = args[1].Value as string;

                     lspRet.Add(new TypedValue((int)LispDataType.Text, a + b));
                 }
             }
             catch (Autodesk.AutoCAD.Runtime.Exception)
             {
                 return null;
             }
              return lspRet;
         }

}

******/

//编译并返回程序集
var assembly = compiler.CompileOrFail("/aardioTestNetApi.dll");

//加载 C# 生成�?DLL
cad.NetLoad("/aardioTestNetApi.dll");
cad.NetLoad(
//调用 .NET 创建�?LISP 函数
cad.SendCommand(`(aardioTestNetApi "abc" "def")`);
cad.ShowForeground();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/AutoCAD/netload.md)

