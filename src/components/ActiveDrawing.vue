<template>
  <div class="container">
    <p>
      Player 1 - Draw the title before time runs out
    </p>
    <p>The cookie drank my milk</p>
    <div><Canvas width="800" height="600" color="green" /></div>
  </div>
</template>

<script>
import Canvas from "@/components/Canvas.vue";

export default {
  name: "ActiveDrawing",
  components: {
    Canvas
  }
};
</script>

<style scoped></style>
