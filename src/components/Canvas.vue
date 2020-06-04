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
    },
    disabled: {
      type: Boolean,
      default: false
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
      if (this.disabled) return;
      this.painting = true;
      const { x, y } = this.getCanvasPosition(e);
      this.ctx.moveTo(x, y);
      this.ctx.beginPath();
      this.draw(e);
    },
    draw(e) {
      if (this.disabled) return;

      if (!this.painting) return;
      const { x, y } = this.getCanvasPosition(e);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    },
    finishDraw() {
      if (this.disabled) return;

      this.ctx.closePath();
      this.painting = false;
    },
    getImage() {
      const canvasBounds = this.$refs.canvas.getBoundingClientRect();
      return this.ctx.getImageData(
        0,
        0,
        canvasBounds.width,
        canvasBounds.height
      );
    }
  }
};
</script>

<style scoped>
canvas {
  border: 3px black solid;
  background-color: white;
}
</style>
