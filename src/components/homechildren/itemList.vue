<template>
    <div>
        <Multi_Options class='multi_options'></Multi_Options>
        <router-view class="child"></router-view>
        
    </div>
</template>

<<script>
import Items from './itemListChildren/items'
import Multi_Options from './itemListChildren/options'
export default {
    name:'ItemList_Options',
    components:{
        Items,
        Multi_Options
    }
}
</script>

<style>
    .multi_options{
        
    }

    
    
    
</style>