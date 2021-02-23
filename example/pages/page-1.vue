<template>
  <div>
    <h2>Page 1</h2>
  </div>
</template>

<script>

export default {
  head () {
    return {
      meta: this.$seo({
        title: 'Page 1',
        description: 'This is a Page 1 for the NuxtSite module.'
      })
    }
  }
}
</script>
