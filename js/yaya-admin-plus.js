/* yaya-layui-admin-plus 首页JS配置 2026/01/08 16:21:59;author:夜泊1990;email:hd1611756908@163.com;Licensed:MIT */
//声明变量
let $;
let util;
let layer;
let form;
let tabs;
let dropdown;
let dropdownInst;
let element;

layui.use(function (){
    $ = layui.$;
    util = layui.util;
    layer = layui.layer;
    form = layui.form;
    tabs = layui.tabs;
    dropdown = layui.dropdown;
    element = layui.element;

    /*
     * 生成菜单
     */
    $.ajax({
        type:'GET',/* 请求方式 */
        url:'../data/menus.json',/* 地址换成后台地址 */
        headers:{ /* 是否携带token，如果携带token，修改token信息 */
            token:''
        },
        async:false,/* 同步，注意:这里菜单获取一定要设置同步，否则很多事件和样式绑定不成功 */
        dataType:'json',
        success:function (resp) {
            if(resp.code===0){
                let list = resp.data;
                //通过后端数据生成菜单列表
                let menuStr = yaya_general_menu(list);
                $("#yaya-menu").append(menuStr);//将生成的菜单设置到指定位置显示
                //给菜单绑定事件
                dropdown.on('click(yaya-menu)', function(options){
                    //将选项li对应的ID保存到本地存储
                    layui.data('yaya',{
                        key:'yayaId',
                        value:$(this).attr("yaya-id")
                    });
                });
            }else {
                layer.msg(resp.msg);
            }
        }
    });


    //获取html标签元素(只读属性) - 为了进行主题切换
    const htmlEl = document.documentElement;
    //恢复上一次使用的主题
    setTheme(htmlEl)
    //恢复菜单上一次使用的历史
    setMenu();
    //恢复选项卡上一次显示的历史
    setTabs();
    //右侧选项卡宽度初始化
    yaya_tab_width(220);//左侧菜单220px


    /**
     * 标签右键进行标签管理
     */
    dropdownInst = dropdown.render({
        elem: '#yaya-right-tab .layui-tabs-header>li',
        trigger: 'contextmenu',
        data: [{
            title: '关闭其他标签',
            action: 'close',
            mode: 'other'
        }, {
            title: '关闭右侧标签',
            action: 'close',
            mode: 'right'
        }, {
            title: '关闭所有标签',
            action: 'close',
            mode: 'all'
        }],
        click: function(data) {
            let index = this.elem.index(); // 获取活动标签索引
            // 新增标签操作
            if(data.action === 'close') { // 关闭标签操作
                if (data.mode === 'this') {
                    tabs.close('yaya-right-tab', index); // 关闭当前标签
                } else {
                    tabs.closeMult('yaya-right-tab', data.mode, index); // 批量关闭标签
                }
            }
        }
    });

    /*
     *点击菜单 - 左侧导航菜单显示和隐藏
     */
    $("#menu-icon").click(function (){
        //获取导航对象
        const yayaLeft = $(".yaya-left");
        if(!yayaLeft.hasClass("yaya-hidden")){
            yayaLeft.addClass("yaya-hidden")
            yaya_tab_width(0);//解决隐藏和显示因为选项卡宽度固定造成的右侧内容区宽度不够问题
        }else {
            yayaLeft.removeClass("yaya-hidden")
            yaya_tab_width(220);//解决隐藏和显示因为选项卡宽度固定造成的右侧内容区宽度不够问题
        }
    });

    /*
     * 事件绑定
     */
    util.on('lay-on', {
        /* 消息提示事件绑定 */
        'bell-icon':function (){
            layer.open({
                type: 2,
                offset: 'r',
                title:'公告',
                anim: 'slideLeft', // 从右往左
                area: ['500px', '100%'],
                shade: 0.1,
                shadeClose: true,
                content: 'views/bulletin_board.html'
            });
        },
        /* 主题修改 */
        'theme-icon':function (){
            //打开弹出层,并且获取弹出层的层索引(方便后面关闭)
            layer.open({
                type: 1,
                area: ['180px', '100px'], // 宽高
                title: '主题切换',
                closeBtn: 1,
                offset:'50px',
                shadeClose: true, // 点击遮罩关闭层
                content:`
                    <!-- 主题切换 -->
                    <form class="layui-form" style="width: 180px;padding-top: 10px;text-align: center;">
                        <input lay-filter="radio-theme" type="radio" name="theme" value="default" lay-skin="none" checked>
                        <div lay-radio class="lay-skin-tag layui-badge">白色</div>
                        <input lay-filter="radio-theme" type="radio" name="theme" value="dark1" lay-skin="none">
                        <div lay-radio class="lay-skin-tag layui-badge">黑色-1</div>
                        <input lay-filter="radio-theme" type="radio" name="theme" value="dark2" lay-skin="none">
                        <div lay-radio class="lay-skin-tag layui-badge">黑色-2</div>
                    </form>
                `,
                success: function(layero){
                    //回显
                    let yaya = layui.data('yaya');
                    if(yaya && Object.keys(yaya).length>0){
                        if(yaya.theme && yaya.theme.length>0){
                            let body = $(layero);
                            if(yaya.theme === 'default'){//默认颜色
                                body.find('input[value="dark1"]').prop('checked', false);
                                body.find('input[value="dark2"]').prop('checked', false);
                                body.find('input[value="default"]').prop('checked', true);
                            }else if(yaya.theme === 'dark1'){
                                body.find('input[value="dark1"]').prop('checked', true);
                                body.find('input[value="dark2"]').prop('checked', false);
                                body.find('input[value="default"]').prop('checked', false);
                            }else {
                                body.find('input[value="dark1"]').prop('checked', false);
                                body.find('input[value="dark2"]').prop('checked', true);
                                body.find('input[value="default"]').prop('checked', false);
                            }
                        }
                    }
                    //刷新表单(不刷新表单样式不会生效,开关样式,会以默认多选框的样式显示)
                    form.render();
                    //单选框事件
                    form.on('radio(radio-theme)', function (obj) {
                        let value = obj.elem.value;
                        if(value==='default'){
                            //default
                            htmlEl.removeAttribute("data-theme")
                            //保存到本地存储
                            layui.data('yaya',{
                                key:'theme',
                                value:'default'
                            });
                        }else if(value==='dark1'){
                            //dark主题
                            htmlEl.setAttribute('data-theme', 'dark1');
                            layui.data('yaya',{
                                key:'theme',
                                value:'dark1'
                            });
                        }else {
                            //dark主题
                            htmlEl.setAttribute('data-theme', 'dark2');
                            layui.data('yaya',{
                                key:'theme',
                                value:'dark2'
                            });
                        }
                    });
                }
            });
        }
    })


    /**
     * 切换选项卡事件
     */
    tabs.on('afterChange(yaya-right-tab)', function() {
        //获取当前选项卡ID
        let $tabId = $(".layui-tabs-header>li[class='layui-this']").attr("lay-id");
        //刷新
        setMenu($tabId,1);//0:历史记录恢复 1:重新刷新
        //刷新面包导航
        yaya_general_bread($tabId);
        //保存选中记录到本地
        layui.data('yaya',{
            key:'yayaId',
            value:$tabId
        })
    })

    /**
     * 关闭选项卡事件
     */
    tabs.on('afterClose(yaya-right-tab)', function() {
        //获取当前选项卡ID
        let $tabId = $(".layui-tabs-header>li[class='layui-this']").attr("lay-id");
        //刷新
        setMenu($tabId,1);//0:历史记录恢复 1:重新刷新
        //刷新面包导航
        yaya_general_bread($tabId);
        //保存选中记录到本地
        layui.data('yaya',{
            key:'yayaId',
            value:$tabId
        })
    });

    /**
     * 恢复上一次的主题
     * @param htmlEl 通过 此函数获取 const htmlEl = document.documentElement; 获取整个html对象
     */
    function setTheme(htmlEl){
        let yaya = layui.data('yaya');
        //恢复主题
        if(yaya && Object.keys(yaya).length>0){
            if(yaya.theme && Object.keys(yaya.theme).length>0){
                const yaya = layui.data('yaya');
                if(yaya && Object.keys(yaya).length>0){
                    //获取主题名
                    let theme = yaya.theme;
                    if(theme && theme.length>0){
                        if(theme === 'dark1'){
                            //暗色主题1
                            htmlEl.setAttribute('data-theme', 'dark1');
                        }else if(theme === 'dark2'){
                            //暗色主题2
                            htmlEl.setAttribute('data-theme', 'dark2');
                        }else {
                            //默认主题
                            htmlEl.removeAttribute("data-theme")
                        }
                    }else {
                        //默认主题
                        htmlEl.removeAttribute("data-theme")
                    }
                }else {
                    //默认主题
                    htmlEl.removeAttribute("data-theme")
                }
            }else {
                //默认主题
                htmlEl.removeAttribute("data-theme")
            }
        }else {
            //默认主题
            htmlEl.removeAttribute("data-theme")
        }
    }

    /**
     * 恢复菜单到上一次选中的历史
     * @param menu_id 当setMenu用于切换或者关闭选项卡时此参数有效，切换的新的菜单ID
     * @param flag 0:恢复历史记录 1:切换|关闭选项卡
     */
    function setMenu(menu_id='',flag=0) {
        //清除所有选中状态
        let $lis = $(".layui-menu li");
        //移除所有选中
        $lis.removeClass("layui-menu-item-checked");
        if(flag===0){//恢复历史记录
            //从本地缓存中获取选中状态ID
            let yaya = layui.data("yaya");
            if(yaya && Object.keys(yaya).length>0){
                let yayaId_ = yaya.yayaId;
                if(yayaId_){
                    //重新添加选中状态
                    let $selLiEle = $(`.layui-menu li[yaya-id=${yayaId_}]`);
                    //添加选中样式
                    $selLiEle.addClass("layui-menu-item-checked");
                    //获取当前选中元素的所有父级li元素
                    let $parentLis = $selLiEle.parents("li");
                    //去掉所有的选中展开,并且恢复成默认关闭
                    if($parentLis && $parentLis.length>0){
                        $parentLis.each(function (i) {
                            let $pLi = $(this);
                            //是否存在默认值layui-menu-item-up，存在移除掉添加上layui-menu-item-down
                            if($pLi.hasClass("layui-menu-item-up")){
                                $pLi.removeClass("layui-menu-item-up");
                                if(!$pLi.hasClass("layui-menu-item-down")){
                                    //添加
                                    $pLi.addClass("layui-menu-item-down");
                                }
                            }
                        })
                    }
                    //刷新面包导航
                    yaya_general_bread(yayaId_);
                }else {
                    //默认第一个菜单
                    if($lis && $lis.length>0){
                        let first = $($lis[0])
                        if(!first.hasClass("layui-menu-item-group")){
                            first.addClass("layui-menu-item-checked");
                        }
                    }
                }
            }else {
                //默认第一个菜单,如果第一个菜单项是多级菜单,那么不添加默认值
                if($lis && $lis.length>0){
                    let first = $($lis[0])
                    if(!first.hasClass("layui-menu-item-group")){
                        first.addClass("layui-menu-item-checked");
                    }
                }
            }
        }else {//切换|关闭选项卡
            //重新添加选中状态
            let $selLiEle = $(`.layui-menu li[yaya-id=${menu_id}]`);
            //给所有带有子类的菜单的项，都关闭
            $.each($lis,function (i) {
                let $groupLi = $($lis[i])
                if($groupLi.hasClass('layui-menu-item-group')){
                    //全部关闭
                    $groupLi.removeClass("layui-menu-item-down");
                    $groupLi.removeClass("layui-menu-item-up");
                    //添加上收回
                    $groupLi.addClass("layui-menu-item-up");
                }
            })
            //添加选中样式
            $selLiEle.addClass("layui-menu-item-checked");
            //获取当前选中元素的所有父级li元素
            let $parentLis = $selLiEle.parents("li");
            //去掉所有的选中展开,并且恢复成默认关闭
            if($parentLis && $parentLis.length>0){
                $.each($parentLis,function (i) {
                    let $pLi = $($parentLis[i]);
                    //是否存在默认值layui-menu-item-up，存在移除掉添加上layui-menu-item-down
                    if($pLi.hasClass("layui-menu-item-up")){
                        $pLi.removeClass("layui-menu-item-up");
                        if(!$pLi.hasClass("layui-menu-item-down")){
                            //添加
                            $pLi.addClass("layui-menu-item-down");
                        }
                    }
                })
            }
        }
    }

    /*
     * 恢复选项卡到上一次显示的历史
     */
    function setTabs() {
        let yaya = layui.data('yaya');
        if(yaya && Object.keys(yaya).length>0){
            //获取yayaId
            let yayaId = yaya.yayaId;
            //获取需要选项卡展示的菜单内容对象
            let $menu = $(`.layui-menu li[yaya-id=${yayaId}]`);
            //获取地址
            let $yayaUrl = yayaId!=='888888888'?$menu.attr("yaya-url"):'views/personal_center.html';
            //名称
            let $yayaTitle = yayaId!=='888888888'?$menu.attr("yaya-title"):'个人中心';

            if(yayaId==='999999999'){ //默认仪表盘
                tabs.render({
                    elem: '#yaya-right-tab',
                    className:'yaya-tabs',
                    header: [
                        {
                            title: '仪表盘',
                            closable:false,
                            id:'999999999'
                        }
                    ],
                    body: [
                        {
                            /* 默认页面,如果换新的页面,修改此页面 */
                            content: '<iframe style="border: none;width: 100%;height: 100%;" src="views/dashboard.html"></iframe>',
                            id:'999999999'
                        }
                    ],
                    closable:true,
                    index: '999999999'
                });
            }else {
                tabs.render({
                    elem: '#yaya-right-tab',
                    className:'yaya-tabs',
                    header: [
                        {
                            title: '仪表盘',
                            closable:false,
                            id:'999999999'
                        },
                        {
                            title: $yayaTitle,
                            closable:true,
                            id:yayaId
                        }
                    ],
                    body: [
                        {
                            /* 默认页面,如果换新的页面,修改此页面 */
                            content: '<iframe style="border: none;width: 100%;height: 100%;" src="views/dashboard.html"></iframe>',
                            id:'999999999'
                        },
                        {
                            /* 默认页面,如果换新的页面,修改此页面 */
                            content: `<iframe style="border: none;width: 100%;height: 100%;" src="${$yayaUrl}"></iframe>`,
                            id:yayaId
                        }
                    ],
                    closable:true,
                    index: yayaId
                });
            }
        }else {
            //默认首页
            tabs.render({
                elem: '#yaya-right-tab',
                className:'yaya-tabs',
                header: [
                    {
                        title: '仪表盘',
                        closable:false,
                        id:'999999999'
                    }
                ],
                body: [
                    {
                        /* 默认页面,如果换新的页面,修改此页面 */
                        content: '<iframe style="border: none;width: 100%;height: 100%;" src="views/dashboard.html"></iframe>',
                        id:'999999999'
                    }
                ],
                closable:true,
                index: '999999999'
            });
        }

    }

});
/**
 * 面包屑显示
 * @param menu_id 当前选中菜单以及它的父级菜单
 */
function yaya_general_bread(menu_id='') {
    /**
     * 菜单分两种
     * 1. 个人中心菜单,没有父级菜单,不属于左侧导航中的菜单
     * 2. 左侧导航中的菜单,可能一级,可能多级
     */
    if(menu_id==='888888888'){
        //个人中心
        $('.layui-breadcrumb').html('<a><cite>个人中心</cite></a>');
    }else {//左侧菜单
        let arr=[];
        //获取左侧点击(选中)的菜单
        let $selMenu = $(`.layui-menu li[yaya-id='${menu_id}'`);
        //获取当前点击的内容
        let $selText = $selMenu.text().trim();
        arr.push($selText);
        //父类的菜单
        let $parentLis = $selMenu.parents("li");
        if($parentLis && $parentLis.length>0){
            $.each($parentLis,function (i) {
                let $parentText = $($parentLis[i]).children(".layui-menu-body-title").text().trim();
                arr.push($parentText);
            });
        }
        //转换
        let str=[];
        if(arr.length===1){
            str.push(`<a><cite>${arr[0]}</cite></a>`);
        }else {
            $.each(arr,function (i) {
                if(i===0){
                    str.push(`<a><cite>${arr[i]}</cite></a>`);
                }else {
                    str.push(`<a>${arr[i]}</a>`);
                }
            });
        }
        //设置到指定位置
        $('.layui-breadcrumb').html(str.reverse().toString());
    }
    //刷新
    element.render('breadcrumb', 'yaya-breadcrumb');
}

/**
 * 点击左侧菜单 - 右侧选项卡添加选项卡标签 + 右侧内容显示区显示左侧点击的菜单内容
 * @param menu_id        菜单ID
 * @param menu_title     菜单标题
 * @param menu_url       跳转的url地址
 */
function yaya_add(menu_id, menu_title, menu_url) {
    if(menu_id && menu_title && menu_url){
        /*
         * 判断右侧选项卡是否存在,如果存在直接切换,如果不存在创建选项卡
         */
        //获取所有选项卡
        let navs = $(".layui-tabs .layui-tabs-header li[lay-id]");
        //声明一个变量,存储是否存在tab选项卡
        let isExist = false;//默认不存在
        $.each(navs,function (){
            let lay_id = $(this).attr("lay-id");
            if(lay_id===menu_id){
                isExist = true;
            }
        })
        //如果不存在
        if(!isExist){
            tabs.add('yaya-right-tab', {
                title: menu_title,
                id:menu_id,
                content: '<iframe style="border: none;width: 100%;height: 100%;" src="'+menu_url+'"></iframe>',
                done: function(data) {
                    dropdown.render($.extend({}, dropdownInst.config, {
                        elem: data.headerItem // 新标签头元素
                    }));
                }
            });
        }else {
            //切换
            tabs.change('yaya-right-tab', menu_id, true)
        }
        //面包屑导航
        yaya_general_bread(menu_id);
    }else {
        console.error("菜单跳转失败,缺少必要参数",menu_id,menu_title,menu_url)
    }
}

/**
 * 生成左侧导航菜单的函数
 * @param list          后端返回的菜单数据
 * @param field         如果后端返回的json数据的属性和yaya_general_menu函数的field参数属性对应不上，可以采用field进行映射配置
 * field参数格式
 *
 * @returns {string}    生成好的导航菜单字符串
 */
function yaya_general_menu(list=[],field={}) {
    let str='';
    if(list && list.length>0){
        //菜单循环
        for (let i = 0; i < list.length; i++) {
            let menu = list[i];
            //菜单ID
            let menuId = menu[(field && field.menuId)?field.menuId:'menuId']
            //菜单名称
            let menuTitle = menu[(field && field.menuTitle)?field.menuTitle:'menuTitle']
            //菜单类型
            let menuType = menu[(field && field.menuType)?field.menuType:'menuType']
            //菜单地址
            let menuUrl = menu[(field && field.menuUrl)?field.menuUrl:'menuUrl']
            //菜单图标
            let menuIcon = menu[(field && field.menuIcon)?field.menuIcon:'menuIcon']
            //子菜单
            let children = menu[(field && field.children)?field.children:'children']
            /*
             * 菜单分两类
             *  第一类: 可以进行点击跳转的菜单
             *  第二类: 可以点击，但是不能跳转，但是能展开子菜单
             */
            if(menuType===2){//可以跳转的菜单
                str+=`
                    <li yaya-id="${menuId}" yaya-title="${menuTitle}" yaya-url="${menuUrl}" onclick="yaya_add('${menuId}','${menuTitle}','${menuUrl}')">
                        <div class="layui-menu-body-title">
                            <a><span><i class="${menuIcon}"></i>&nbsp;&nbsp;${menuTitle}</span></a>
                        </div>
                    </li>   
                `;
            }else { //展开子菜单的菜单
                if(children && children.length>0){
                    if(menuType===1){//展开子菜单菜单项
                        str+=`
                            <li yaya-id="${menuId}" class="layui-menu-item-group layui-menu-item-up">
                                <div class="layui-menu-body-title">
                                    <a><span><i class="${menuIcon}"></i>&nbsp;&nbsp;${menuTitle}</span></a><i class="layui-icon layui-icon-up"></i>
                                </div>
                        `;
                            str+=`<ul>`;
                                str+=yaya_general_menu(children,field);
                            str+=`</ul>`;
                        str+=`</li>`;
                    }
                }
            }
        }
    }
    return str;
}

/**
 * 刷新页面(页面刷新图标，直刷新选项卡对应的iframe标签下的内容)
 */
function yaya_refresh() {
    let $tab = $(".layui-tabs-header>li.layui-this");
    if($tab){
        let layId = $tab.attr("lay-id");
        //获取内容显示
        let $contents = $(".layui-tabs-body>.layui-tabs-item");
        if($contents && $contents.length>0){
            $.each($contents,function (i) {
                let $layIdContent = $($contents[i]).attr("lay-id")
                if($layIdContent === layId){
                    let $iframe = $($contents[i]).find("iframe");
                    if($iframe){
                        //刷新  - 注意 iframe的src属性对应的地址要和父页面同源
                        $iframe[0].contentWindow.location.reload();
                    }
                }
            })
        }
    }
}

/**
 * 右侧选项卡过多时,会挤压左侧菜单，当前函数功能是固定右侧选项卡宽度，防止选项卡过多挤压左侧导航菜单
 */
function yaya_tab_width(w=0) {
    //视口宽度
    let innerWidth = window.innerWidth;
    //选项卡宽度
    let tabWidth = innerWidth-w; // 220是左侧菜单栏的宽度，如果菜单栏宽度调整，这个数据要需要调整
    //初始化选项卡宽度（不设置宽度，选项卡超过边界后会挤压整个视口的水平宽度）
    $("#yaya-right-tab").css({width:tabWidth})
}



