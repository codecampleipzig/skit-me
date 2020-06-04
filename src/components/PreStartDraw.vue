<template>
  <div class="container">
    <p class="playerName">Player 1</p>
    <p class="instruction">
      How would you draw this? Be Picasso and draw this sentence before time
      runs out !
      <Timer :timerLengthInMs="5000" ref="timer" @timerfinished="finished" />
    </p>
    <button class="startButton" type="submit" @click="start" v-if="!hasStarted">
      Start the Game
    </button>
    <Canvas ref="canvas" width="800" height="600" :disabled="!isActive" />
  </div>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
import Timer from "@/components/Timer.vue";

export default {
  name: "PreStartDraw",
  components: {
    Canvas,
    Timer
  },
  data() {
    return {
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
