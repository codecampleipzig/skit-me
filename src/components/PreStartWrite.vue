<template>
  <div class="container">
    <p class="instruction">
      Player 1- Hit start and write the title that appeares before time runs out
    </p>
    <button class="startButton" type="submit" @click="start" v-if="!hasStarted">Start the Game</button>
    <Timer :timerLengthInMs="2000" ref="timer" @timerfinished="finished" />
    <input type="text" />
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
