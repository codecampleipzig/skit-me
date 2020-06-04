<template>
  <div class="container">
    <p class="instruction">
      Player 2- Describe the picture with an awesome title
    </p>
    <div><Canvas width="800" height="600" color="green" /></div>
  </div>
</template>

<script>
import Canvas from "@/components/Canvas.vue";

export default {
  name: "ActiveWriting",
  components: {
    Canvas
  }
};
</script>

<style scoped></style>
