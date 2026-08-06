<template>
  <footer class="d-footer">
    <div class="">
      <p class="mb-0 text-center"> &copy; <span class="current-year">{{ currentYear }}</span> Made With ❤️ by Wowtheme7.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
