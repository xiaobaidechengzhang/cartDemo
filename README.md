# cartDemo

>vue+vuerouter+vuex做的购物网站 有简单用到jq（虽然用的少，但是常用的都会）和bs（主要用的container布局） 


>页面挺简单的，一共两个页面 Home（主页--响应式） 和 ShoppingCart(购物车）


>Home的地址是'/',ShoppingCart地址是'/shoppingcart'

>Home（主页）包括两个子页面 main.vue(首页) 和 itemList.vue(商品列表）,vue-router切换子页面

>Home（主页）主要用Bootstrap做的响应式

>main.vue('/')页面主要包括轮播图，无限滚动加载（mock数据）

>itemList（商品列表 '/itemList/page/1'）mock数据 加入购物车 和 结算（to '/shoppingcart'）

>ShoppingCart页面包括加入购物车的商品，功能：单选，多选 ，全选，增加商品数量，取消订单，单价与总价的计算

>项目交互使用的是vue的语法，加入购物车，购物车结算用的是vuex存储state和获取，vuerouter切换页面

>功能虽然不复杂，但是是这一段自学时间以来知识点的总结
>下面是demo的gif
![demo gif](https://github.com/xiaobaidechengzhang/cartDemo/blob/master/cartDemo.gif)

### Build Setup

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
