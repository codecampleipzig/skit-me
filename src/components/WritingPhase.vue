<template>
  <div>
    <h2 class="instructions">
<<<<<<< HEAD
      How would you describe this drawing?<br />Give it a title!
    </h2>
    <Timer :timerLengthInMs="10000" ref="timer" @timerfinished="finished" />
    <input v-model="descriptionTitle" type="text" /> <br />
=======
      How would you describe this drawing?
      <br />Give it a title!
    </h2>
    <Timer :timerLengthInMs="10000" ref="timer" @timerfinished="finished" />
    <input v-model="descriptionTitle" type="text" />
    <br />
>>>>>>> develop
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
