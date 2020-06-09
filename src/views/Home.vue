<template>
  <div>
    <img src="../assets/skitmelogo.gif" alt="SkitMe Logo" />
    <br />
    <form @submit.prevent="submit">
      <input v-model.trim="username" type="text" placeholder="type username" />
      <button type="submit">join</button>
    </form>
    <button @click="startGame" class="startButton">Start a new game</button>
    <p class="tagline">
      Inventing a story together<br />
      has never been more fun!
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.dispatch("startGame", { numRounds: 5 });
    }
  }
};
</script>

<style scoped>
</style>
