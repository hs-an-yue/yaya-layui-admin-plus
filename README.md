<div align="center">
    <img src="assets/yaya-layui-admin-plus.png" alt="yaya" style="width: 80%;">
</div>

---

# <div align="center">YaYa-Layui-Admin-Plus</div>
#### <div align="center"> 基于前端框架Layui2.13+开发的一套极简后台管理模板 </div>
<div align="center">
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/Layui-%3E=2.13.3-magenta"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/YaYa Layui Admin Plus-v1.3-deeppink"></a>
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/Author-%E5%A4%9C%E6%B3%8A1990-quartz"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/LICENSE-MIT-tomato"></a>
</div>

#### 介绍
`YaYa-Layui-Admin-Plus` 基于 [Layui](https://layui.dev/) 框架实现的一套 <strong>简单</strong>、<strong>方便</strong>、<strong>国产化</strong> 前端管理模板，`Layui`虽然是一套前端`UI`框架，但是作者设计的理念并不是为前端程序员设计，而是为了后端程序员设计，让后端程序员告别繁琐的前端配置，只需要简单的了解`HTML/CSS/JS`在加上`Layui`官网，就可以快速开发出属于自己的系统,`Layui`的`UI`组件没有那么丰富多彩，但是他的交互方式简单方便，结合后端程序可以快速建站。

#### 开发初衷

```
1. 零构建: 让开发回归简洁
2. 降低门槛: 无需学习复杂的脚手架
3. 快速交付: 引入即用,无需编译等待
4. 易于维护: 回归标准,代码直观,成本低,对后端开发者极度友好
```

#### 更新日志

```
2026-02-06      README.md添加【模板使用】部分
2026-02-04      首页的图表显示比较丑,换个一个小清新图表
2026-02-03      对核心配置文件中的首页和个人中心页面进行封装,方便用户在第一个使用时对模板进行定制化配置
2026-02-02      首页点击菜单或者选项卡后,选项卡+面包屑+内容显示添加动画效果
2026-01-29      第一个正式版v1.0发布
2026-01-12      零帧起手
```

#### 在线预览

```angular17html
地址        : http://106.14.27.178/
用户名密码   : 随便填(没有后台只有前端样式)
```

#### 模板预览

<table>
    <tr> <td style="width:50%;"> <img src="assets/01-login-01.png" alt=""> </td><td style="width:50%;"><img src="assets/02-login-02.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/03-login-03.png" alt=""> </td><td style="width:50%;"><img src="assets/04-login-04.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/39-login-05.png" alt=""> </td><td style="width:50%;"><img src="assets/40-login-06.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/05-dashboard.png" alt=""> </td><td style="width:50%;"><img src="assets/06-workbench.png" alt=""></td></tr>
    <tr> <td style="width:50%;"> <img src="assets/09-dashboard.png" alt=""> </td><td style="width:50%;"> <img src="assets/07-bulletin-board.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/10-dashboard.png" alt=""> </td><td style="width:50%;"> <img src="assets/08-person-center.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/11-user-list.png" alt=""> </td><td style="width:50%;"> <img src="assets/12-dept-list.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/13-user-log.png" alt=""> </td><td style="width:50%;"> <img src="assets/14-sys-log.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/15-about.png" alt=""> </td><td style="width:50%;"> <img src="assets/16-pwd-change.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/19-demo-bootstrap5.png" alt=""> </td><td style="width:50%;"> <img src="assets/20-demo-element-plus.png" alt=""> </td></tr>
    <tr> <td style="width:50%;"> <img src="assets/21-demo-naive-ui.png" alt=""> </td><td style="width:50%;"> <img src="assets/22-demo-view-ui.png" alt=""> </td></tr>
</table>

#### 项目下载和配置

1.  代码克隆
```
Gitee : git clone https://gitee.com/ukoko/yaya-layui-admin-plus.git
或者
Github: git clone https://github.com/hs-an-yue/yaya-layui-admin-plus.git
```
2.  开发工具选择
```
开发工具建议选择 vscode 为什么呢? ↓↓↓↓↓↓↓↓↓↓↓↓ 请看下面 ↓↓↓↓↓↓↓↓↓↓↓↓
```
3.  开发工具配置(可选)
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
    <tr> <td> <img src="assets/17-vscode-proxy.png" alt=""> </td></tr>
</table>

#### 项目结构
```
yaya-layui-admin-plus
├── assets                      # Gitee或者Github上README.md文件中显示的图片
├── css                         # yaya-layui-admin-plus模板的核心css文件
├────── index.css               # index.html首页的核心css
├────── menu.css                # index.html首页中左侧导航区域(菜单+LOGO+TITLE)的核心css
├────── yaya-common.css         # 整个模板中大部分页面需要用到的公共css配置在这里(这个属于个人喜好)
├── data                        # yaya-layui-admin-plus模板中的测试数据(例如左侧菜单生成数据,用户测试数据,部门测试数据等)
├── image                       # yaya-layui-admin-plus模板中用到的图片(登陆页面的背景图、网站用到的图标等)
├── js                          # yaya-layui-admin-plus模板中的核心JS文件
├────── yaya-admin-plus.js      # yaya-layui-admin-plus模板的核心JS文件(包含整个模板的核心功能的核心函数,例如 左侧菜单实现、选项卡实现等)
├────── xm-select.js            # 多功能下拉框库(第三方库)
├────── echarts.min.js          # 图表库(第三方库)
├── layui                       # Layui核心库
├── views                       # yaya-layui-admin-plus模板中提供的一些案例页面(不喜欢可以全部删掉,用户自己重新添加)
├────── about.html	        # 关于我页
├────── bulletin_board.html     # 公告通知页(内容由模型生成)
├────── dashboard.html		# 仪表盘页(首页)
├────── dept-list.html		# 部门页(内容由模型生成)
├────── login-log.html		# 登陆日志页(内容由模型生成)
├────── personal_center.html	# 个人中心页
├────── pwd_change.html		# 修改密码页
├────── system-log.html		# 系统日志页(内容由模型生成)
├────── template.html		# 模板页(复制整个页面生成新的页面，比较快，没什么实际意义)
├────── test1.html		# 多级测试页1 - 内容由模型生成 - 其它前端技术(BootStrap5)应用页
├────── test2.html		# 多级测试页2 - 内容由模型生成 - 其它前端技术(Element Plus)应用页
├────── test3.html		# 多级测试页3 - 内容由模型生成 - 其它前端技术(Naive UI)应用页
├────── test4.html		# 多级测试页4 - 内容由模型生成 - 其它前端技术(View UI Plus)应用页
├────── user-list.html		# 用户页
├────── workbench.html		# 工作台页
├── .gitignore                  # Git配置文件,用于版本控制管理
├── DISCLAIMER.md               # 开源软件的免责声明文件
├── favicon.ico                 # yaya-layui-admin-plus模板在预览时,浏览器选项卡上显示的图标
├── index.html                  # yaya-layui-admin-plus模板首页
├── LICENSE                     # 开源软件的开源协议(MIT协议)
├── login.html		        # 登录页1
├── login2.html			# 登录页2
├── login3.html			# 登录页3
├── login4-government.html	# 登录页4(模型生成)
├── login5-aerospace.html	# 登录页5(模型生成)
├── login6-chemistry.html	# 登录页6(模型生成)
├── README.md                   # yaya-layui-admin-plus模板的介绍文件

```
#### 项目运行
```
双击项目中的index.html页面,右键按照下面图示进行项目启动
```

<table>
    <tr> <td> <img src="assets/18-vscode-show.png" alt=""> </td></tr>
</table>

#### 模板使用

##### 1. 默认首页配置
首页左侧菜单的内容正常由后台控制生成，但是一般情况下左侧菜单的内容会留下一个默认菜单项，这个菜单由前端配置，不走后端，说一下默认菜单配置。<strong>配置如下:</strong>

<img src="assets/41-config.png" alt="config">

```
结合上图，仪表盘为前端配置的默认菜单(我这里叫仪表盘,有的企业叫首页或者其它名字)

默认首页的配置需要修改的位置: 
    1. 左侧默认菜单
    2. 顶部默认面包屑导航
    3. 顶部默认选项卡
    
默认首页的配置需要修改的文件: 
    1. 左侧默认菜单修改的文件
        1.1 index.html (大概在41行~50行)
            <!-- 导航菜单 采用的手风琴效果 -->
            <ul class="layui-menu" id="yaya-menu" lay-accordion>
                <!-- 
                    菜单项-默认菜单
                    yaya-id: 标记默认菜单的唯一值(取一个特殊值,不能与后台的菜单ID重复,否则菜单会报错)
                    yaya-url: 点击菜单后跳转的地址,有的菜单是带有跳转功能的
                    yaya-title: 菜单名称
                    yaya_add(参数1,参数2,参数3): 函数
                        参数1: 菜单ID,和yaya-id属性相同,保证不能与数据库菜单相同,保证唯一
                        参数2: 选项卡名称,点击菜单时右侧顶部生成选项卡,选项卡名字和菜单名字相同,所以此参数和yaya-title属性相同
                        参数3: 右侧内容区域显示的内容页面，设置菜单的跳转地址,不一定和yaya-url属性相同,有的菜单没有yaya-url属性,只有带有跳转的菜单才有yaya-url属性.
                    下面的a标签中的仪表盘,也需要同步修改，修改成企业需要的名称    
                 -->
                <li yaya-id="999999999" yaya-url="views/dashboard.html" yaya-title="仪表盘" onclick="yaya_add('999999999', '仪表盘', 'views/dashboard.html')" class="layui-menu-item-checked"><!-- 默认选中 -->
                    <div class="layui-menu-body-title">
                        <a><span><i class="layui-icon layui-icon-chart-screen"></i>&nbsp;&nbsp;仪表盘</span></a>
                    </div>
                </li>
                <!-- 其它菜单由后端动态生成 ... -->
            </ul>
            
        1.2 yaya-admin-plus.js (大概在382行~383行,需要修改的代码在setTabs()函数中)
            let welcomeYayaId='999999999'; // welcomeYayaId值与上面的yaya-id属性值相同
            let welcomeYayaTitle='仪表盘';  // welcomeYayaTitle值与上面的yaya-title属性值相同
            let welcomeYayaUrl='views/dashboard.html';//welcomeYayaUrl与上面的yaya_add()函数的参数3相同
            
    2. 顶部默认面包屑导航需要求改的文件
        2.1 index.html (大概在63行~66行)
            <!--面包屑菜单-->
            <span class="layui-breadcrumb" lay-filter="yaya-breadcrumb" style="margin-left: 15px;">
              <!-- 
                   默认面包屑导航值,和菜单yaya-title属性值对应上
               -->
              <a><cite>仪表盘</cite></a>
            </span>
                    
    3. 顶部默认选项卡(不需要单独修改)
        3.1 在上面 1.左侧默认菜单修改的文件的1.2中已经配置过,所以不需要单独配置 
```

---

##### 2. 个人中心页配置
个人中心(有的企业叫其它名字,例如用户配置)功能比较特殊,在点击的时候会和左侧菜单一样在顶部生成选项卡,也还需要和顶部面包屑导航产生联动

<img src="assets/42-person-center.png" alt="person">

```
修改的文件:
    1. index.html(大概在81行左右)
        <dl class="layui-nav-child">
            <!-- 
                yaya_add(参数1,参数2,参数3):函数
                    参数1: 参数1这个值随便给,但是不能与左侧菜单中的yaya-id属性相同,否则会出现选项卡切换混乱问题
                    参数2: 选项卡名称,名字自定义
                    参数3: 点击个人中心跳转的具体的页面地址
                a标签中的内容,一般与参数2相同    
             -->
            <dd><a onclick="yaya_add('888888888','个人中心','views/personal_center.html')">个人中心</a></dd>
            <dd id="pwdChange"><a>修改密码</a></dd>
            <dd><a href="login.html">退出</a></dd>
        </dl>
    2. yaya-admin-plus.js (大概在385行~387行和491行~494行两部分)
        2.1 第一部分修改的代码在setTabs()函数中
            let personYayaId='888888888'; //与上面的参数1对应
            let personYayaTitle='个人中心'; //与上面的参数2对应
            let personYayaUrl='views/personal_center.html';//与上面的参数3对应
            
        2.2 第二部分修改的代码在yaya_general_bread()函数中
            if(menu_id==='888888888'){ //888888888与上面的参数1对应
                                                    //与上面的参数2对应
                $('.layui-breadcrumb').html('<a><cite>个人中心</cite></a>');
            }
```

---

##### 3. 首页LOGO配置

<img src="assets/43-logo-title.png" alt="logo">

```
修改的文件: 
    1. index.html (大概在35行~40行)
        <div class="yaya-logo">
            <!-- LOGO图标 -->
            <svg t="1769259060319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5060" width="25" height="25"><path d="M150.320611 720.240765c7.749498-8.218172 20.813025-8.218172 28.562523 0 7.995091 7.525394 7.995091 20.589944 0 29.05371l-50.559513 50.336432c-7.994068 8.218172-21.305235 8.218172-29.031197 0-8.017604-7.995091-8.017604-20.813025 0-29.031197L150.320611 720.240765 150.320611 720.240765zM786.42514 365.541347 786.42514 365.541347c0 70.167083-56.856939 126.800941-127.024022 126.800941s-127.269615-56.633858-127.269615-126.800941c0-69.654406 57.102532-126.778428 127.269615-126.778428S786.42514 295.374264 786.42514 365.541347L786.42514 365.541347zM659.401118 279.406594 659.401118 279.406594c-47.656393 0-86.11224 38.232766-86.11224 86.134753 0 47.433312 38.455847 85.666078 86.11224 85.666078 47.433312 0 86.157265-38.232766 86.157265-85.666078C745.55736 317.638337 706.83443 279.406594 659.401118 279.406594L659.401118 279.406594zM190.495612 645.964084 190.495612 645.964084c0-26.352181 1.452071-52.257178 4.846378-78.608336 1.429559-9.223059 2.411933-18.401092 4.109598-27.603685l-7.258311 2.90312c-16.703427 6.789637-32.180933 16.705474-45.981241 29.52443-13.778818 12.594853-35.329646 11.858072-48.14758-1.675152-2.411933-3.148713-4.600785-5.828752-5.806239-8.977465-21.281699-42.341341-28.048823-89.997734-20.791535-135.711891 7.258311-45.490054 28.048823-88.345094 62.908772-123.161041l0 0 0 0c31.44313-32.202423 70.88135-52.257178 111.74913-61.234643 34.859949-7.258311 70.680782-6.297426 105.519242 2.680039l6.274914-6.297426 0.5137-0.959861-0.5137 0c73.561389-73.092715 162.621774-122.669854 256.483512-147.83807 97.256044-26.396183 199.849654-26.396183 297.127188 0 12.349259 3.148713 21.282722 12.573363 24.431435 24.185842l0 0.491187 0 0.245593c25.882484 97.010451 25.882484 199.378933-0.245593 296.390407-25.145703 93.637634-74.745355 183.145204-148.061151 256.215406l-2.188852 2.434445-4.823865 4.355191c9.42465 34.367739 10.161431 70.635757 2.657526 105.496729-8.709359 40.644699-29.05371 79.83528-60.989049 111.547539l-1.919722 1.944282c-34.369785 33.363875-76.934207 53.953819-121.241318 61.189617-46.205345 7.034207-94.107331 0.245593-137.185452-21.282722-16.458857-8.218172-23.224957-29.031197-14.984273-45.735647 1.429559-2.657526 3.394307-5.560646 5.783727-7.995091 12.595876-13.533224 22.756283-29.255301 29.544897-45.736671l2.90312-7.480368c-9.200546 1.697665-18.893302 3.148713-28.071336 4.353145-27.111474 3.640923-54.199413 4.847401-81.310887 4.601808-9.178033 0-17.396205-3.617387-23.693632-9.44614l0 0L199.920262 672.828942C192.908568 665.348574 189.513238 655.901411 190.495612 645.964084L190.495612 645.964084zM262.584464 576.288189 262.584464 576.288189c-2.390443 19.361977-3.864004 38.969547-4.332678 58.08593l132.115993 132.339074c19.339464-0.468674 38.70144-2.166339 58.040904-4.600785 23.493064-3.1262 47.210231-7.503904 70.167083-14.270005 3.394307-0.959861 7.258311-1.452071 10.898211-1.205455 18.647709 0.468674 33.631982 16.458857 32.649608 35.329646-0.959861 26.373671-6.744611 52.257178-16.905018 77.1798-3.885494 8.463766-8.240685 17.418718-13.08604 25.882484 18.401092 4.131087 37.517475 4.600785 56.387241 0.982374 30.728862-5.091972 60.229756-18.893302 84.437088-42.341341l1.206478-1.473561c22.509666-21.99699 36.310997-49.599651 42.36283-77.894068 6.744611-29.523407 4.109598-60.497862-6.788613-89.037872-4.846378-12.103666-1.452071-27.334555 9.178033-36.780695l10.652618-10.18292 8.486278-8.686846 1.205455-1.227967c65.321728-64.829518 108.869546-143.460366 130.642432-225.486544 21.305235-79.122035 23.24747-163.067936 4.846378-243.173368-79.837326-17.909905-163.090449-15.968693-242.436588 5.069459-82.761935 22.286586-161.14719 66.056462-226.000244 130.910539l-9.44614 9.178033-0.223081 0-9.178033 10.18292c-9.223059 10.875698-24.208355 15.497972-38.008662 9.915837-28.541033-10.875698-59.761082-12.842493-88.792279-6.54302-28.54001 5.828752-55.897078 20.098757-78.162174 42.341341l0-0.223081c-24.430412 24.431435-38.946011 54.199413-43.793412 86.134753-3.148713 18.155499-2.90312 37.494962 0.982374 56.142671 8.709359-4.868891 17.418718-9.44614 26.128077-13.087063 24.677029-10.161431 50.314942-15.477506 76.44302-17.173125 3.6399 0 7.770987 0.245593 11.142781 1.695618 18.401092 4.356214 28.562523 23.695678 23.694655 41.605583C270.824125 529.122983 265.977747 552.839127 262.584464 576.288189L262.584464 576.288189zM276.139178 845.835228 276.139178 845.835228c7.749498-7.972579 20.567431-7.972579 28.562523 0 8.240685 7.995091 8.240685 20.813025 0 28.785603l-50.805106 50.827619c-7.995091 7.726985-20.813025 7.726985-28.54001 0-8.240685-7.749498-8.240685-21.305235 0-28.785603L276.139178 845.835228 276.139178 845.835228zM213.230406 782.680862 213.230406 782.680862c7.748475-7.749498 20.567431-7.749498 28.562523 0 8.240685 8.240685 8.240685 21.058618 0 29.05371L126.603443 927.123602c-7.972579 7.995091-20.790512 7.995091-28.54001 0-8.463766-8.218172-8.463766-21.058618 0-29.031197L213.230406 782.680862 213.230406 782.680862z" fill="var(--tab-text)" p-id="5061"></path></svg>
            <!-- 标题 -->
            <h4>丫A丫A</h4>
        </div>
    LOGO是svg图片,也可以换成任意格式的图片例如png,svg格式的图片便于设置LOGO的颜色随主题变化
```

---

##### 4. 页面页脚配置

<img src="assets/44-footer-config.png" alt="footer">

```
修改的文件:
    1. 所有的登录页(login*.html)
        <!-- 网站底部 -->
        <div class="layui-footer login-footer">
            Copyright © 2026 YaYa-Layui-Admin-Plus <svg t="1769072378478" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="15" height="15"><path d="M780.288 750.592H244.736V415.744C244.736 229.376 396.288 79.872 460.8 24.576c29.696-24.576 71.68-24.576 101.376 0 65.536 55.296 217.088 204.8 217.088 391.168v334.848z m-453.632-81.92h371.712V415.744c0-150.528-128-277.504-186.368-326.656-57.344 49.152-186.368 176.128-186.368 326.656v252.928zM509.952 87.04z" fill="#16b777" p-id="4956"></path><path d="M326.656 750.592H148.48c-43.008 0-78.848-34.816-78.848-78.848v-76.8c0-26.624 13.312-51.2 34.816-65.536l221.184-146.432v367.616z m-175.104-81.92h92.16v-133.12l-92.16 61.44v71.68zM875.52 750.592H697.344V384l221.184 146.432c22.528 14.336 34.816 38.912 34.816 65.536v76.8c1.024 41.984-34.816 77.824-77.824 77.824z m-96.256-81.92h92.16v-71.68l-92.16-61.44v133.12zM513.024 489.472c-64.512 0-116.736-52.224-116.736-116.736S449.536 256 513.024 256s116.736 52.224 116.736 116.736-52.224 116.736-116.736 116.736z m0-151.552c-18.432 0-34.816 15.36-34.816 34.816s15.36 34.816 34.816 34.816 34.816-15.36 34.816-34.816S532.48 337.92 513.024 337.92zM512 1017.856c-22.528 0-40.96-18.432-40.96-40.96v-163.84c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v163.84c0 22.528-18.432 40.96-40.96 40.96zM351.232 953.344c-22.528 0-40.96-18.432-40.96-40.96v-66.56c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v66.56c0 22.528-18.432 40.96-40.96 40.96zM673.792 953.344c-22.528 0-40.96-18.432-40.96-40.96v-66.56c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v66.56c0 22.528-18.432 40.96-40.96 40.96z" fill="#16b777" p-id="4957"></path></svg> MIT Licensed
        </div>    
```

---

##### 5. 左侧菜单配置
左侧菜单显示分为两部分: 静态部分(前端配置的默认菜单)和动态部分(通过后台数据生成),接下来说的是动态菜单部分

> 生成动态菜单的数据格式, 数据示例文件在 data/menus.json中 截取重要部分数据如下:

```json
[
  {
    "menuId": 10000,
    "menuTitle": "工作台",
    "menuIcon": "layui-icon layui-icon-bot",
    "menuType": 2,
    "menuUrl": "views/workbench.html",
    "parentId": 0,
    "children": []
  },
  {
    "menuId": 10001,
    "menuTitle": "系统配置",
    "menuIcon": "layui-icon layui-icon-set",
    "menuType": 1,
    "menuUrl": "",
    "parentId": 0,
    "children": [
      {
        "menuId": 10002,
        "menuTitle": "用户管理",
        "menuIcon": "layui-icon layui-icon-friends",
        "menuType": 2,
        "menuUrl": "views/user-list.html",
        "parentId": 10001,
        "children": []
      },
      {
        "menuId": 10003,
        "menuTitle": "部门管理",
        "menuIcon": "layui-icon layui-icon-friends",
        "menuType": 2,
        "menuUrl": "views/dept-list.html",
        "parentId": 10001,
        "children": []
      }
    ]
  }
]
```
```
menuId      : 菜单ID
menuTitle   : 菜单名称
menuIcon    : 菜单图标
menuType    : 菜单类型 1: 可跳转 2: 目录(不可跳转) 3:按钮
menuUrl     : 跳转地址,如果menuType为2或者3,此值为空字符串
parentId    : 当前菜单的父菜单ID,顶部菜单为0
children    : 子菜单,如果不存在为空

从后端获取到的数据的属性名可以与上面的属性不相同,菜单处理函数可以通过参数动态修改
参数处理函数的位置 yaya-admin-plus.js (大约在581行左右函数名称为yaya_general_menu(参数1,参数2) 参数2可以配置)
```
> 生成动态菜单的代码位置 

```
修改的文件:
    1. yaya-admin-plus.js (大概在24行~50行) 向后端发送AJAX请求,获取菜单数据
```

#### 参与贡献
```
一个人+AI: 产品、开发、文档撰写、推广、后期维护...

联系邮箱: hd1611756908@163.com
```
#### 致谢

感谢 [Layui](https://layui.dev)、[Echarts](https://echarts.apache.org/)、[xm-select](https://xm-select.com/file/xm-select/v1.2.4/#/component/install)、[Vue](https://vuejs.org/)、[BootStrap5](https://getbootstrap.com/)、[Element Plus](https://element-plus.org/)、[Naive UI](https://www.naiveui.com/)、[View UI Plus](https://www.iviewui.com/) 等前端跨框架支持;以及 [Gemini](https://gemini.google.com/app)、[Grok](https://grok.com/)、[Qwen](https://www.qianwen.com/chat)、[豆包](https://www.doubao.com/chat/) 等模型的支持。

## 💖 捐赠 (Sponsor)

如果 <strong>YaYa模板</strong> 对你的业务有所助益，请考虑通过捐赠来支持一hàhà.

|                       微信                        |                       支付宝                        |
|:-----------------------------------------------:|:------------------------------------------------:|
| <img src="assets/pay/wx-pay.png" width="200" /> | <img src="assets/pay/ali-pay.jpg" width="190" /> |

> Good Luck Every Day 🚀✨