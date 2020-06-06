<template>
  <div>
    <div class="instructions">
      <h2><span v-if="$store.state.currentStage.descriptionTitle">Draw this title:<br></span><span style="color:red">{{$store.state.currentStage.descriptionTitle|| "The player before you didn't give a title... Draw Something!"}}</span></h2>
    </div>
    <Timer :timerLengthInMs="4000" ref="timer" @timerfinished="finished" />
    <Canvas width="800" height="450" color="green" ref="canvas" />
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
    },
  }
};
</script>

<style lang="scss" scoped>
</style>