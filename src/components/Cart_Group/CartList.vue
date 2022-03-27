<script>
export default {
    name:'tableMap',
    data(){
        return{
            cartlist:[],
            Total:0
        }
    },
    methods:{
        delBtn:function(e){
            let productName = e.path[2].attributes.name.value
    
            for(var i in this.cartlist){
                if (this.cartlist[i].nameValue.includes(productName)){
                    this.Total = this.Total - this.cartlist[i].tot
                    this.cartlist.splice(i,1)
                    localStorage.setItem('cartlist',JSON.stringify(this.cartlist))
                }
            }
        },
        plusBtn:function(e){
            let productName = e.path[2].attributes.name.value
            console.log(productName);
            for(var i in this.cartlist){
                if (this.cartlist[i].nameValue.includes(productName)){
                    this.cartlist[i].quantity++
                    this.cartlist[i].tot = this.cartlist[i].priceValue * this.cartlist[i].quantity
                    localStorage.setItem('cartlist',JSON.stringify(this.cartlist)) 
                    this.Total = this.Total + this.cartlist[i].priceValue
                }
            }
        },
        minusBtn:function(e){
            let productName = e.path[2].attributes.name.value
            console.log(productName);
            for(var i in this.cartlist){
                if (this.cartlist[i].nameValue.includes(productName)){
                    this.cartlist[i].quantity--
                    this.cartlist[i].tot = this.cartlist[i].priceValue * this.cartlist[i].quantity
                    localStorage.setItem('cartlist',JSON.stringify(this.cartlist))
                    this.Total = this.Total - this.cartlist[i].priceValue
                }
            }
        }
    },
    mounted() {
        if(!localStorage.getItem('cartlist')){
            localStorage.setItem('cartlist',[])
            this.cartlist = []
        }
        if(localStorage.getItem('cartlist')!==""){
            this.cartlist = JSON.parse(localStorage.getItem('cartlist'))
        }
        for(var i in this.cartlist){
            this.Total += this.cartlist[i].priceValue * this.cartlist[i].quantity;
        }
    },
    beforeUpdate(){
        console.log(this.Total);
    }
 
}
</script>
<template lang="">
    <section class="CartList">
        <div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                <tr 
                v-bind:url="item.urlValue"
                v-bind:name="item.nameValue"
                v-bind:price="item.priceValue"
                v-bind:quantity="item.quantity"
                v-for="(item, index) in cartlist" :key="index" 
                id="tableMap">
                    <td><img :src="item.urlValue" alt=""></td>
                    <td>{{item.nameValue}}</td>
                    <td>${{item.priceValue}}</td>
                    <td v-bind:quantity="item.quantity">
                        <button @click="minusBtn">
                            -
                        </button>
                        {{item.quantity}}
                        <button 
                        @click="plusBtn">
                            +
                        </button>
                    </td>
                    <td>${{item.tot}}</td>
                    <td>
                        <button @click="delBtn">
                            x
                        </button>
                    </td> 
                </tr>


            </table>
            <div class="CartList_Total">
                <h2>Cart Totals</h2>
                <hr>
                <hr>
                <h2>Total<span>${{this.Total}}</span></h2>
                
            </div>


        </div>

    </section>
</template>
<style lang="">
    
</style>