<template>
  <div>
    <div class="instructions">
      <h2>Come up with an intersting title</h2>
    </div>
    <Timer :timerLengthInMs="5000" ref="timer" @timerfinished="finished" />
    <input v-model="descriptionTitle" type="text" />
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

<style lang="scss" scoped>
</style>