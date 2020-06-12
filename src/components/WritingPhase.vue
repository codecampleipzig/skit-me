<template>
  <div>
    <div class="note-background">
      <h2 class="instructions">
        What do you see? Give it a title!
      </h2>
    </div>
    <Timer :timerLengthInMs="25000" ref="timer" @timerfinished="finished" />
    <input v-model="descriptionTitle" type="text" />
    <br />
    <img :src="$store.state.currentStage.drawingURL" />
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
