<template>
  <div>
    <p>Welcome to the Player Lobby</p>
    <p
      :key="index"
      v-for="(player, index) in room.players.filter(player => player.connected)"
    >
      {{ player.userName }}
    </p>
    <p id="linktoRoom">http://localhost:8080/join/{{ room.roomId }}</p>
    <button @click="copyLink()" type="submit">copy</button>
    <button @click="signalReady">I'm ready - let's play!</button>
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
