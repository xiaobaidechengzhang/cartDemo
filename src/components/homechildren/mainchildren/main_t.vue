<template>
    <div class="row" id="row" >
        <Left_Sm_None class="col-12 d-block d-sm-none"></Left_Sm_None>
        <Left id="left" class="col-sm-3 d-none d-sm-block "></Left>
        <Mid id="mid" class="col-12 col-sm-9 col-md-7" ></Mid>
        <Right id="right" class="col-md-2 d-none d-md-block "></Right>
    </div>
</template>

<<script>



import Left from './main_t_children/left'
import Mid from './main_t_children/mid.vue'
import Right from './main_t_children/right'
import Left_Sm_None from './main_t_children/left_sm_none'
export default {
    name:"Main_T",
    components:{
        Left,
        Mid,
        Right,
        Left_Sm_None
    },
    
}
</script>