# <div align="center">YaYa-Layui-Admin-Plus</div>
#### <div align="center"> 基于前端框架Layui2.13+开发的一套极简后台管理模板 </div>
<div align="center">
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/Layui-%3E=2.13.3-blue"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/YaYa Layui Admin Plus-v1.0-blue"></a>
	<a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/Author-%E5%A4%9C%E6%B3%8A1990-orange"></a>
    <a href="https://gitee.com/ukoko/yaya-layui-admin-plus"><img alt="abc" src="https://img.shields.io/badge/LICENSE-MIT-blue"></a>
</div>

#### 介绍
`YaYa-Layui-Admin-Plus` 基于 [Layui](https://layui.dev/) 框架实现的一套 <strong>简单</strong>、<strong>方便</strong>、<strong>国产化</strong> 前端管理模板，`Layui`虽然是一套前端`UI`框架，但是作者设计的理念并不是为前端程序员设计，而是为了后端程序员设计，让后端程序员告别繁琐的前端配置，只需要简单的了解`HTML/CSS/JS`在加上`Layui`官网，就可以快速开发出属于自己的系统,`Layui`的`UI`组件没有那么丰富多彩，但是他的交互方式简单方便，结合后端程序可以快速建站。

#### 开发初衷

```
1. 为软件国产化添砖加瓦
2. 有一颗开源的心
3. 脑子太笨记不住繁琐的语法、版本和配置,比如vue| vue2/vue3 | 选项式/组合式 | webpack/vite | npm/cnpm/yarn | node版本16以上 | 特别老的项目新员工跑不起来 | node来回切换,版本不兼容 | 组件过度封装,牵一发动全身 等
4. 只会html/css/js(jquery)做个PC端开发不想学其它东西 (作者是一名后端开发)
5. 为和我一样的小众群体提供一个新的解决方案
6. 为一些要求纯国产化的公司提供一个新的解决方案
7. AI模型的发展，我比较懒，模板的核心代码由我设计和实现，很多显示代码由模型生成，如果没有模型，可能我早就放弃了(感谢各个模型)
```

#### 更新日志

```
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
git clone https://gitee.com/ukoko/yaya-layui-admin-plus.git
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
├── assets                  # Gitee或者Github上README.md文件中显示的图片
├── css                     # yaya-layui-admin-plus模板的核心css文件
├────── index.css           # index.html首页的核心css
├────── menu.css            # index.html首页中左侧导航区域(菜单+LOGO+TITLE)的核心css
├────── yaya-common.css     # 整个模板中大部分页面需要用到的公共css配置在这里(这个属于个人喜好)
├── data                    # yaya-layui-admin-plus模板中的测试数据(例如左侧菜单生成数据,用户测试数据,部门测试数据等)
├── image                   # yaya-layui-admin-plus模板中用到的图片(登陆页面的背景图、网站用到的图标等)
├── js                      # yaya-layui-admin-plus模板中的核心JS文件
├────── yaya-admin-plus.js  # yaya-layui-admin-plus模板的核心JS文件(包含整个模板的核心功能的核心函数,例如 左侧菜单实现、选项卡实现等)
├────── xm-select.js        # 多功能下拉框库(第三方库)
├────── echarts.min.js      # 图表库(第三方库)
├── layui                   # Layui核心库
├── views                   # yaya-layui-admin-plus模板中提供的一些案例页面(不喜欢可以全部删掉,用户自己重新添加)
├── .gitignore              # Git配置文件,用于版本控制管理
├── DISCLAIMER.md           # 开源软件的免责声明文件
├── favicon.ico             # yaya-layui-admin-plus模板在预览时,浏览器选项卡上显示的图标
├── index.html              # yaya-layui-admin-plus模板首页
├── LICENSE                 # 开源软件的开源协议(MIT协议)
├── README.md               # yaya-layui-admin-plus模板的介绍文件

```
#### 项目运行
```
双击项目中的index.html页面,右键按照下面图示进行项目启动
```

<table>
    <tr> <td> <img src="assets/18-vscode-show.png" alt=""> </td></tr>
</table>

#### 模板文档

[点我跳转](https://hs-an-yue.github.io/2026/01/28/YaYa-Layui-Admin-Plus%E6%A8%A1%E6%9D%BF%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/)

#### 参与贡献
```
一个人+AI: 产品、开发、文档撰写、推广、后期维护...
```
#### 致谢
感谢 [Layui](https://layui.dev)、[Echarts](https://echarts.apache.org/)、[xm-select](https://xm-select.com/file/xm-select/v1.2.4/#/component/install)、[Vue](https://vuejs.org/)、[BootStrap5](https://getbootstrap.com/)、[Element Plus](https://element-plus.org/)、[Naive UI](https://www.naiveui.com/)、[View UI Plus](https://www.iviewui.com/) 等前端跨框架支持;以及 [Gemini](https://gemini.google.com/app)、[Grok](https://grok.com/)、[Qwen](https://www.qianwen.com/chat)、[豆包](https://www.doubao.com/chat/) 等模型的支持。