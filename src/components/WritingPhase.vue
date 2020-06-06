<template>
  <div>
    <h1>Writing</h1>
    <img :src="$store.state.currentStage.drawingURL" />
    <Timer :timerLengthInMs="20000" ref="timer" @timerfinished="finished" />
    <input v-model="descriptionTitle" type="text" />
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
      this.$store.dispatch("completeWriting", this.descriptionTitle);
    }
  }
};
</script>

<style lang="css" scoped>
img {
  background-color: white;
  width: 100%;
  max-width: 500px;
}
</style>
