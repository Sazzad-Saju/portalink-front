<template>
    <div>
      <h1>Basic User Page</h1>
      <p class="color1">Username: {{ $route.params.username }}</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      return { username: params.username };
    },
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/basic.css';
  </style>
  