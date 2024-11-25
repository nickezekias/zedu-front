<script setup lang="ts">
import Button from 'primevue/button';
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button label="Submit" />
    <div style="background-color: var(--p-primary-color)">
      <p class="text-white white-text">Hello world</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
