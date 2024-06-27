<template>
  <div>
    <div class="error_msg" v-for="(err, index) in errors" :key="key(index)">{{ err }}</div>
  </div>
</template>

<script>
export default {
    props: ['errors'],
    methods: {
        key(index) {
            return `validation_error_${index}_${Math.random()}`
        }
    }
}
</script>
