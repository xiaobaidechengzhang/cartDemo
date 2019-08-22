<template>
    <div class="container-fluid" >
        <div class='items row'>
            <div class="item_image col-3 col-sm-12">
                <img class="img-fluid" :src=itemData.imageUrl>

            </div>

            <div class="col-9 col-sm-12 row">
                <p class="item_des col-12" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">{{itemData.des}}</p>
                <p class="col-12 text-danger font-weight-bold" style="font-size:16px">￥{{itemData.singlePrice}}</p>
            </div>
            <div class="col-12 row d-flex justify-content-end mr-0">
                <button class="btn btn-primary" @click="addToCart(itemData)">加入购物车</button>
                <router-link class="btn btn-danger mr-0" to="/shoppingcart" >结算</router-link>
            </div>
            
            
        </div>
        
    </div>
</template>

<<script>

import {mapState , mapActions} from 'vuex'
export default {

    name:'ItemList_Item',

    data(){
        return{
        
        }
    },
    props:{
        itemData:Object
    },
    methods: {
        addToCart(product){
            this.$emit('add_to_cart',product)
        }
    },
    
    
}
</script>

<style>
    .items{
        
        min-height:150px;
    }
    .items:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)
    }
    .item_image{
        text-align:center
    }
    .item_des{
        color:gray;
        
    }
    .item_des:hover{
        color :red
    }

    .item_detail{
        
        
        
    }
    .item_price{
        
        
        text-align:center;
        font-weight:bold;
        
    }
    .add_to_cart{
        
        // float : right;
        //margin-right:5px 
    }
    .to_checkout{
        float:right;
        margin-top:5px;;
        margin-right:5px;
    }
    a{
        text-decoration:none
    }
    a:hover{
        text-decoration:underline
    }
</style>