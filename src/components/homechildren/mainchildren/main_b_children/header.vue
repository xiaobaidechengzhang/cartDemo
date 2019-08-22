<<template>
   
    <div class="header" id="header" v-bind:class="{'isFixed':headerFixed == true}">
        <button class="header_col" v-for="(item,index) in [1,1,1,1]"
                     @click="changeMain(index)"
                    v-bind:class="{'active' : index===activeId }"                    
                    >
            <p>header</p>
            
        </button>
    </div>

</template>

<<script>

    
export default {
    name:"Header",
    data(){
        return{
            activeId:0,
            headerFixed:false,
            headerPosition:0
        }
    },
    
    created() {
        
    },
    mounted() {
        //window.addEventListener('scroll', this.handleScroll);
        var posi=$("#header").offset().top
        this.headerPosition=posi

    },
    methods: {
        changeMain(id){
            this.activeId=id;
            this.$emit('changemainurl',id)
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            
            if (scrollTop>this.headerPosition) {
                this.headerFixed = true
            } else {
                this.headerFixed = false

            }
        }
    },
}
</script>

<style>
    .header{
        
        
        

    }
    .header_col{
        cursor:pointer;
        width:24.9%;
        border:0.1px solid red;
        text-align:center;
        float:left
    }
    .header_col:hover{
        background-color:gray;
        color:white;
    }
    .header_col.active{
        background-color:red ;
        color :white
    }
    .isFixed{
            position:fixed;
            z-index:1;
            width:100%;
            top:0
        }
    
</style>
