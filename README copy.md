# trip

> this is vuejs project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
###项目环境准备

## node环境

## vue环境

    vue  init webpack 项目名

    npm run dev  (start)

## 码云  
   注册账号  
   创建远程仓库 Trip


## 版本管理工具  git

    git命令

    git使用
        git clone  远程仓库地址

        git  status  查看状态

        git  add .  把所有文件放到缓存区

        git  commit -m  "描述" 缓存区到本地仓库

        git  push  推送到远程仓库   

        git pull   从远程仓库拉取代码

        git  branch  查看分支   -r

        git checkout 分支名  切换分支

        vscode中git的使用
            第二项里边：



##  功能需求 
    参考： https://touch.piao.qunar.com/

    首页模块：

    城市模块

    列表详情页模块


### 开发环境统一
    现在在  index-init分支下开发
    统一视口： meta  
    移动端   <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=1.0">


    统一样式：  保证页面在所有浏览器下显示效果一致  
    reset.css  font-size: 50px;

    1px边框像素问题：  手机像素都比较高  如果是2倍 3倍屏  虽然设置border:1px  实际上有 2px  3px
    border.css      解决方案  使用css3 的 scale属性

    300毫秒点击延迟问题：
    fastclick   

    cnpm i fastclick --save

    全局引入   main.js中
    import fastClick  from  "fastclick"
    fastClick.attach(document.body)


    字体图标：https://www.iconfont.cn/
    注册账号  
    创建项目
    添加图标到购物车  添加到项目
    下载项目
    选择文件  配置

    css预处理器   stylus    sass  less我都会用  
    cnpm  i  stylus --save 
    cnpm  i  stylus-loader --save
    语法部分   写的时候
    {}可有可无  
    tab 空格有用


##  正式进入项目开发

    ###  首页模块
        首页：

        Home.vue  及
        子组件   HomeHeader.vue   头部组件

        HomeHeader.vue的开发：
        html部分
            <div class="header">
            <div class="headr-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe61b;</span>
                输入城市/景点/游玩主题
            </div>
            <div class="header-right">
                城市城市
                <span class="iconfont arrow-icon">&#xe62d;</span>
            </div>    
        </div>


        css部分
            .header 
                display : flex
                line-height :.86rem
                background : #00bcd4
                color : #fff 
                .header-left
                    width : .64rem
                    float : left 
                    .back-icon
                        text-align : center
                        font-scale :.4rem
                .header-input
                    flex : 1
                    height : .64rem
                    line-height : .64rem
                    margin-top :.12rem
                    margin-left :.2rem
                    padding-left : .2rem
                    background : #fff 
                    border-radius : .1rem
                    color : #cccccc
                .header-right
                    min-width : 1.04rem
                    padding : 0 .1rem
                    float : right
                    text-align : center
                    color  :  #ffffff
                    arrow-icon
                        margin-left : -.05rem
                        font-size : .24rem

    提交到本地缓存    
    到本地仓库
    推送到远程仓库  
    切换到主分支           git  checkout  master
    合并index-init分支     git  merge  index-init


    轮播图：
    远程仓库 创建分支   index-swiper
    同步到本地
    切换到index-swiper开发 轮播图 
    vue-awesom-swiper

    




##作业   图片布局    放到码云上去   













