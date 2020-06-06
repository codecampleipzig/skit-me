<template>
  <div>
    <p>Welcome to the Player Lobby</p>
    <Timer :timerLengthInMs="2000" ref="timer" @timerfinished="finished" />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
export default {
  components: {
    Timer
  },
  mounted() {
    this.$refs.timer.startTimer();
  },
  methods: {
    finished() {
      this.$store.dispatch("completePlayerLobby");
    }
  }
};
</script>

<style scoped></style>
