<template>
    <div>
      <h1>Standard User Page</h1>
      <p class="color1">Username: {{ $route.params.username }}</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      return { username: params.username };
    },
    // head() {
    //     return {
    //         link : [
    //             { rel: 'stylesheet', href: require('@/assets/css/p/bootstrap.min.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/fontawesome-all.min.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/animate-heading.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/magnific-popup.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/owl.carousel.min.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/meanmenu.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/default.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/dark.css')},
    //             { rel: 'stylesheet', href: require('@/assets/css/p/responsive.css')},
                
    //         ],
    //         script: [
    //             { src: require('@/assets/js/p/lazyload.min.js')},
    //             { src: require('@/assets/js/p/jquery-3.2.1.min.js')},
    //             { src: require('@/assets/js/p/popper.min.js')},
    //             { src: require('@/assets/js/p/bootstrap.min.js')},
    //             { src: require('@/assets/js/p/animate-heading.js')},
    //             { src: require('@/assets/js/p/particles.js')},
    //             { src: require('@/assets/js/p/particles-custom.js')},
    //             { src: require('@/assets/js/p/jquery.nav.min.js')},
    //             { src: require('@/assets/js/p/isotope.pkgd.min.js')},
    //             { src: require('@/assets/js/p/imagesloaded.pkgd.min.js')},
    //             { src: require('@/assets/js/p/jquery.magnific-popup.min.js')},
    //             { src: require('@/assets/js/p/tilt.jquery.min.js')},
    //             { src: require('@/assets/js/p/owl.carousel.min.js')},
    //             { src: require('@/assets/js/p/jquery.meanmenu.min.js')},
    //             { src: require('@/assets/js/p/jquery.smoothscroll.js')},
    //             { src: require('@/assets/js/p/main.js')},
                
    //         ]
    //     }
    // }
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/standard.css';
  </style>
  