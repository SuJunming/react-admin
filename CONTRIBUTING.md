# rc-admin 
# author:95_小生(苏俊明)
### 最下方增加版本更新日志😁
### 前言
  欢迎使用后台管理系统解决方案
  本项目是针对后台人员or外包人员or快速搭建后台管理系统创建
- [GitHub地址](https://github.com/SuJunming/rc-admin)
### 依赖模块
<span style="color: rgb(184,49,47);">项目是用create-react-app创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站😄😄</span>
- [react](https://facebook.github.io/react/)<span style="color: rgb(243,121,52);">👍</span>
- [react-router](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react路由👍</span>)
- [antd](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源react ui组件框架👍</span>)
- [redux](https://github.com/reactjs/redux)(<span style="color: rgb(243,121,52);">状态管理👍</span>)
- [react-redux](https://github.com/reactjs/react-redux)(<span style="color: rgb(243,121,52);">react版本的redux👍</span>)
- [redux-thunk](https://github.com/gaearon/redux-thunk)(<span style="color: rgb(243,121,52);">dispatch返回函数👍</span>)
- [axios](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http请求模块，可用于前端任何场景，很强大👍</span>)
- [transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy)(<span style="color: rgb(243,121,52);">@ES7装饰符 很强大👍</span>)
- [nprogress](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">简小的顶部加载条 很强大👍</span>)
- 其他小细节省略

### 功能模块
<span style="color: rgb(184,49,47);">备注：项目只引入了ant-design的部分组件，其他的组件antd官网有源码，可以直接复制到项目中使用，后续有时间补上全部组件。😁</span>
<span style="color: rgb(184,49,47);">项目使用了antd的默认主题功能，若想替换其他颜色，具体操作请查看antd官网😁</span>
<!--more-->
### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求demo
|   |    --- demo.js                        
|   +-- components                          ---各式各样的组件存放目录
|   +-- javascript                          ---接口api and 公共函数 
|   |    --- commonFun                      ---几十种公共函数
|   +-- router                              ---菜单 and 路由定义
|   +-- styles                              ---项目的样式存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件
--- .env                                    ---启动项目自定义端口配置文件
--- package.json                                    
```
### 安装运行

##### 1.克隆项目
```js
git clone https://github.com/SuJunming/rc-admin.git
```
##### 2.npm安装相关包文件(国内建议增加淘宝镜像源，不然很慢，你懂的😁)
```js
npm i
```
##### 3.启动项目
```js
npm start
```
##### 4.打包项目
```js
npm run build
```
### 结尾
该项目会不定时更新，后续时间会添加更多的模块

若有问题，可加QQ群221859379与我交流

如果对你有帮助，给个star哟~~❤️❤️❤️❤️❤️❤️❤️

