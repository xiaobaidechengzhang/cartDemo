<template>
    <div class="mt-3" >
        <Main_T></Main_T>
        <Main_Mid class="mt-3"></Main_Mid>
        <Main_B class="mt-3"></Main_B>
    </div>
</template>

<<script>
import Main_T from './mainchildren/main_t'
import Main_Mid from './mainchildren/main_mid'
import Main_B from './mainchildren/main_b'
export default {
    name:"Main",
    components:{
        Main_T,
       Main_Mid,
       Main_B
    }
}
</script>   