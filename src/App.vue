<template>
  <div>
    <app-header></app-header>
    <div class="columns vista-principal">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
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
    margin-top: 60px; 
  }
</style>
