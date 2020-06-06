<template>
  <div>
    <button @click="startGame">start game</button>
    <h1>Start</h1>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.dispatch("startGame", { numRounds: 4 });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>