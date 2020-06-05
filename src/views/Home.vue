<template>
  <div class="home">
    <img alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import StartScreen from "@/components/StartScreen.vue";
import GameSeedPhase from "@/components/GameSeedPhase.vue";

export default {
  name: "Home",

  components: {
    StartScreen,
    GameSeedPhase
  },
  computed: {
    activeComponent() {
      return this.$store.state.currentStage.name;
    }
  }
};
</script>
