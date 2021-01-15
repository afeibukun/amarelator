<template>
  <div class="footer-container container mx-auto py-2 md:px-20">
    <div class="footer-inner-container">
      <p class="text-gray-600 text-center">
        Amarelator - Simple Love Calculator {{ this.currentYear }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentYear() {
      let d = new Date();
      return d.getFullYear();
    },
  },
};
</script>

<style></style>
