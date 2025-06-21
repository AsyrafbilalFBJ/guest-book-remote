<script>

export default {
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store?.state?.count ?? 0
    }
  },
  methods: {
    increment() {
      this.$store?.commit('increment')
    }
  },
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <button class="btn btn-neutral" type="button" @click="increment">count is {{ count }}</button>
</template>

<style scoped>
</style>
