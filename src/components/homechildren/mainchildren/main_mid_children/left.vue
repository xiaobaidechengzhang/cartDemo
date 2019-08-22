<template>
    <div class="container-fluid" >
        <div class="row">
            <p class="col-4">排行榜</p>
            <div class="col-8">
                <ul class="list-inline d-flex justify-content-end">
                    <li class="list-inline-item" >数码</li>
                    <li class="list-inline-item" >数码</li>
                    <li class="list-inline-item" >数码</li>
                    <li class="list-inline-item" >数码</li>
                </ul>

            </div>
        </div>

        <div class="row" >
            <div class="col-12 col-sm-6"  >
                <div class="row ">
                        <div class="row d-flex justify-content-center col-4 col-sm-12">
                            <img  class="img-fluid col-12 col-sm-6"  src="https://img12.360buyimg.com/n1/s320x320_jfs/t1/76175/35/948/116196/5cf33b5fE902577b1/b96289f4013a9392.jpg!q80.webp">
                            
                        </div>
                        <p class="col-8 col-sm-12 text-center ">书包书包</p>

                </div>
                <ul class="row text-center" style="list-style:none;padding:0;margin:0">
                    <li class="col-5 ml-2  bg-light d-none d-sm-block" style="font-size: 12px;height:30px;">好物榜</li>
                    <li class="col-5 ml-2   bg-light d-none d-sm-block" style="font-size: 12px;height:30px">好物榜</li>
                    <li class="col-5 ml-2 mt-2 bg-light d-none d-sm-block" style="font-size: 12px;height:30px">好物榜</li>
                    <li class="col-5 ml-2 mt-2  bg-light d-none d-sm-block" style="font-size: 12px;height:30px">好物榜</li>
                </ul>
            </div>
            <div class="col-12 col-sm-6 " style="padding-left:0;margin-left:0"  >
                <dl class="row" style="list-style:none">
                    <li class="col-12 mt-1 row" v-for="(item,index) in itemArray">
                        <img  class="col-5 img-fluid d-flex justify-content-center" :src=item.url>
                        <p class="col-7 " style="font-size:12px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">{{item.title}}</p>
                    </li>
                    

                </dl>
            </div>

        </div>
    </div>
    
</template>

<<script>
export default {
    name:"Left",
    data(){
        return{
            itemArray:[
                {
                    url:"https://img11.360buyimg.com/n1/s320x320_jfs/t1/71600/21/1781/136355/5d01fa9bEf6c53f5d/5dba881ba7d32c32.jpg!q80.webp",
                    title:"【夏季新品】儿童胸包韩国迷你"
                },
                {
                    url:"https://img12.360buyimg.com/n1/s320x320_jfs/t1/45763/35/4693/142226/5d245bceE6c6f5b4f/d014e65d370835a8.jpg!q80.webp",
                    title:"联想笔记本包小新潮7000-13"
                },
                {
                    url:"https://img10.360buyimg.com/n1/s320x320_jfs/t1/72934/10/7368/204539/5d5777b0Ee53baa78/5a58d80c7a1e1ce0.jpg!q80.webp",
                    title:"方形登山包背后青年孩子小包课"
                }
            ]
        }
    }
}
</script>