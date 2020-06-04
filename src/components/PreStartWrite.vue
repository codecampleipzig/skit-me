<template>
  <div class="container">
    <p>
      Player 1- Hit start and write the title that appeares before time runs out
    </p>
    <button type="submit">Start</button>
    <input type="text" />
    <img :src="imgURL" />
  </div>
</template>

<script>
export default {
  name: "PreStartWrite",
  components: {},
  props: ["payload"],
  data() {
    return {
      imgURL: ""
    };
  }
};
</script>

<style scoped></style>
