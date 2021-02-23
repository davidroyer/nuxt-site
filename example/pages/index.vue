<template>
  <div>
    <div class="banner">
      <h2>Test 3</h2>
      {{ msg }}
    </div>
  </div>
</template>

<script>
// import tailwindConfig from '~tailwind.config'

export default {
  data: () => ({
    msg: 'My Message'
  })

}
</script>

<style scoped>
/* .banner {
  @apply bg-indigo-900 text-center py-4;
  @screen lg {
    @apply bg-yellow-500;
  }
  &:hover {
    @apply bg-indigo-800;
    @screen lg {
      @apply bg-yellow-600;
    }
  }
} */
</style>
