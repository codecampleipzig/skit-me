<template>
  <div>
    <p>Welcome to the Player Lobby</p>
    <p :key="index" v-for="(player, index) in room.players">{{ player }}</p>
    <p>http://localhost:8080/join/{{ room.roomId }}</p>
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
    }
  }
};
</script>

<style scoped></style>
