<template>
  <div>
    <h1>The End</h1>
    <!-- <p>{{ $store.state.currentStage.results }}</p> -->
    <button @click="restartGame">Start a new Game</button>

    <div
      v-for="(sheets, index) in $store.state.currentStage.sheets"
      :key="index"
      style="display: flex; flex-direction:column"
    >
      <div v-for="(phase, index) in sheets" :key="index">
        <img v-if="phase.type == 'drawing'" :src="phase.content" />
        <h2 v-else>{{ phase.content }}</h2>
      </div>
    </div>
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

<style lang="css" scoped>
img {
  background-color: white;
  width: 100%;
  max-width: 500px;
}
</style>
