<template>
  <div>
    <h1>The End</h1>

    <button @click="restartGame">Start a new Game</button>
    <div v-for="(sheet, index) in $store.state.currentStage.results" :key="index">
      <div v-for="(result, index) in sheet" :key="index">
        <img v-if="result.type == 'drawing' " :src="result.content" />
        <h2 v-else>{{ result.content }}</h2>
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
