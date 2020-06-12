<template>
  <div>
    <div
      style="display: flex; align-items: center; justify-content: space-between; "
    >
      <button class="smallButton" id="restartButton" @click="restartGame">
        Start a new Game
      </button>
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
        v-for="(sheet, index) in $store.state.currentStage.sheets"
        :key="index"
      >
        <h2>
          This is the story
          <span style="margin-top:3rem; color: #EE724B">{{
            sheet[0].player || "NoName"
          }}</span>
          started...
        </h2>
        <div v-for="(phase, index) in sheet" :key="index">
          <img v-if="phase.type == 'drawing'" :src="phase.content" />
          <h3 class="title-name" v-else>{{ phase.content }}</h3>
        </div>
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

/* body {
  margin-bottom: 0;
} */
</style>
