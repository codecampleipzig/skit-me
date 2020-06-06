<template>
  <div class="home">
    <img alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import StartScreen from "@/components/StartScreen.vue";
import PlayerLobby from "@/components/PlayerLobby.vue";
import GameSeedPhase from "@/components/GameSeedPhase.vue";
import DrawingPhase from "@/components/DrawingPhase.vue";
import WritingPhase from "@/components/WritingPhase.vue";
import GameEndPhase from "@/components/GameEndPhase.vue";

export default {
  name: "Home",

  components: {
    StartScreen,
    PlayerLobby,
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
