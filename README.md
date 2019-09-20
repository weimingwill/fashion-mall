# Fashion Mall

这是用 Wepy 开发的一个服装购物商场小程序。主要是参考了 [wepy-mall](https://github.com/dyq086/wepy-mall)，但在它的基础上做了一些代码的优化，包括代码风格，命名等。

在学习开发的过程中，将各个模块分成9个不同的 branch，目的是让初学者更容易上手。相当于一步一步从头开始带这你写小程序。同时，配套了一个本地可以运行的 mock server [fashion-mall-server](https://github.com/weimingwill/fashion-mall-server)，可以更容易的看数据，进行API的测试和再开发。

## 使用指南

### 安装

```bash
git clone https://github.com/weimingwill/fashion-mall.git
cd fashion-mall
npm install
```

```bash
npm install wepy-cli -g
```

```bash
wepy build --watch
```

### 看演示

运行完上面的代码后，将 fashion-mall 下面的 `dist` 文件夹导入 微信开发者工具 可以了。

#### 微信开发者工具设置（重要！）

在 微信开发者工具 任务栏 里的 `详情` -> `本地设置` 里，进行下面这些配置：

> es6: 对应关闭ES6转ES5选项，关闭。 重要：未关闭会运行报错。
>
> postcss: 对应关闭上传代码时样式自动补全选项，关闭。 重要：某些情况下漏掉此项也会运行报错。
>
> minified: 对应关闭代码压缩上传选项，关闭。重要：开启后，会导致真机computed, props.sync 等等属性失效。（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的wepy.config.js和package.json文件。）
>
> urlCheck: 对应不检查安全域名选项，开启。 如果已配置好安全域名则建议关闭。

具体设置的地方可能会随着开发者工具更新而改变，如果变了可以直接搜索一下。

### 目录结构

```
src
├── api
│   └── api.js // 接口定义
├── app.wpy // 入口文件
├── components // 组件
│   ├── comment_list.wpy // 评论
│   ├── common
│   │   ├── bottom_load_more.wpy // 底部加载
│   │   └── placeholder.wpy // 空列表
│   ├── discover.wpy // 发现组建
│   ├── filter_bar.wpy // 筛选栏组建
│   ├── filter_slider.wpy // 筛选右侧栏
│   ├── rate.wpy // 评分
│   ├── search.wpy // 搜索
│   ├── shop_grid_list.wpy // 购物商品矩阵
├── images // 图片文件夹
├── pages // 页面
│   ├── authorization.wpy // 授权
│   ├── cart.wpy // 购物车
│   ├── category.wpy // 分类
│   ├── goods_detail.wpy // 商品详情
│   ├── home.wpy // 首页
│   ├── home_detail.wpy // 首页详情
│   ├── info.wpy // 我的
│   └── search.wpy // 搜索
├── plugins
│   └── wxParse // 小程序富文本
├── styles // 样式
└── utils // 帮助文件夹
```

### 开发前最好有一些基础知识

1. HTML, CSS, Javascript

2. 小程序开发的基础知识：代码结构、配置文件、运行机制、加载机制、生命周期等。可以参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/)。极客时间的 9小时搞定微信小程序开发 制作的还不错，可以考虑。

3. [Wepy 官方文档](https://tencent.github.io/wepy/document.html#/)


### 部分功能截图 (From Wepy Mall)

<img src="screenshots/1.jpeg" width="365" height="619" />

<img src="screenshots/2.jpeg" width="365" height="619"/>

<img src="screenshots/3.jpeg" width="365" height="619"/>

<img src="screenshots/4.jpeg" width="365" height="619"/>

<img src="screenshots/5.jpeg" width="365" height="619"/>

<img src="screenshots/6.jpeg" width="365" height="619"/>


### Branches

* master：用 `wepy new standard <project>` 初始化后得到的模版，修复了很多个 npm package 的问题。
* 1.tab-bar：创建了 tabbar
* 2.authorization：初次登陆，授权访问
* 3.info：个人页面
* 4.home-page：首页
* 5.category：分类页
* 6.home_detail：展示首页图片相关的所有商品（比较复杂）
* 7.goods_detail：商品详情（比较复杂）
* 8.cart：购物车
* 9.search：搜索功能
* develop：包含了所有的功能，最新的 branch

每一次的更改可以看这些 [Pull Request](https://github.com/weimingwill/fashion-mall/pulls)。
