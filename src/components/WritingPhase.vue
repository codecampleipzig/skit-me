<template>
  <div>
    <h1>Writing</h1>
    <input v-model="descriptionTitle" type="text" />
    <Timer :timerLengthInMs="2000" ref="timer" @timerfinished="finished" />
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


<style lang="scss" scoped>
</style>