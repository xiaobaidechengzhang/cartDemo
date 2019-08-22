<template>
    <div>
        <Home_Nav></Home_Nav>
        <LogoAndSearch class="mt-3"></LogoAndSearch>
        <router-view class="home"></router-view>
    </div>
</template>

<<script>

import Home_Nav from './homechildren/nav'
import LogoAndSearch from './homechildren/logoAndSearch'

export default {
    name:"Home",
    components:{
        Home_Nav,
        LogoAndSearch
    }
}
</script>