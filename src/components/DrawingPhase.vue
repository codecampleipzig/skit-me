<template>
  <div>
    <h1>Drawing</h1>
    <Timer :timerLengthInMs="2000" ref="timer" @timerfinished="finished" />
    <div>
      <Canvas width="800" height="600" color="green" />
    </div>
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
      this.$store.dispatch("completeDrawing", this.drawingURL);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>