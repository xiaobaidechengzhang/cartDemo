<template>
    <div class="container-fluid">
        <div class="row">
            <Left class="col-12 col-md-6"></Left>
            <Right class="col-12 col-md-6"></Right>
        </div>
    </div>
</template>

<<script>
import Left from './main_mid_children/left'
import Right from './main_mid_children/right'
export default {
    name:"Main_Mid",
    components:{
        Left,
        Right
    }
    
}
</script>