<template>
    <div class="countdown">Starting in {{ countdown }} seconds</div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    timerLengthInMs: {
      type: Number,
      default: 45000
    }
  },
  data: function() {
    return {
      countdown: this.timerLengthInMs / 1000,
      intervalHandle: null
    };
  },
  methods: {
    startTimer() {
      const startTime = Date.now();
      const endTime = startTime + this.timerLengthInMs;
      this.countdown = Math.round(this.timerLengthInMs / 1000);

      this.intervalHandle = setInterval(() => {
        const remainingTimeInMs = endTime - Date.now();
        if (remainingTimeInMs > 0) {
          this.countdown = Math.round(remainingTimeInMs / 1000);
        } else {
          clearInterval(this.intervalHandle);
          this.intervalHandle = null;
          this.countdown = 0;
          this.$emit("timerfinished");
        }
      }, 1000);
    }
  }
};
</script>

// Timer // Reset display at startup

<style scoped>
.countdown {
size: 10em
}
</style>
