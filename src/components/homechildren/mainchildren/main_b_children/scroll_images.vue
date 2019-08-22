<<template>
    <div class="container" >
        <div class="row" >
            <div class="row col-12 col-sm-6 col-md-4 col-lg-3 ml-2 mt-2"   v-for="(item ,index) in imageurl.url" >
                 <div class="col-4 col-sm-12">
                    <img style="display:block;width:80%;margin:0 1rem" :src=item.smallImageUrl>
            
                </div>
                <div class="col-8 col-sm-12 ml-1 row">
                        
                    <p class="col-12" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;"><small>{{item.des}} </small></p>
                    <p class=" col-12 text-right font-weigth-bold text-danger">￥ {{item.price}}</p>
            
                </div>
                    
            </div>
           

           
            
    </div>
    </div>
</template>

<<script>
export default {
    data(){
        return{
            count:0,
            
        }
    },
    props:{
        imageurl:{
            url:Array
        }
    },
    methods: {
        scroll(){
            window.onscroll=()=>{
                let bottomofwindow=document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
                if(bottomofwindow  ){
                    
                    this.imageurl.url.push({
                        smallImageUrl:"https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/75920/32/6432/133151/5d47f90bEeab10d94/310dfd2f4f3e720b.jpg.webp",
                        des:"vivo Z5 6GB+64GB 全息幻彩 4800万超广角AI三摄手机 22.5W快充 4500mAh大电池 全网通4G手机",
                        price:"1598"
                    },
                        {
                        smallImageUrl:"https://img14.360buyimg.com/jdcms/s300x300_jfs/t22753/225/1772704283/158428/b915992b/5b691540N2340dfba.jpg.webp",
                        des:"贝佳斯（Borghese）净透平衡美肤泥浆膜212g/200ml（面膜女 黑泥 补水控油清洁毛孔 护肤品化妆品男）",
                        price:"298"
                    },
                        {
                        smallImageUrl:"https://img12.360buyimg.com/jdcms/s300x300_jfs/t2158/262/1121909101/328983/5483c6b7/56792749N0001aa48.jpg.webp",
                        des:"【壳膜套装】Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retina显示屏/MK9N2CH）深空灰色",
                        price:"2527"
                    },
                        {
                        smallImageUrl:"https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/78286/35/6527/156705/5d4a8c00Ee029b92a/37c0a36274bf345d.jpg.webp",
                        des:"如辉 进口家用消毒液 除菌抑菌祛味喷雾 长效杀菌消毒 预防流感手足口病毒 衣物宠物消毒液 空调消毒剂 1L",
                        price:"369"
                    },
                        {
                        smallImageUrl:"https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/45603/39/6843/113341/5d47faa0E32e0077e/c553373616e9df78.jpg.webp",
                        des:"vivo Z5x 6GB+128GB 幻影黑 极点屏手机 5000mAh大电池 三摄拍照手机 移动联通电信全网通4G手机",
                        price:"1698"
                    })
                }
                
            }
        },
        
    },
    created() {
        console.log("created");
        
    },
    
    mounted() {
        console.log("mounted");
        
        if(this.count<5){this.scroll();}
        
 
    },
    updated() {
        console.log("update");
        
        
    },
    destroyed() {
        console.log('destroy')
    },
}
</script>

<style>
    
    .block_img{
        float:left;
        margin:2px;
        width:24%;
        
    }
    .block_img img{
        width:100%;
        height:250px;
    }
    .block_img:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
        z-index:1
    }
</style>