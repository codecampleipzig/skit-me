<template>
  <div>
    <p>Welcome to the Player Lobby</p>
    <p
      :key="index"
      v-for="(player, index) in room.players.filter(player => player.connected)"
    >
      {{ player.userName }}
    </p>
    <p>http://172.30.9.85:8080/join/{{ room.roomId }}</p>
    <button @click="signalReady">Start Game</button>
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
    finished() {
      this.$store.dispatch("completePlayerLobby");
    },
    signalReady() {
      this.$store.dispatch("signalReady");
    }
  }
};
</script>

<style scoped></style>
