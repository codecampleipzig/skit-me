<template>
  <div>
    <p>Welcome to the Player Lobby</p>
    <p
      :key="index"
      v-for="(player, index) in room.players.filter(player => player.connected)"
    >
      {{ player.userName }}
    </p>
    <p>http://localhost:8080/join/{{ room.roomId }}</p>
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
    }
  }
};
</script>

<style scoped></style>
