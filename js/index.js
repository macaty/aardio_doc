document.addEventListener('DOMContentLoaded', function () {
    const jTree = document.getElementById('jTree');
    const menuToggle = document.getElementById('menu-toggle');
    const sidetree = document.getElementById('sidetree');
    const mainFrame = document.getElementById('main-frame');

    jTree.addEventListener('click', function (e) {
        const treeItem = e.target.closest('.t');
        if (treeItem && treeItem.querySelector('span')) {
            const span = treeItem.querySelector('span');
            span.classList.toggle('open');
            const parentLi = treeItem.closest('li');
            const childUl = parentLi.querySelector('ul');
            if (childUl) {
                childUl.classList.toggle('open');
            }
        }
    });

    document.getElementById('collapse-all').addEventListener('click', function (e) {
        e.preventDefault();
        jTree.querySelectorAll('ul').forEach(ul => ul.classList.remove('open'));
        jTree.querySelectorAll('.t > span').forEach(span => span.classList.remove('open'));
    });

    document.getElementById('expand-all').addEventListener('click', function (e) {
        e.preventDefault();
        jTree.querySelectorAll('ul').forEach(ul => ul.classList.add('open'));
        jTree.querySelectorAll('.t > span').forEach(span => span.classList.add('open'));
    });

    function toggleMenu() {
        sidetree.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    sidetree.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && window.innerWidth <= 768) {
            toggleMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidetree.classList.remove('active');
        }
    });

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchIcon = searchButton.querySelector('i');
    const originalIconClass = searchButton.getAttribute('data-original-icon');

    function seachInBing() {
        const keyword = searchInput.value.trim();
        if (keyword) {
            searchButton.disabled = true;
            searchIcon.className = 'fas fa-spinner';

            const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(keyword)}+site%3Awww.aardio.com&form=DEEPSH&mkt=en-us&lang=zh&cc=US`;
            window.open(searchUrl, '_blank');

            setTimeout(() => {
                searchButton.disabled = false;
                searchIcon.className = `fas ${originalIconClass}`;
            }, 3000);
        }
    }

    searchButton.addEventListener('click', seachInBing);

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            seachInBing();
        }
    });

    
    // 翻译表与检索关联词
    const synonymTranslationMap1 = new Map([
        ["txt", "文本文件"], 
        ["read", "写"],
        ["write", "读"], 
        ["string", "字符串"],
        ["file", "文件"], 
        ["button", "按钮"],
        ["window", "窗口"],
        ["winform", "窗体"],
        ["callback", "回调"],
        ["function", "函数"],
        ["method", "方法"],
        ["class", "类"],
        ["object", "对象"],
        ["property", "属性"],
        ["variable", "变量"],
        ["constant", "常量"],
        ["array", "数组"],
        ["table", "表"],  
        ["statement", "语句"],
        ["expression", "表达式"],
        ["operator", "运算符"],
        ["module", "模块"],
        ["library", "库"],
        ["framework", "框架"],
        ["plugin", "插件"],
        ["extension", "扩展"],
        ["interface", "接口"],
        ["protocol", "协议"],
        ["request", "请求"],
        ["response", "响应"],
        ["server", "服务器"],
        ["client", "客户端"],
        ["database", "数据库"],
        ["query", "查询"],
        ["record", "记录"],
        ["field", "字段"],
        ["index", "索引"],
        ["key", "键"],
        ["value", "值"],
        ["error", "错误"],
        ["exception", "异常"],
        ["thread", "多线程"],
        ["process", "进程"],
        ["mutex", "互斥"],
        ["semaphore", "信号量"],
        ["lock", "锁"],
        ["unlock", "解锁"],  
        ["connection", "连接"],
        ["disconnect", "断开"],
        ["row", "行"],
        ["column", "列"],
        ["trigger", "触发器"],
        ["view", "视图"], 
        ["web", "网页"],
        ["web.view"/*tpa=https://www.aardio.com/zh-cn/doc/js/web.view*/, "浏览器"],
        ["html", "网页代码"],
        ["css", "样式表"],
        ["javascript", "网页脚本"],
        ["url", "网址"], 
        ["api", "接口"],
        ["bitmap", "位图"],
        ["pixel", "像素"],
        ["color", "颜色"],
        ["font", "字体"],
        ["size", "大小"],
        ["position", "位置"],
        ["alignment", "对齐"],
        ["margin", "边距"],
        ["padding", "填充"],
        ["border", "边框"],
        ["background", "背景"],
        ["foreground", "前景"],
        ["text", "文本"],
        ["image", "图片"],
        ["icon", "图标"],
        ["cursor", "光标"],
        ["mouse", "鼠标"],
        ["keyboard", "键盘"], 
        ["click", "点击"], 
        ["play", "播放"],
        ["document", "文档"],
        ["debug", "调试"],
        ["log", "日志"],
        ["message", "消息"],
        ["warning", "警告"],
        ["IDE", "开发环境"],
        ["video", "视频"],
        ["sevenZip", "7z"],
        ["fsys" , "文件操作"],
        ["win.ui"/*tpa=https://www.aardio.com/zh-cn/doc/js/win.ui*/, "界面库"],
        ["console", "控制台"],
        ["input", "输入"],
        ["output", "输出"],
        ["stream", "流"],
        ["raw", "原生"],
        ["pattern", "模式"],
        ["match", "匹配"],
        ["replace", "替换"],
        ["search", "搜索"],
        ["sort", "排序"],
        ["filter", "过滤"],
        ["transform", "转换"],
        ["encode", "编码"],
        ["decode", "解码"],
        ["compress", "压缩"],
        ["decompress", "解压"],
        ["encrypt", "加密"],
        ["decrypt", "解密"],
        ["hash", "哈希"],
        ["checksum", "校验"],
        ["random", "随机"],
        ["time", "时间"],
        ["date", "日期"],
        ["timer", "定时器"],
        ["clock", "时钟"],
        ["calendar", "日历"],
        ["timezone", "时区"],
        ["locale", "区域"],
        ["format", "格式化"],
        ["parse", "解析"],
        ["stringify", "字符串化"],
        ["serialize", "序列化"],
        ["deserialize", "反序列化"],
        ["config", "配置"],
        ["setting", "设置"],
        ["option", "选项"], 
        ["profile", "配置文件"],
        ["environment", "环境"],
        ["winex","外部窗口"],
        ["listview","列表视图"],
        ["treeview","树视图"],
        ["combobox","组合框"],
        ["edit","文本框"],
        ["richedit","富文本框"],
        ["checkbox","复选框"],
        ["radiobutton","单选按钮"], 
        ["menu","菜单"], 
        ["msgbox","对话框"], 
        ["fsys.dlg"/*tpa=https://www.aardio.com/zh-cn/doc/js/fsys.dlg*/,"文件对话框"],
        ["fsys.dlg.dir"/*tpa=https://www.aardio.com/zh-cn/doc/js/fsys.dlg.dir*/,"文件夹对话框"],
        ["progressbar","进度条"],
        ["slider","滑块"],
        ["scrollbar","滚动条"],
        ["tab","选项卡"], 
        ["tabs","高级选项卡"], 
        ["plus","图像控件"], 
        ["groupbox","分组框"],
        ["splitter","拆分条"],
        ["tooltip","提示"], 
        ["hotkey","热键"], 
        ["win.clip"/*tpa=https://www.aardio.com/zh-cn/doc/js/win.clip*/,"剪贴板"],
        ["printer","打印机"],
        ["screen","屏幕"],
        ["lisbtox","列表框"],
        ["查找字符串","模式匹配"],
        ["gdip","GDI+"],
        ["json","web.json"/*tpa=https://www.aardio.com/zh-cn/doc/js/web.json*/],
        ["each","遍历n"],
        ["enum","枚举"],
        ["http","inet.http"/*tpa=https://www.aardio.com/zh-cn/doc/js/inet.http*/],
        ["wsock","套接字"], 
        ["yaml","web.script.yaml"/*tpa=https://www.aardio.com/zh-cn/doc/js/web.script.yaml*/]
    ]);

    const synonymTranslationMap = new Map([]);
    synonymTranslationMap1.forEach((zh, en) => {
        synonymTranslationMap.set(en, zh);
        synonymTranslationMap.set(zh, en);
    }); 
    synonymTranslationMap1.clear(); 
    delete synonymTranslationMap1;

    const searchClear = document.getElementById('search-clear'); 

    function searchInTree() { 
        const question = searchInput.value.trim().toLowerCase();
        if (!question) return clearSearch();

        let questionWords = question.match(/[\u4e00-\u9fa5]+|[a-zA-Z0-9._-]+/g) || [question];  
        if (!questionWords) return clearSearch();

        // 在 synonymTranslationMap 中 查找 questionWords 的的同义词并添加到 questionWords 中
        const synonyms = new Set(questionWords);
        questionWords.forEach(word => {
            if (synonymTranslationMap.has(word)) {
            synonyms.add(synonymTranslationMap.get(word));
            }
        });
        questionWords = Array.from(synonyms); 

        jTree.querySelectorAll('li').forEach(item => item.classList.add('hidden'));

        function processNode(node) {
            const docLink = node.querySelector('.t>a, .t>span');
            const docTitle = docLink.textContent.toLowerCase();
            const docPath = docLink.href ? docLink.href.replace(/\//g, '.').toLowerCase() : '';

            let isMatch;
            for (let k of questionWords) {
                if (docTitle.includes(k) || docPath.includes(k)) {
                    isMatch = true;
                    break;
                }
            }

            if (isMatch) {
                node.classList.remove('hidden');
                node.querySelectorAll(':scope  > ul > li').forEach(child => child.classList.remove('hidden'));
                node.querySelectorAll(':scope > ul').forEach(ul => ul.classList.add('open'));
                showParents(node);
                return true;
            } else {
                let childrenMatch = false;

                const childNodes = node.querySelectorAll(':scope > ul > li');
                childNodes.forEach(child => {
                    if (processNode(child)) {
                        childrenMatch = true;
                    }
                });

                if (childrenMatch) {
                    node.classList.remove('hidden');
                    node.querySelector('ul').classList.add('open');
                    showParents(node);
                    return true;
                }
            }

            return false;
        }

        function showParents(node) {
            let parent = node.parentElement;
            while (parent && parent !== jTree) {
                if (parent.tagName === 'LI') {
                    parent.classList.remove('hidden');
                }
                if (parent.tagName === 'UL') {
                    parent.classList.add('open');
                }
                parent = parent.parentElement;
            }
        }

        jTree.querySelectorAll(':scope > li').forEach(processNode);

        searchInAiPrompt();
    }

    searchInAiPrompt = debounce(function(){
        try{
            let frameLocation = mainFrame.contentWindow.location.href
            if ( !frameLocation.startsWith('https://www.aardio.com/zh-cn/ai/prompt/') ) {
                mainFrame.src = "https://www.aardio.com/zh-cn/ai/prompt/?q="+encodeURIComponent(searchInput.value);
            }
        }catch(e){
            console.log(e);
        }
    }, 1000);

    function debounce(fn, wait) {
        var timeout = null;
        return function() {
            if(timeout !== null) 
                    clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    } 

    function clearSearch() {
        searchInput.value = '';
        const treeItems = jTree.querySelectorAll('li');
        treeItems.forEach(item => item.classList.remove('hidden'));
        jTree.querySelectorAll('ul').forEach(ul => ul.classList.remove('open'));
    }

    searchInput.addEventListener('input', debounce(searchInTree, 500));
    searchClear.addEventListener('click', clearSearch);

    
    const searchContainer = document.getElementById('search-container'); 

    function updateClearButtonVisibility() {
        if (searchInput.value) {
            searchClear.style.display = 'block';
        } else {
            searchClear.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', updateClearButtonVisibility);
    searchContainer.addEventListener('mouseenter', updateClearButtonVisibility);
    searchContainer.addEventListener('mouseleave', function() {
        if (!searchInput.value) {
            searchClear.style.display = 'none';
        }
    });

    updateClearButtonVisibility(); 

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const queryUrl = getQueryParam('q');
    if (queryUrl) {
    const queryUrl = getQueryParam('q');
        if(queryUrl.endsWith('.html')
            ||queryUrl.endsWith('/')
            ||queryUrl.indexOf('/#')>0
            ||queryUrl.indexOf('/?')>0
            ||queryUrl.indexOf('.html#')>0
            ||queryUrl.indexOf('.html?')>0
        ){
            mainFrame.src = queryUrl;
        }
        else{
            searchInput.value = queryUrl;
            searchInput.dispatchEvent(new Event('input'));
        }
    } 
});