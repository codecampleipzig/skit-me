<template>
  <div>
    <div class="instructions">
      <h2>Come up with an intersting title</h2>
    </div>
    <div class="timer-phase-container">
      <Timer :timerLengthInMs="5000" ref="timer" @timerfinished="finished" />
      <div class="interaction">
        <input
          v-model="descriptionTitle"
          type="text"
          placeholder="A cookie drank my milk"
        />
      </div>
    </div>
    <button id="panic-button">Help Me!</button>
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
export default {
  components: {
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
      this.$store.dispatch("completeSeed", this.descriptionTitle);
    }
  }
};
</script>

<style lang="scss" scoped></style>
