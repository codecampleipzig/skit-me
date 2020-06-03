<template>
  <div class="container">
    <p>
      Player 1- Hit start and draw the title that appeares before time runs out
    </p>
    <button type="submit">Start</button>
    <div><Canvas width="800" height="600" color="green" /></div>
  </div>
</template>

<script>
import Canvas from "@/components/Canvas.vue";

export default {
  name: "PreStartDraw",
  components: {
    Canvas
  }
};
</script>

<style scoped></style>
