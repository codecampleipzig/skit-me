<template>
  <div class="container">
    <p class="playerName">Player 2</p>
    <p class="instruction">
      What do you see? <br />Find a title for this piece of art before time runs
      out!
      <Timer :timerLengthInMs="2000" ref="timer" @timerfinished="finished" />
    </p>
    <button class="startButton" type="submit" @click="start" v-if="!hasStarted">
      Start the Game
    </button>
    <input class="newTitleInput" type="text" />
    <img :disabled="!isActive" />
    <img :src="imgURL" />
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
