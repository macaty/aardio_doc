# 设置全程编码
$PSDefaultParameterValues['Out-File:Encoding'] = 'default'

# 获取当前脚本所在目录
$currentDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path

# 设置源文件夹和目标文件夹
$sourceFolder = $currentDirectory  # 直接使用当前目录

# 获取所有 .html 文件的完整路径
$htmlFiles = Get-ChildItem -Path $sourceFolder -Filter *.html -Recurse | Select-Object -ExpandProperty FullName

# 遍历每个 .html 文件，并将其转换为 MD
foreach ($htmlFile in $htmlFiles) {
    # 获取输出 MD 文件的路径
    $mdFile = [System.IO.Path]::ChangeExtension($htmlFile, ".md")

    # 执行 html2md 命令
    & 'C:\Users\lichaofu\Documents\GitHub\aardio_doc\html2md.exe' -i $htmlFile | Out-File $mdFile

    Write-Host "已将 $htmlFile 转换为 $mdFile"
}


 