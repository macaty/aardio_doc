# 获取当前脚本所在目录
$currentDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path

# 设置源文件夹和目标文件夹
$sourceFolder = $currentDirectory  # 直接使用当前目录

# 获取所有 .html 文件的完整路径
$htmlFiles = Get-ChildItem -Path $sourceFolder -Filter *.html -Recurse | Select-Object -ExpandProperty FullName

# 遍历每个 .html 文件，并将其转换为 PDF
foreach ($htmlFile in $htmlFiles) {
    # 获取输出 PDF 文件的路径
    $pdfFile = [System.IO.Path]::ChangeExtension($htmlFile, ".pdf")

    # 执行 wkhtmltopdf 命令
    & 'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe' $htmlFile $pdfFile

    Write-Host "已将 $htmlFile 转换为 $pdfFile"
}