<template>
  <div>
    <h1>The End</h1>
    <button @click="restartGame">restart Game</button>
  </div>
</template>

<script>
export default {
  methods: {
    restartGame() {
      this.$store.dispatch("restartGame");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>