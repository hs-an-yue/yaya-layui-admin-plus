<div align="center">
    <img src="assets/yaya-layui-admin-plus.png" alt="yaya" style="width: 50%;">
</div>

### <div align="center"> 基于Layui2.13+实现的一套极简前端管理模板 </div>
<div align="center">
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/Layui-%3E=2.13+-magenta"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/YaYa Layui Admin Plus-v2.2-deeppink"></a>
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/作者-%E5%A4%9C%E6%B3%8A1990-quartz"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/LICENSE-MIT-tomato"></a>
</div>

## 介绍
`YaYa-Layui-Admin-Plus`是一套基于[LayUI](https://layui.dev/)实现的前端管理模板，项目采用原始单页独立的构建方式，不依赖脚手架，开发者只需要掌握简单的HTML/CSS/JS基础知识即可快速上手开发，开发和维护成本极低。

## 设计初衷
```
1. 降低开发成本: 程序员只需要会简单的HTML/CSS/JS即可快速上手开发,开发成本极低,对应的学习成本也极低.
2. 降低维护成本: 简单的技术栈对应着较低的维护成本(人员招聘成本,技术学习时间成本等)

🌟 需要一套简单的技术栈,降低学习、开发和维护成本. 🚀
```
## 在线预览

```
预览地址 : http://106.14.27.178/
账号密码 : root/123456
```

## 学习路线

<img src="assets/15-yaya-layui-admin-plus-study-line.png" alt="15">

## 模板预览

<table>
    <tr> <td style="width:50%;"> <img src="assets/01-login-01.png" alt=""> </td><td style="width:50%;"><img src="assets/02-login-02.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/03-dashboard.png" alt=""> </td><td style="width:50%;"><img src="assets/04-workbench.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/05-dashboard.png" alt=""> </td><td style="width:50%;"> <img src="assets/06-workbench.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/07-user-list.png" alt=""> </td><td style="width:50%;"> <img src="assets/08-menu-list.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/09-color-list.png" alt=""> </td><td style="width:50%;"> <img src="assets/10-button-list.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/11-person-center.png" alt=""> </td><td style="width:50%;"> <img src="assets/12-menu-tree.png" alt=""> </td></tr>
</table>

## 更新日志

```
2026-08-22      删除无效页面,新增案例页面,优化一些现有页面,新增图标库 🆕 🚀🔥👏💪
2026-08-19      升级Layui版本库到v2.13.9,修复iframe嵌入的页面滚动条不能到浏览器底部的问题
2026-04-06      左侧菜单选中样式优化,顶部选项卡样式优化,主题优化,Layui库升级,其它样式优化
2026-03-04      新增系统监控页面,优化其它样式,发布v2.0-stable版本 
2026-02-28      新增布局组件，修改案例页面的样式为模板定义的样式，并且优化了几个不合理的样式，首页统计样式调整
2026-02-27      新增列表条件搜索组件
2026-02-26      新增标签和徽章组件样式
2026-02-25      新增组件管理菜单项[内部新增按钮管理和图标管理]
2026-02-06      README.md添加【模板使用】部分
2026-02-04      首页的图表显示比较丑,换个一个小清新图表
2026-02-03      对核心配置文件中的首页和个人中心页面进行封装,方便用户在第一个使用时对模板进行定制化配置
2026-02-02      首页点击菜单或者选项卡后,选项卡+面包屑+内容显示添加动画效果
2026-01-29      第一个正式版v1.0发布
2026-01-12      零帧起手
```

## 项目结构
```
yaya-layui-admin-plus
├── assets                                  # README.md文件中显示的图片
├── css                                     # 核心css文件
├────── index.css                               # index.html首页css样式配置文件
├────── menu.css                                # index.html页面左侧菜单栏的css样式配置文件
├────── yaya-common.css                         # 为YaYa模板布局提供了一些常见样式，布局容器、比如容器鼠标移入添加动画、布局面板等
├────── yaya-style-extend.css                   # 为YaYa模板提供了一些扩展样式，例如按钮扩展、标签徽章扩展等
├── data                                    # 模拟数据
├── image                                   # 图片(图标、LOGO等)
├── js                                      # 核心JS文件
├────── yaya-admin-plus.js                      # YaYa模板核心文件,包含菜单生成、选项卡操作、面包屑功能等
├────── xm-select.js                            # 多功能下拉框库(第三方库)
├────── echarts.min.js                          # 图表库(第三方库)
├── layui                                   # Layui核心库
├── views                                   # DEMO页面
├────── dashboard.html	                        # 仪表盘页
├────── dept-add.html	                        # 部门添加
├────── dept-list.html	                        # 部门列表
├────── extend-about.html	                # 关于我
├────── extend-badge.html                       # 徽章和标签扩展
├────── extend-button.html                      # 按钮扩展
├────── extend-color.html                       # 颜色推荐
├────── extend-iconfont.html                    # 字体图标扩展
├────── extend-layout-1.html                    # 布局1(紧凑)
├────── extend-layout-2.html                    # 布局2(舒缓)
├────── extend-search.html                      # 条件搜索扩展
├────── menu-list.html                          # 菜单树形列表
├────── notice-detail.html	                # 消息详情
├────── notice-list.html	                # 消息列表
├────── personal-center.html	                # 个人中心页
├────── personal-center-password-edit.html	# 个人中心修改密码
├────── personal-center-user-edit.html		# 个人中心修改用户
├────── tree-menu1.html		                # 多级菜单1
├────── tree-menu2.html		                # 多级菜单2
├────── tree-menu3.html		                # 多级菜单3
├────── tree-menu4.html		                # 多级菜单4
├────── user-add.html		                # 用户添加
├────── user-import.html		        # 用户导入
├────── user-list.html		                # 用户列表
├────── workbench.html		                # 工作台
├── .gitignore                              # git版本忽略文件
├── DISCLAIMER.md                           # 开源软件的免责声明文件
├── favicon.ico                             # 浏览器选项卡上显示的图标
├── index.html                              # 项目首页
├── LICENSE                                 # 开源协议
├── login1.html		                    # 登录页1
├── login2-government.html	            # 登录页2-适合政企的登录页
├── README.md                               # 介绍文件
```

## 项目下载和配置

### 1. 代码克隆
```
Gitee : git clone https://gitee.com/ukoko/yaya-layui-admin-plus.git
或者
Github: git clone https://github.com/hs-an-yue/yaya-layui-admin-plus.git
```
### 2. 开发工具选择
```
开发工具建议选择 vscode 为什么呢? ↓↓↓↓↓↓↓↓↓↓↓↓ 请看下面 ↓↓↓↓↓↓↓↓↓↓↓↓
```
### 3. 开发工具配置(可选)
```
如果不需要进行前后端联调，这个步骤省略。
在进行前端+后端开发联调时很容易出现跨域问题,使用vscode开发工具可以很方便的解决跨域，解决方式如下:
```
```
1. 首先使用vscode进行原生(html/css/js)前端项目运行时，一般使用vscode中的Live Server插件，此插件不仅可以运行前端应用，还可以解决跨域。
2. 解决跨域的步骤如下:
    第1步 在项目的根目录下创建一个 .vscode 文件夹(不要忘记点)
    第2步 在.vscode文件夹中创建一个settings.json文件
    第3步 在settings.json文件中设置以下内容
        {
          "liveServer.settings.port": 5500, //当前HTTP服务器启动的默认端口号,可以自定义设置,不要冲突即可
          "liveServer.settings.proxy": {
            "enable": true, //开启代理
            "baseUri": "/api", //前端代理(使用此地址代替后端服务器地址),名字自定义
            "proxyUri": "http://127.0.0.1:8080" //服务器地址,修改成服务器端的真实地址即可
          }
        }
这样就解决了跨域的问题,当前这只是方便在开发的时候进行测试和联调.在生产环境,配置nginx即可,这里不做nginx介绍.
3. 配置预览    
```
<table>
    <tr> <td> <img src="assets/13-vscode-proxy.png" alt=""> </td></tr>
</table>

## 项目运行
```
双击项目中的index.html页面,右键按照下面图示进行项目启动
```

<table>
    <tr> <td> <img src="assets/14-vscode-show.png" alt=""> </td></tr>
</table>

## 🚀 参与贡献

> 一人团队  -- 联系邮箱: hd1611756908@163.com
