<template>
  <div>
    <img id="logo" src="../assets/static-logo.png" alt="SkitMe Logo" />
    <div id="content">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PlayerLobby from "@/components/PlayerLobby.vue";
import GameSeedPhase from "@/components/GameSeedPhase.vue";
import DrawingPhase from "@/components/DrawingPhase.vue";
import WritingPhase from "@/components/WritingPhase.vue";
import GameEndPhase from "@/components/GameEndPhase.vue";

export default {
  name: "Home",

  components: {
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
