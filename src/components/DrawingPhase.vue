<template>
  <div>
    <div>
      <h2>
        <span
          class="instructions"
          v-if="$store.state.currentStage.descriptionTitle"
        >
          Draw this title!
          <br />
        </span>
        <span class="drawThisTitle">
          {{
            $store.state.currentStage.descriptionTitle ||
              "The player before you wasn't creative... So you can draw anything you like!"
          }}
        </span>
      </h2>
    </div>
    <div class="timer-phase-container">
      <Timer :timerLengthInMs="25000" ref="timer" @timerfinished="finished" />
      <div class="interaction">
        <Canvas width="800" height="600" color="black" ref="canvas" />
      </div>
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
      this.$store.dispatch("completeDrawing", this.$refs.canvas.getImage());
    }
  }
};
</script>

<style lang="scss" scoped></style>
