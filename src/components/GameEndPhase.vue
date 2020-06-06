<template>
  <div>
    <h1>The End</h1>
    <button @click="restartGame">restart Game</button>
    <div v-for="(result,index) in  $store.state.results" :key="index">
      <img v-if="result.type == 'drawing' " :src="result.drawingURL" alt />
      <h2 v-else>{{result.descriptionTitle}}</h2>
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