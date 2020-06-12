<template>
  <div>
    <div class="note-background">
      <h2 class="instructions">
        Create a Title, anything! Really!
      </h2>
    </div>
    <div class="timer-phase-container">
      <Timer :timerLengthInMs="25000" ref="timer" @timerfinished="finished" />
      <div class="interaction">
        <input
          v-model="descriptionTitle"
          type="text"
          maxlength="40"
          placeholder="A cookie drank my milk"
        />
      </div>
    </div>
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

<style scoped></style>
