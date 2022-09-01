<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //there [] because of namespace in index.js
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>