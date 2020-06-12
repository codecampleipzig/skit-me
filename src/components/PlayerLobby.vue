<template>
  <div>
    <h1>
      Invite your Friends!
    </h1>
    <h2>Multiplayer Game for 2 to 8 players</h2>

    <div style="display:flex; justify-content:center; align-items:center">
      <p id="linkToRoom">{{ url }}/join/{{ room.roomId }}</p>
      <button class="smallButton" @click="copyLink()" type="submit">
        Copy Link
      </button>
    </div>
    <h2>Who's playing?</h2>
    <div class="playerNames">
      <p
        :class="{ ready: player.ready }"
        :key="index"
        v-for="(player, index) in room.players.filter(
          player => player.connected
        )"
      >
        {{ player.userName }}
      </p>
    </div>
    <button class="bigButton" @click="signalReady">
      I'm ready!
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
