<script setup lang="ts">
import Toast from 'primevue/toast'
import Navbar from './NavBar.vue';
</script>

<template>
  <div>
    <Toast />
    <Navbar />
    <RouterView class="p-2 md:p-4 pb-32 md:pb-2" />
  </div>
</template>