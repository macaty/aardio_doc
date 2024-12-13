[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# aardio 范例: NPOI

```aardio aardio
//NPOI
import NPOI;
import console.int;

/*
用法请直接参�?.NET 代码，没太大区别
https://github.com/nissl-lab/npoi
https://github.com/nissl-lab/npoi-examples

要求 .NET 4.7.2 以上�?Win10 1809 开始自带）�?开源免费，携带 22 �?DLL 文件�?全部内存加载，生成独�?EXE )�?不依�?Office，不需要安�?Excel，Word �?*/

//创建工作�?var workbook = NPOI.XSSF.UserModel.XSSFWorkbook();

//打开工作�?/*
var fs = System.IO.FileStream("/test.xlsx","r+")
var workbook = NPOI.XSSF.UserModel.XSSFWorkbook(fs);
*/

//创建工作�?var sheet = workbook.CreateSheet("Sheet1");

//填充数据
for (  r = 0; 4 ) {
    var row = sheet.CreateRow(r);
    for ( c = 0; 2 )  {
        var cell = row.CreateCell(c);
        if (r == 0) {
            cell.SetCellValue("Column" + (c + 1));
        }
        else  {
            cell.SetCellValue("R"+(r + 1)+"C"+(c + 1));
        }
    }
}

//保存数据
workbook.Write("/test.xlsx");

import process;
process.exploreSelect("/test.xlsx");

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/Excel/NPOI.md)

