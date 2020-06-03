<template>
  <div class="home">
    <img alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <Canvas width="800" height="600" color="000000" /> -->
    <Timer />
    <PreStartDraw />
    <PreStartWrite />
    <ActiveDrawing />
    <ActiveWriting />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Canvas from "@/components/Canvas.vue";
import Timer from "@/components/Timer.vue";
import PreStartDraw from "@/components/PreStartDraw.vue";
import PreStartWrite from "@/components/PreStartWrite.vue";
import ActiveDrawing from "@/components/ActiveDrawing.vue";
import ActiveWriting from "@/components/ActiveWriting.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // Canvas,
    Timer,
    PreStartDraw,
    PreStartWrite,
    ActiveDrawing,
    ActiveWriting
  }
};
</script>
