<template>
    <div>
      <h1>Premium User Page</h1>
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
  @import '@/assets/css/premium.css';
  </style>
  