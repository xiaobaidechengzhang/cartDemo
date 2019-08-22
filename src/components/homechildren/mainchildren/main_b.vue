<<template>
    <div class="container-fluid">
        <div class="row">
            <itemsHeader v-on:changemainurl='change'
                        class="header col-12"></itemsHeader>
        <itemMain :imageurl=images[itemId]
                    class="main col-12"></itemMain>
        </div>
        
    </div>
</template>

<<script>

import itemsHeader from './main_b_children/header'
import itemMain from './main_b_children/scroll_images'
export default {
    data(){
        return{
            images:[
                {url:[{
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
                    }]},
                 {url:[{
                        smallImageUrl:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/77266/35/1249/459752/5cf7b55fE1b3628de/94d591a889305022.jpg.webp",
                        des:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/77266/35/1249/459752/5cf7b55fE1b3628de/94d591a889305022.jpg.webp",
                        price:"39"
                    },
                       {
                        smallImageUrl:"https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg.webp",
                        des:"荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机",
                        price:"2099"
                    },
                      {
                        smallImageUrl:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/22652/2/7637/512597/5c6e6f82Ebe60ccf3/848804935c7eb7c2.jpg.webp",
                        des:"品牌直营 卫浴五件套洗漱套装 欧式一体式裂纹陶瓷卫浴五件套洗手间牙刷杯漱口杯刷牙杯洗漱套装 简约套装",
                        price:"248"
                    }]},
                {url:[{
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
                    }]},
                {url:[{
                        smallImageUrl:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/77266/35/1249/459752/5cf7b55fE1b3628de/94d591a889305022.jpg.webp",
                        des:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/77266/35/1249/459752/5cf7b55fE1b3628de/94d591a889305022.jpg.webp",
                        price:"39"
                    },
                       {
                        smallImageUrl:"https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg.webp",
                        des:"荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机",
                        price:"2099"
                    },
                      {
                        smallImageUrl:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/22652/2/7637/512597/5c6e6f82Ebe60ccf3/848804935c7eb7c2.jpg.webp",
                        des:"品牌直营 卫浴五件套洗漱套装 欧式一体式裂纹陶瓷卫浴五件套洗手间牙刷杯漱口杯刷牙杯洗漱套装 简约套装",
                        price:"248"
                    }]}
            ],
        itemId:0
        
        }
    },
    components:{
        itemsHeader,
        itemMain
    },
    methods: {
        change(id){
            console.log('change');
            this.itemId=id
        }
    },
}
</script>

<style>
    
</style>