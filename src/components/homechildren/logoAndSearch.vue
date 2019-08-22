<template>
    
        <div class="container-fluid d-none d-sm-block">
        <div class="row">

            <div class="col-3 ">
                <img id="logo" style="display:block;width:100%;height:100%;" src="https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-d72d635343d5bade-ae6404b1b96f0c25074a4a751dcb8208.jpg">
            </div>
            <div class="col-9 container">
                <div class="row">
                    <div class="col-8">
                        <div class=" input-group">
                            <input id="input_search" type="text" class="form-control" placeholder="请搜索" >
                            <div class="input-group-append">
                              <a  class="search_button btn btn-danger">搜索</a>
                            </div>
                            <div class="input_dropdown" >
                                <dl style="list-style:none">
                                    <li class="dropdown_li"  v-for="(item,index) in [1,1,1,1,1]"><p style="margin-left:10px">pppp</p></li>
                                </dl>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-4">
                        <router-link to="/shoppingcart" class="btn btn-outline-danger">购物车 <span class="badge badge-info">{{count}}</span></router-link> 
                    </div>
                </div> 
                <ul class="list-inline">
                    <li class="list-inline-item text-danger "><small>手机狂欢节</small></li>
                    <li class="list-inline-item "><small>童装</small></li>
                    <li class="list-inline-item"><small>家具</small></li>
                    <li class="list-inline-item  "><small>空调热卖</small></li>
                    <li class="list-inline-item"><small>超级品类</small></li>

                </ul>    
                <ul class="list-inline mr-1 mb-1 d-flex justify-content-start">
                        <li class="list-inline-item text-danger "><b>秒杀</b></li>
                        <li class="list-inline-item "><b>优惠券</b></li>
                        <li class="list-inline-item"><b>品牌闪购</b></li>
                        <li class="list-inline-item  "><b>时装时尚</b></li>
                        <li class="list-inline-item"><b>东东超市</b></li>
                        <li class="list-inline-item"><b>东东海鲜</b></li>
                        <li class="list-inline-item"><b>东东全球</b></li>
                        <li class="list-inline-item"><b>数科</b></li>
                    </ul>       
            </div>
        </div>

        
    </div>
    
</template>

<<script>

$(document).ready(function(){
    $("#input_search").focus(function(){
        $(".input_dropdown").css("display","block")
    });
    $("#input_search").blur(function(){
        console.log("blur");
        
        
        $(".input_dropdown").css("display","none");
        
    });
    
    $(".dropdown_li").on("mousedown",function(){
        console.log("mousedown");
        $("#input_search").val($(this).text());
        $(".input_dropdown").css("display","none");
        
        
  
    });
    $(".search_button").on("click",function(){
        if($("#input_search").val()){
            alert("您搜索的是 ："+$("#input_search").val())
        }
    });
    
    
    
})

import { mapState } from 'vuex'
export default {
    name:"LogoAndSearch",
    computed:mapState({
        count:state => state.shoppingcart.items.length
    }),
    
    
}
</script>

<style>

    
    

    .search_button{
        cursor:pointer;
    }
    .input_dropdown{
        display:none;
        position:absolute;
        z-index:1;
        background-color:white;
        top:102%;
        width:100%;
        hieght:200px;
        box-shadow:0 5px 10px rgba(0,0,0,0.5)
    }
    .dropdown_li{
        height:40px;
        cursor:pointer;
        

    }
    .dropdown_li:hover{
        background-color:lightgray;
        color:white
    }
</style>