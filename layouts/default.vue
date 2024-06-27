<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  computed: {
    cssFile() {
      const path = this.$route.path;
      if (path.startsWith('/p/')) {
        return require('@/assets/css/premium.css');
      } else if (path.startsWith('/s/')) {
        return require('@/assets/css/standard.css');
      }else if (path.startsWith('/b/')) {
        return require('@/assets/css/basic.css');
      }
      return null;
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: this.cssFile,
        },
      ],
    };
  }
}
</script>

