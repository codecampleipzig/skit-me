<template>
  <div class="home">
    <img alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
        <component
      :is="activeComponent"
      @gamephasedone="nextPhase"
      :payload="activePayload"
    >
    </component>
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
  data() {
    return {
      activeComponent: "PreStartDraw",
      activePayload: null,
      images: []
    };
  },
  components: {
    // HelloWorld,
    // Canvas,
    Timer,
    PreStartDraw,
    PreStartWrite,
    ActiveDrawing,
    ActiveWriting
  },
  methods: {
    nextPhase(payload) {
      if (this.activeComponent == "PreStartDraw") {
        this.activePayload = payload;
        this.activeComponent = "PreStartWrite";
      } else if (this.activeComponent == "PreStartWrite") {
        this.activeComponent = "PreStartDraw";
      }
    }
  }
};
</script>
