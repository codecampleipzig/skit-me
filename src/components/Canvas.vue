<template>
  <div>
    <canvas
      :width="width"
      :height="height"
      ref="canvas"
      @mousedown="startDraw"
      @mouseup="finishDraw"
      @mousemove="draw"
    ></canvas>
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "800px"
    },
    height: {
      type: String,
      default: "600px"
    },
    color: {
      type: String,
      default: "#000000"
    }
  },
  data() {
    return {
      ctx: null,
      painting: false
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.strokeStyle = this.color;
  },
  methods: {
    getCanvasPosition(e) {
      const canvasBounds = this.$refs.canvas.getBoundingClientRect();
      const x = e.clientX - canvasBounds.left;
      const y = e.clientY - canvasBounds.top;
      return { x, y };
    },
    startDraw(e) {
      this.painting = true;
      const { x, y } = this.getCanvasPosition(e);
      this.ctx.moveTo(x, y);
      this.ctx.beginPath();
      this.draw(e);
    },
    draw(e) {
      if (!this.painting) return;
      const { x, y } = this.getCanvasPosition(e);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    },
    finishDraw() {
      this.ctx.closePath();
      this.painting = false;
    }
  }
};
</script>

<style scoped>
canvas {
  border: 3px black solid;
}
</style>
