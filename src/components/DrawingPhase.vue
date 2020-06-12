<template>
  <div>
    <div class="note-background-draw">
      <h2>
        <span
          class="instructions"
          style="margin: 0 auto 1rem auto; width=70vw"
          v-if="$store.state.currentStage.descriptionTitle"
        >
          Draw this title!
          <br />
        </span>
        <span class="drawThisTitle">
          {{
            $store.state.currentStage.descriptionTitle ||
              "Oh, no input... Draw anything you like!"
          }}
        </span>
      </h2>
    </div>
    <div class="timer-phase-container">
      <Timer :timerLengthInMs="45000" ref="timer" @timerfinished="finished" />
      <div class="interaction">
        <Canvas width="800" height="600" color="#233E50" ref="canvas" />
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

<style scoped></style>
