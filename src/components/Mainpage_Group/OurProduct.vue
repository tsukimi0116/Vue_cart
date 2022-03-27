<script>
import p01 from '../../assets/p01.jpg'
import p02 from '../../assets/p02.jpg'
import p03 from '../../assets/p03.jpg'
import p04 from '../../assets/p04.jpg'
import p05 from '../../assets/p05.jpg'
import p06 from '../../assets/p06.jpg'
import p07 from '../../assets/p07.jpg'
import p08 from '../../assets/p08.jpg'
import p09 from '../../assets/p09.jpg'
import p10 from '../../assets/p10.jpg'
import p11 from '../../assets/p11.jpg'
import sofa5 from '../../assets/sofa5.jpg'
export default{
    name:"flexbox",
    data(){
        return{
            cartlist:[]
            ,
            info:[
            {
            imgURL:p01,
            title:'Ernest Gimson',
            price:2400,
            },                                                                                                                 
            {
            imgURL:p02,
            title:'Barcelona Chair',
            price:7159,
            },{
            imgURL:p03,
            title:'Lounge Chair',
            price:3712,
            },{
            imgURL:p04,
            title:'Bamboo Sofa',
            price:1800,
            },{
            imgURL:p05,
            title:'Cordless Table Lamp',
            price:3939,
            },{
            imgURL:p06,
            title:'Annika Table Lamp',
            price:5076,
            },{
            imgURL:sofa5,
            title:'Customizable Sofa',
            price:7900,
            },{
            imgURL:p07,
            title:'Bespoke Organic Sofa',
            price:12401,
            },{
            imgURL:p08,
            title:'White Velvet Sofa',
            price:30000,
            },{
            imgURL:p09,
            title:'Brass Chandelier',
            price:5602,
            },{
            imgURL:p10,
            title:'Frozen Blown Glass',
            price:6454,
            },{
            imgURL:p11,
            title:'Fluff Lounge Chair',
            price:5500,
            }
            ]
        }
    },
    methods:{
        btnClick:function(e){ 
            if (localStorage.getItem('cartlist')!==''){
                this.cartlist = JSON.parse(localStorage.getItem('cartlist'));
            }
                var nameValue = e.path[1].attributes.name.value;
                var priceValue = parseInt(e.path[1].attributes.price.value);
                var urlValue = e.path[1].attributes.url.value;
                var quantity = 1
                var tot = priceValue * quantity
                for (var i in this.cartlist){
                    if (this.cartlist[i].nameValue == nameValue){
                        this.cartlist[i].quantity++
                        this.cartlist[i].tot = this.cartlist[i].quantity*this.cartlist[i].priceValue;
                        localStorage.setItem('cartlist',JSON.stringify(this.cartlist))
                        return;
                    }
                }
                this.cartlist.value = this.cartlist.push({nameValue,priceValue,urlValue,quantity,tot})
                localStorage.setItem('cartlist',JSON.stringify(this.cartlist))
        }
    },
    mounted(){
    if(!localStorage.getItem('cartlist')){
        localStorage.setItem('cartlist',[])
        this.cartlist=[]
    }
    }
}

</script>

<template>
    <section class="OurProduct">

        <div class="OurProduct_title">
            <h1>Our product</h1>
        </div>

        <div class="OurProduct_flex">
            <div v-for="(item, index) in info" :key="index" 
            v-bind:name="item.title"
            v-bind:price="item.price"
            v-bind:url="item.imgURL"
            class="OurProduct_div" id="flexbox">
                <img :src="item.imgURL">
                <button @click="btnClick">+</button>
                <p> {{item.title}}</p>
                <p>${{item.price}}</p>
            </div>
        </div>
        
            
            
            
            <div class="Load_Btn">
                <button>
                    Load More
                </button>
            </div>

    </section>
</template>

<style>

</style>