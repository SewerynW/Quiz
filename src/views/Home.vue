<template>
  <div class="parralax">
    <p>Home</p>
    <button @click="onClick">Go to</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    onClick() {
      this.$router.push("quiz")
    }
  }
}
</script>

<style lang="scss" scoped>
.parralax {
}
</style>
