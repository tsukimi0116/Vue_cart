<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from './views/Navbar.vue'
  import Footer from './views/Footer.vue'
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />

  <!-- Router渲染處 -->
  <RouterView />

  <!-- Footer -->
  <Footer />
</template>

<style>

</style>
