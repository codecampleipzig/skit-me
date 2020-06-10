<template>
  <div>
    <h1>Invite your Friends!</h1>
    <h2>We recommend 4-10 players</h2>
    <div style="display:flex; justify-content:center; align-items:center">
      <p id="linkToRoom">http://localhost:8080/join/{{ room.roomId }}</p>
      <button class="copyButton" @click="copyLink()" type="submit">
        Copy Link
      </button>
    </div>
    <h1>Who's playing?</h1>
    <div class="playerNames">
      <!-- <p
        :key="index"
        v-for="(player, index) in room.players.filter(player => player.connected)"
      >
        {{ player.userName }}
      </p> -->
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
      <p>1234567890</p>
    </div>
    <button class="startButton" @click="signalReady">
      We're all in, let's start!
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    room() {
      return this.$store.state.room;
    }
  },

  methods: {
    signalReady() {
      this.$store.dispatch("signalReady");
    },
    copyLink() {
      /* Get the text field */
      var copyText = document.getElementById("#linktoRoom");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
  }
};
</script>

<style scoped></style>
