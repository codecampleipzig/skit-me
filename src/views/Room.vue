<template>
  <div>
    <img id="logo" src="../assets/static-logo.png" alt="SkitMe Logo" />
    <div id="content">
      <transition name="slide">
        <component :is="activeComponent"></component>
      </transition>
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

<style>
.slide-enter {
  transform: translateX(-100vw);
}

.slide-enter-active {
  transition: transform 1s ease;
}

.slide-enter-to,
.slide-leave {
  transform: none;
}

.slide-leave-active {
  transition: transform 1s ease;
  position: absolute;
}

.slide-leave-to {
  transform: translateX(100vw);
}
</style>
