<template>
  <div>
    <img src="../assets/skitmelogo.gif" alt="SkitMe Logo" style="width: 50%" />
    <br />
    <button @click="startGame" class="startButton">start game</button>
    <p class="interaction">
      Inventing a story together<br />has never been more fun!
    </p>
    <footer>
      <div id="footer-links">
        <p>About</p>
        <p id="contact" onclick="window.open('mailto:tlevin8@gmail.com');">
          Contact me
        </p>
        <p>Terms</p>
      </div>
      <p id="disclaimer" style="line-height: 1em">
        **We are not responsible for any user generated content (drawings,
        messages, usernames)**
      </p>
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

<style scoped>
#contact:hover {
  color: blue;
  cursor: pointer;
}
</style>
