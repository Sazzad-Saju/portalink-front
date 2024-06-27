<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  components: {},
  async mounted() {
  },
  data() {
    return {
    }
  },
  async fetch() {
    // await this.$axios.get('/get/top/notification')
    //   .then((response) => {
    //     this.$store.commit('settingsModule/setTopNotification', response.data);
    //   })

    // await this.$axios.get('/get/logo')
    //   .then((response) => {
    //     this.$store.commit('settingsModule/setDefaultSettings', response.data.data);
    //   })
  },
  async created() {
  },
  methods: {},
}
</script>

