[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: UWP 应用 - 查看工具

```aardio aardio
//应用列表
import win.ui;
import win.ui.menu;
import fonts.fontAwesome;
/*DSG{{*/
var winform = win.form(text="UWP 应用 - 查看工具";right=1150;bottom=666;bgcolor=16777215)
winform.add(
editCode={cls="plus";left=10;top=624;right=969;bottom=654;align="right";autohscroll=false;autovscroll=false;border={bottom=1;color=-4144960};dr=1;dt=1;editable="edit";font=LOGFONT(h=-13);textPadding={top=10;bottom=3};z=5};
listview={cls="listview";left=8;top=41;right=1138;bottom=617;acceptfiles=1;asel=false;bgcolor=16777215;db=1;dl=1;dr=1;dt=1;edge=1;font=LOGFONT(name='SimSun');fullRow=1;gridLines=1;hide=1;vscroll=1;z=1};
openMicrosoftStore={cls="plus";text="打开应用商店";left=974;top=625;right=1110;bottom=657;color=8388608;db=1;dr=1;notify=1;textPadding={left=5};z=4};
plusLoading={cls="plus";left=368;top=195;right=739;bottom=457;color=15780518;db=1;dl=1;dr=1;dt=1;font=LOGFONT(h=-96;name='FontAwesome');iconStyle={font=LOGFONT(h=-96;name='FontAwesome')};iconText='\uF254';z=2};
plusSearch={cls="plus";left=727;top=3;right=1136;bottom=33;align="right";autohscroll=false;autovscroll=false;border={bottom=1;color=-4144960};dr=1;dt=1;editable=1;font=LOGFONT(h=-13);hide=1;textPadding={top=10;bottom=3};valign="top";z=3}
)
/*}}*/

import win.ui.grid;
var grid = win.ui.grid(winform.listview);
var reloadItemData = function(){
    thread.invoke(
        function(winform,grid){
            winform.plusLoading.hide = false;
            winform.plusSearch.hide = true;
            winform.listview.hide = true;
            winform.plusLoading.disabledText = {'\uF254';'\uF251';'\uF252';'\uF253';'\uF250'}

            import com.shell;

            var dataTable = {}
            for i,item in com.shell.eachApp(){
                if(string.find(item.path,"!")){
                    table.push( dataTable,{
                        displayName = item.name;
                        aumid = item.path
                    })
                }
            }

            var word = string.trim(winform.plusSearch.text);
            if(#word){
                word = "@@" + word;
                dataTable = table.filter(dataTable
                    ,lambda(v) string.find(v.displayName,word) || string.find(v.aumid,word)  )
            }

            dataTable.fields = {"displayName","aumid"}
            if(grid.sortColumn){
                var name = dataTable.fields[grid.sortColumn];
                if(name){
                    if(!grid.sortDesc){
                        table.sort(dataTable,function(b){
                            return owner[name] < b[name]
                        })
                    }
                    else {
                        table.sort(dataTable,function(b){
                            return owner[name] > b[name]
                        })
                    }
                }
            }

            grid.setTable( dataTable )
            sleep(300);

            winform.plusLoading.disabledText = null;
            winform.plusLoading.hide = true;
            winform.listview.hide = false;
            winform.plusSearch.hide = false;

            winform.resize();

        },winform,grid
    )
}

grid.onSortColumn = function(column,desc){
    grid.sortDesc = desc;
    grid.sortColumn = column ;
    reloadItemData();
    return true;
}

grid.onEditChanged = function(text,iItem,iSubItem){
    return false; //禁止编辑
}

winform.adjust = function( cx,cy,wParam ) {
    winform.listview.fillParent();
};

import win.debounce;
winform.plusSearch.editBox.onChange = win.debounce(function(){
    if(#winform.plusSearch.text) reloadItemData();
})

import com.shell;
winform.listview.onnotify = function(id,code,ptr){

    select(code) {
        case 0xFFFFFFFB/*_NM_RCLICK*/  {

            var x,y = win.getCursorPos();
            winform.popmenu = win.ui.popmenu(winform);

            if(1===#winform.listview.selected){
                var item,path = winform.listview.getSelection(,2);
                winform.popmenu.add("运行",function(id){
                    import com.shell;
                    com.shell.activateApp(path);
                });
            }

            winform.popmenu.popup(x,y,true);
        };
        case 0xFFFFFFFE/*_NM_CLICK*/{
            var item,path = winform.listview.getSelection(,2);
            winform.editCode.text = `com.shell.activateApp("`+path+`")`;
        }
    }
}

winform.onOk = function(){
    winform.plusSearch.setFocus()
}

winform.plusSearch.setCueBannerText("输入应用名（支持模式匹配�?);
winform.listview.setExtended(0x10000/*_LVS_EX_DOUBLEBUFFER*/);
winform.listview.insertColumn("应用�?,300)
winform.listview.insertColumn("AUMID",300)

reloadItemData();

winform.plusSearch.editBox.onOk = function(){
    reloadItemData();
    return true;
}

winform.show();
import win.dlg.message;
if(!_WIN10_LATER){
    winform.msgWarn("本程序仅支持 Windows 10");
}

winform.openMicrosoftStore.skin({
    color={
        active=0xFF00FF00;
        default=0xFF000080;
        disabled=0xFF6D6D6D;
        hover=0xFFFF0000
    }
})
winform.openMicrosoftStore.oncommand = function(id,event){

    //打开应用商店，且修复 ms-windows-store:// 协议
    com.shell.activateApp("Microsoft.WindowsStore_8wekyb3d8bbwe!App");

    /*
    有时候系统出现问�?ms-windows-store 协议可能用不了，下面的方法就打不开�?    �?com.shell.activateApp("Microsoft.WindowsStore_8wekyb3d8bbwe!App") 可以打开�?    而且打开一次，ms-windows-store 协议就正常了�?    */
    //process.execute("ms-windows-store://home")
}

winform.editCode.setCueBannerText("单击列标题可排序，双击列表项可复制，右键点列表项可弹出菜单，回车搜索或刷�?);
win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/System/Settings/eachApp.md)

