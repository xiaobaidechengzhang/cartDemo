import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/homechildren/main.vue'
import ItemList from '../components/homechildren/itemList.vue'
import Items from '../components/homechildren/itemListChildren/items.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:"",name:"Main",component:Main},
        {path:"itemList",name:"ItemList",component :ItemList,children:[
          {path:"page/:id?",name:"Items",component:Items}
        ]}
      ]
    },
    {
      path:"/shoppingcart",name:"ShoppingCart",component:ShoppingCart
    }
  ]
})
