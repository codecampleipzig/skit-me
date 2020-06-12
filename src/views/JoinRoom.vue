<template>
  <div id="content">
    <img id="logoMain" src="../assets/skitmelogo.gif" alt="SkitMe Logo" />
    <br />
    <form @submit.prevent="submit">
      <input
        class="player-name-input"
        v-model.trim="username"
        type="text"
        placeholder="What's your name?"
        required
        maxlength="15"
        pattern=".{1,15}"
      />
      <button type="submit" class="bigButton">Join the Game</button>
    </form>
    <p class="interaction">
      Inventing a story together<br />has never been more fun!
    </p>
    <footer>
      <div id="footer-links">
        <a href="https://codecampleipzig.de/impressum.html">Imprint</a>
        <a href="https://codecampleipzig.de/privacy.html">Privacy statement</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$store.dispatch("joinRoom", {
        userName: this.username,
        roomId: this.$route.params.roomId
      });
    }
  },
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style scoped></style>
