<template>
  <div class="container">
    <p>
      Player 1- Hit start and draw the title that appeares before time runs out
    </p>
    <button type="submit" @click="startTimer()">Start</button>
    <Timer timeDisplay="25000" />
    <div><Canvas width="800" height="600" /></div>
  </div>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
import Timer from "@/components/Timer.vue";

export default {
  name: "PreStartDraw",
  components: {
    Canvas,
    Timer
  }
};
</script>

<style scoped></style>
