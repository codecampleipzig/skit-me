<template>
  <div>
    <img src="../assets/static-logo.png" alt="SkitMe Logo" style="width: 20%" />
    <h1>Invite your Friends!</h1>
    <h2>Multiplayergame for 2 to 8 players</h2>

    <div style="display:flex; justify-content:center; align-items:center">
      <p id="linkToRoom">{{ url }}/join/{{ room.roomId }}</p>
      <button class="smallButton" @click="copyLink()" type="submit">Copy Link</button>
    </div>
    <h1>Who's playing?</h1>
    <div class="playerNames">
      <p
        :key="index"
        v-bind:class="{ ready: player.ready}"
        v-for="(player, index) in room.players.filter(player => player.connected)"
      >{{ player.userName }}</p>
    </div>
    <button class="bigButton" @click="signalReady">We're all in, let's start!</button>
  </div>
</template>

<script>
export default {
  computed: {
    room() {
      return this.$store.state.room;
    }
  },
  data: () => {
    return {
      url:
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        window.location.port
    };
  },

  methods: {
    signalReady() {
      this.$store.dispatch("signalReady");
    },
    copyLink() {
      const copyText = document.querySelector("#linkToRoom");
      navigator.clipboard.writeText(copyText.textContent);
    }
  }
};
</script>

<style scoped>
.ready {
  color: #ea591a;
}
</style>
