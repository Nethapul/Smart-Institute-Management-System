<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const route = useRoute()
    const showLayout = computed(() => route.meta.layout !== false)
    return { showLayout }
  }
}
</script>
