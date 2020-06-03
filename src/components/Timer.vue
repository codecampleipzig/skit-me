<template>
  <div class="timer">
    <div class="countdown" id="countdown">{{ countdown }}</div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    timeDisplay: {
      type: String,
      default: "45000"
    }
  },
  data: function() {
    return {
      countdown: 0,
      intervalHandle: null
    };
  },
  methods: {
    startTimer() {
      const startTime = Date.now();
      const endTime = startTime + countdownDurationInMs;
      const countdownDurationInMs = 1000;
      this.countdown = Math.round(countdownDurationInMs / 1000);

      this.intervalHandle = setInterval(() => {
        const remainingTimeInMs = endTime - Date.now();
        if (remainingTimeInMs > 0) {
          this.countdown = Math.round(remainingTimeInMs / 1000);
        } else {
          clearInterval(this.intervalHandle);
          this.intervalHandle = null;
          this.countdown = 0;
        }
      }, 1000);
    }
  }
};
</script>

// Timer // Reset display at startup

<style scoped></style>
