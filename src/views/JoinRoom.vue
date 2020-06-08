<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model.trim="username" type="text" placeholder="type username" />
      <button type="submit">join</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$store.dispatch("joinRoom", {
        userName: this.username,
        roomId: this.$route.params.roomId,
      });
    },
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style scoped></style>
