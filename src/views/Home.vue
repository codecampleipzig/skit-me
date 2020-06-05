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
import PreStartDraw from "@/components/PreStartDraw.vue";
import PreStartWrite from "@/components/PreStartWrite.vue";
import ActiveDrawing from "@/components/ActiveDrawing.vue";
import ActiveWriting from "@/components/ActiveWriting.vue";

export default {
  name: "Home",
  data() {
    return {
      activePayload: null,
      images: []
    };
  },
  components: {
    // HelloWorld,
    // Canvas,
    start: PreStartDraw,
    seed: PreStartWrite,
    ActiveDrawing,
    ActiveWriting
  },
  computed: {
    activeComponent() {
      return this.$store.state.currentStage.name;
    }
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
