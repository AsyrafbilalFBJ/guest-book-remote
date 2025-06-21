<script>
import Header  from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header/>
  <!-- <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav> -->
  <div>
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
