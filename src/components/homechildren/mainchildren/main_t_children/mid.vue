<template>
    <div class="sliders">
        <div class="slide_image" v-for='(item,index) in imagelist'
                v-show="index === nowindex" :key="index"
                @mouseover="stopScroll()" @mouseout="reScroll()">
                <img :src="item.url"class="img_scroll">
        </div>
        <div class="dot_image d-flex justify-content-center">
            <ul class="list-inline" >
                <li class="list-inline-item"
                    v-for="(i,index) in imagelist" 
                    :class="{'active' : index === nowindex}"
                    :key="index" @click="dot_choose_image(index)"><p>{{index+1}}</p></li>
                
        </ul>
        </div>
        <div class="pre_next_image">
            <a class="pre" @click="preimage" >&lt</a>
            <a class="next" @click="nextimage" >&gt</a>
        </div>
        
       
    </div>
</template>

<script>

    export default{
        name:"Mid",
        data(){
            return{
                nowindex:0,
                imagelist:[
                    {id:0,url:"https://img14.360buyimg.com/pop/s1180x940_jfs/t1/80553/27/6521/61419/5d4a497cE0beeec11/f0b98a79a7250a41.jpg.webp"},
                    {id:1 ,url :"https://img14.360buyimg.com/pop/s1180x940_jfs/t1/72532/2/6659/100249/5d4ce7c0Ecafd257c/ccb76ff80d343b55.jpg.webp"},
                    {id:2,url :"https://img11.360buyimg.com/pop/s1180x940_jfs/t1/54012/38/7135/89299/5d4d436cE59a008c1/6d16c58ab3248369.jpg.webp"}
                ],
                isScrolling:true,
                timeInterval:3000
            }
        },
        methods: {
            beginScroll(){
                
                    if(this.timer){
                        window.clearInterval(this.timer);
                        this.timer=null
                    }
                    this.timer=window.setInterval(() => {
                        this.nowindex++;
                        if(this.nowindex === this.imagelist.length){
                            this.nowindex=0
                        }
                    }, this.timeInterval);
                
            },
            stopScroll(){
                window.clearInterval(this.timer);
                this.timer=null
            },
            reScroll(){
                this.beginScroll()
            },

            preimage(){
                
                if(this.nowindex >0)
                {
                    this.nowindex-=1
                }else{
                    this.nowindex=this.imagelist.length-1
                }
                window.setInterval(() => {
                    this.isScrolling=true;
                }, this.timeInterval);
            },
            nextimage(){
                
                if(this.nowindex <this.imagelist.length-1)
                {
                    this.nowindex+=1
                }else{
                    this.nowindex=0
                }
                
            },
            dot_choose_image(index){
                
                this.nowindex=index;
                

            }
        },
        created() {
            this.beginScroll()
        },
    }
</script>

<style>
    .sliders{
        width:500px;
        height:300px;
        overflow:hidden;
        position:relative;
        
    }
    .slide_image{
        width:100%;
        height:100%;
        
    }

    .img_scroll{
        width:100%;
        height:100%;
        animation:fade 2s;
        -webkit-animation:fade 2s
    }
    @keyframes fade{
        from{opacity:0.2;}
        to{opacity:1;}
    }
    @-webkit-keyframes fade{
        from{opacity:0.2;}
        to {opacity:1;}
    }
    .dot_image{
        position:absolute;
        width:100%;
        
        left:0;
        bottom:5px;
        list-style-type:none;
        
        
    }
    
    .dot_image li{
        cursor:pointer;
        display:inline-block;
        float:left;
        margin-left:5px;
        background-color:white
    }
    .dot_image li:hover{
        background-color:lightgray;
        color:white
    }
    .dot_image li.active{
      background-color:red;
      color:white
    }

    .dot_image li p{
        
        padding:0 3px;
        margin:0 3px;
    }

    .dot_image:after{
        contentt:'';
        display:block;
        height:0;
        visibility:hidden;
        clear:both
    }
    .pre_next_image{
        position:absolute;
        width:100%;
        
        top:40%;
        
   
    }

    .pre{
        
        background-color:white;
        cursor:pointer;
        font-size:40px;
        padding:5px;
        float:left;
        position:absolute;
       
    }
    .next{
        background-color:white;
        cursor:pointer;
        font-size:40px;
        padding:5px;
       
       float:right;
        position:absolute;
        right:25px;

    }
    
    
    
    
    
    
</style>