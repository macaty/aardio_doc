# process.python.pip 库模块帮助文档

<a id="process.python.pip"></a>
## process.python.pip 成员列表

Python 模块安装工具。  
  
如果 process.python.path 的值为 "python.exe" 则调用系统安装的 pip，  
否则自动安装 pip 到 python.exe 所在目录的 pip 目录下,请不要改为其他名称。  
在安装 pip 时会修改 python.exe 所在目录的 *._pth 文件。  
如果已安装 pip 则自动跳过。  
  
此工具可用于发布后的程序

<a id="process.python.pip.github"></a>
### process.python.pip.github("字符串参数") 
 自动安装 GitHub 的 Python 项目依赖模块。  
参数中指定 GitHub 上 Python 项目 requirements.txt 地址。  
如果网址包含 blob 或 raw 则不用指定域名

<a id="process.python.pip.require"></a>
### process.python.pip.require("字符串参数") 
 如果没有安装指定的模块，则调用 pip 安装

<a id="process.python.pip.setIndexUrl"></a>
### process.python.pip.setIndexUrl("aliyun") 
 设置镜像源。  
参数指定源网址，支持常用镜像源缩写。  
"aliyun" 表示阿里云源，  
"tsinghua" 表示清化源，  
"tencent" 表示腾讯源，  
"douban" 表示豆瓣源，  
参数为空恢复默认。

<a id="process.python.pip.target"></a>
### process.python.pip.target 
 指定安装模块的目录，  
此目录仅用于安装，不会被添加到 process.python 的模块搜索路径

<a id="process.python"></a>
## process.python 成员列表


<a id="process.python.pip"></a>
### process.python.pip("install","字符串参数") 
 执行 pip 命令，只能在开发环境单独运行。  
可用一个字符串参数指定多个 pip 参数，空格分隔多个参数，  
也可以传入多个参数由 aardio 自动合并（空格分隔参数），  
合并多参数时，单参数含空格或需转义时自动加双引号并自动转义。  
  
默认安装模块到 "/py/site-packages" 目录下  
  
如果不指定任何参数，直接返回 pip 模块对象。  
可用一个字符串数组指定 pip.main 函数的启动参数
