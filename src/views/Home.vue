<template>
  <div>
    <img src="../assets/skitmelogo.gif" alt="SkitMe Logo" style="width: 50%" />
    <br />
    <button @click="startGame" class="bigButton">Start Game</button>
    <p class="interaction">
      Inventing a story together<br />has never been more fun!
    </p>
    <footer>
      <div id="footer-links">
        <a href="https://codecampleipzig.de/impressum.html">Imprint</a>
        <a href="https://codecampleipzig.de/impressum.html"
          >Privacy statement</a
        >
      </div>
      <img src="../assets/footer-note.svg" alt="" />
    </footer>
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

<style scoped></style>
