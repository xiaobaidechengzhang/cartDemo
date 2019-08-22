<template>
    <div>   
        <dl class="ml-1 dropdown " style="list-style:none;width:100%;border:1px solid gray;">
            <li class="left_li" v-for="(item,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1]">
                <router-link to="/itemList/page/1">手机/数码/电器</router-link>
                <!--左侧栏hover-->
            <div class="dropdown_content">
                <div class="content">
                    <div  v-for="i in [1,1,1,1,1]">
                        <div class="content_header">玩3C</div>
                        
                    </div>
                    <div class="content_main" v-for="i in [1,1,1,1,1]">
                        <div class="content_main_content" >
                            <div class="main_content_left">
                                <router-link to="/itemList/page/1">频道></router-link>
                            </div>
                            <div class="main_content_right" >
                                <div class="main_content_right_p" v-for="i in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">
                                    <router-link to="/itemList/page/1"  >苹果</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>

            </li>  
              
        </dl>
       
    </div>
</template>

<<script>

$(document).ready(function(){
    var w=$(".dropdown").outerHeight();
    console.log("li de width is +" +w)
})
export default {
    name:"Left",
    
}
</script>

<style>
    .left_li{
        font-size:14px;
       position:relative;
        display:inline-block;
        width:100%
    }
    .left_li:hover{
        background-color:lightgray
    }
    .left_li a{
        color :gray;
        margin-left:1rem
    }
    .left_li a:hover{
        color:red
    }
     .left_li:hover .dropdown_content{
        display:block
    } 

    .dropdown_content{
        display:none;
        position:absolute;
        background-color:white;
        left:98%;
        width:600px;
        height:400px;
        border:0.1px solid gray;
        border-left:0;
        padding-left:0px;
        top:-2px;
        z-index:1;
        
    }
    .content{
        width:600px;
        height:400px;
        border:2px solid gray
    }

    .content_header{
        display:inline;
        float:left;
        background-color:black;
        font-weight:bold;
        border:1px solid gray;
        color:white;
        width:80px;
        
        margin-top:10px;
        margin-left:20px;
        text-align:center;

    }

    .content_main{
        margin-top:50px;
        width:600px;
        height:auto;
        margin-bottom:10px;
       
    }
    
    .content_main_content{
        height:auto;
        width:100%;
        border-bottom:0.2px solid gray
        
    }
    .main_content_left{
        margin-right:5px;
        margin-top:5px;
        text-align:center;
        float:left;
        width:100px;
        height:100%;
        font-weight:bold
        
    }

    .main_content_right{
        position:absolute;
        left:100px;
        margin-left:5px;
        margin-top:5px;
        
        
       
    }

    .main_content_right_p{
        display:inline-block;
        margin-left:10px;
        
    }
</style>