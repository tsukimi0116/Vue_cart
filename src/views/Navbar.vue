<template >
  <nav class="navbar">
        <p class="logo">Vue Home</p>
        <ul class="nav-title">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cart">Shop</router-link></li>
            <li><router-link to="">About</router-link></li>
            <li><router-link to="">Blog</router-link></li>
            <li><router-link to="">Contact</router-link></li>
            <li><router-link to="">Element</router-link></li>
        </ul>


        <ul class="nav-icon">
            <li>
                <router-link to="/cart">
                    <i class="fas fa-shopping-cart"></i>
                </router-link>
            </li>

            <li>
                <router-link to="/cart">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </router-link>
            </li>
        </ul>
        <div class="nav-show">
            <i class="fa-solid fa-bars"></i>
            <div class="nav-showshow">
                <p>Cart List</p>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Element</p>
            </div>
        </div>
        
  </nav>
</template>
<script>
    import { RouterLink } from 'vue-router'
</script>
<style >
  
</style>