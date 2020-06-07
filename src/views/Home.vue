<template>
  <div>
    <img class="logo" alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
    <transition name="slide" mode="in-out">
      <component :is="activeComponent"></component>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import StartScreen from "@/components/StartScreen.vue";
import GameSeedPhase from "@/components/GameSeedPhase.vue";
import DrawingPhase from "@/components/DrawingPhase.vue";
import WritingPhase from "@/components/WritingPhase.vue";
import GameEndPhase from "@/components/GameEndPhase.vue";

export default {
  name: "Home",

  components: {
    StartScreen,
    GameSeedPhase,
    DrawingPhase,
    WritingPhase,
    GameEndPhase
  },

  computed: {
    activeComponent() {
      return this.$store.state.currentStage.name;
    }
  }
};
</script>
