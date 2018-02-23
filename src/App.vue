<template>
  <div>
    <app-header></app-header>
    <div class="container vista-principal">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header,
    }
  }
</script>
<style lang="scss">
  .vista-principal {
    margin-top: 80px; 
  }
</style>
