<template>
    <div class="bg-light">
        <ul class="list-inline d-flex justify-content-between justify-content-sm-end">
            <li class="list-inline-item"><a href="#">登录</a></li>
            <li class="list-inline-item  d-sm-none d-block">
                 <div class="input-group">
                    <input type="text" class="form-control" placeholder="请搜索" >
                    <div class="input-group-append">
                        <a class=" btn btn-danger">搜索</a>
                    </div>
                </div>
            </li>
            <li class="list-inline-item d-block d-sm-none"><router-link to="/shoppingcart" class="btn btn-outline-danger">购物车 <span class="badge badge-info">{{count}}</span></router-link></li>
            <li class="list-inline-item "><a href="#">注册</a></li>
            <li class="list-inline-item d-sm-block d-none"><a href="#">会员</a></li>
            <li class="list-inline-item d-sm-block d-none"><a href="#">导航</a></li>
        </ul>
    </div>
</template>

<<script>

import {mapState} from 'vuex'
export default {
    name:"Home_Nav",
    computed: {
        ...mapState({
            count:state => state.shoppingcart.items.length
        })
    },
    
}
</script>