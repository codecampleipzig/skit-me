<template>
  <div class="container">
    <p class="playerName">Player 1</p>
    <p class="instruction">
      What do you see? <br />Find a title for this piece of art before time runs
      out!
      <Timer :timerLengthInMs="10000" ref="timer" @timerfinished="finished" />
    </p>
    <button class="startButton" type="submit" @click="start" v-if="!hasStarted">
      Start the Game
    </button>
    <input v-if="hasStarted" class="newTitleInput" type="text" />
    <img :disabled="!isActive" />
    <img
      v-if="hasStarted"
      style="width: 40%; margin: 5px auto;"
      src="../assets/mock.jpg"
    />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";

export default {
  name: "PreStartWrite",
  components: {
    Timer
  },
  props: ["payload"],
  data() {
    return {
      imgURL: "",
      hasStarted: false,
      isFinished: false
    };
  },
  computed: {
    isActive() {
      return this.hasStarted && !this.isFinished;
    }
  },
  methods: {
    start() {
      this.$refs.timer.startTimer();
      this.hasStarted = true;
    },
    finished() {
      this.isFinished = true;
      this.$emit("gamephasedone", this.$refs.canvas.getImage());
    }
  }
};
</script>

<style scoped></style>
