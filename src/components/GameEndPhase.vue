<template>
  <div>
<<<<<<< HEAD
    <div
      style="display: flex; align-items: center; justify-content: space-between; "
    >
      <img
        src="../assets/static-logo.png"
        alt="SkitMe Logo"
        style="width: 20%"
      />
      <button class="smallButton" @click="restartGame">Start a new Game</button>
    </div>
    <img
      src="../assets/note-gray.png"
      alt="And here are your Skits..."
      style="width: 50%"
    />
    <div class="sheets-container">
      <!-- <p>{{ $store.state.currentStage.results }}</p> -->
      <div
        class="sheet-item"
        v-for="(sheets, index) in $store.state.currentStage.results"
        :key="index"
      >
        <h2>
          This is the story <span style="color: #4C7DFD">Inga</span>
          started...
        </h2>
        <div v-for="(phase, index) in sheets" :key="index">
          <img v-if="phase.type == 'drawing'" :src="phase.content" />
          <h3 class="title-name" v-else>{{ phase.content }}</h3>
        </div>
=======
    <h1>The End</h1>

    <button @click="restartGame">Start a new Game</button>
    <div
      v-for="(sheet, index) in $store.state.currentStage.sheets"
      :key="index"
    >
      <div v-for="(result, index) in sheet" :key="index">
        <img v-if="result.type == 'drawing'" :src="result.content" />
        <h2 v-else>{{ result.content }}</h2>
>>>>>>> develop
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
.sheet-item img {
  background-color: white;
  width: 100%;
  max-width: 500px;
}

h1,
h2,
h3 {
  font-family: "Indie Flower", cursive;
}
</style>
