<template>
  <div>
    <h1>Drawing</h1>
    <Timer :timerLengthInMs="8000" ref="timer" @timerfinished="finished" />

    <h2>{{$store.state.currentStage.descriptionTitle || "something went wrong"}}</h2>
    <Canvas width="800" height="600" color="green" ref="canvas" />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
import Canvas from "@/components/Canvas.vue";
export default {
  components: {
    Canvas,
    Timer
  },
  data() {
    return {
      descriptionTitle: ""
    };
  },
  mounted() {
    this.$refs.timer.startTimer();
  },
  methods: {
    finished() {
      this.$store.dispatch("completeDrawing", this.$refs.canvas.getImage());
    }
  }
};
</script>

<style lang="scss" scoped>
</style>