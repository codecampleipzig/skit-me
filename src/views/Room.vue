<template>
  <div class="home">
    <img alt="SkitMe Logo" src="../assets/skitmelogo.svg" />
    <transition name="slide">
      <component :is="activeComponent"></component>
    </transition>
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

<style scoped>
.slide-enter {
  transform: translateX(-100vw);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-leave-active {
  position: absolute;
}

.slide-leave-to {
  transform: translateX(100vw);
}
</style>
