<<template>
    <div class="container-fluid">
        <div class='itemlist row'>
        <Item @add_to_cart='addToCart'
                    v-for='(item,index) in itemLists_count'
                    v-bind:key=index
                    :itemData=item 
                    class="col-12 col-sm-6 col-md-4 col-lg-3"></Item>
        
        <div class="col-12 mt-5">
            <ul class="list-inline clearfix d-flex justify-content-center" >
            <li class="list-inline-item"
                v-for="(item,index) in [1,1]"
                @click="choosPage">
                <router-link class="count_link"
                             :to="{ params: { id: index+1 }}"
                             :class="{'active' : $route.params.id === index+1 || pageId === index+1}"
                             >{{index+1}}</router-link>
            </li>
            
        </ul>
        </div>
       
        
    </div>
    </div>
</template>

<<script>

import  Item from './itemsChildren/item'
import {mapState, mapActions} from 'vuex'

export default {
    name:'Items',
    data(){
        return{
            
            itemLists_count:[],
            pageId:1
            
            
        }
    },
    
    components:{
        Item,
        
    },
    computed: mapState({
        itemLists:state => state.products.items,
        
        
    }),
    methods: {
        ...mapActions('shoppingcart',[
            'addProductToCart'
        ]),
        addToCart(product)
        {
            console.log("addaddadd");
            
            this.addProductToCart(product)
        },
        choosPage(){
            this.pageId=this.$route.params.id
            this.itemLists_count=[]
            for(let i=(this.$route.params.id-1)*4;i<this.$route.params.id*4;i++)
            {
                this.itemLists_count.push(this.itemLists[i])
            }
            
        }
        
    },
    mounted() {
        
       for(let i=(this.$route.params.id-1)*4;i<this.$route.params.id*4;i++){
           this.itemLists_count.push(this.itemLists[i])
       }
       
        
    },
    
    
    
    
    
    
}
</script>

<style>

    
 

    .count_link{
        padding:10px 15px;
        background-color:#F5F5F5;
        color:black;
        border:1px solid gray
    }
    .count_link.active{
        background-color:white;
        color :red;
        border:none;
    }
    
    
</style>