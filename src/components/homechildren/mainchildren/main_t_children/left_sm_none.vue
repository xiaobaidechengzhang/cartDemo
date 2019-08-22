<template>
    <div>
         <div class="container ">
        <div class="row text-center">
            <div class="col-3" v-for="(item,index) in [1,1,1,1,1,1,1,1]">
                <router-link to="/itemList/page/1">
                    <figure class="figure">
                    <img src="https://img13.360buyimg.com/n9/jfs/t26107/116/2017746014/124331/57fcdd7e/5bf52a27N8e85930d.jpg">
                    <figcaption class="figure-caption text-center"><small>手机</small></figcaption> 
                </figure>
                </router-link>
            </div>
            
        </div>
    </div>
    </div>
</template>

<<script>
export default {
    name:"Left_Sm_None",
}
</script>