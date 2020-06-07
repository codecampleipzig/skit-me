<template>
  <div>
    <canvas
      :width="width"
      :height="height"
      ref="canvas"
      @mousedown="startDraw"
      @mouseup="finishDraw"
      @mouseleave="finishDraw"
      @mouseenter="continueDraw"
      @mousemove="draw"
      @touchstart="touchStart"
      @touchend="touchEnd"
      @touchmove="touchMove"
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
      const xRatio = (canvasBounds.right - canvasBounds.left) / 800;
      const yRatio = (canvasBounds.bottom - canvasBounds.top) / 600;
      const x = (e.clientX - canvasBounds.left) / xRatio;
      const y = (e.clientY - canvasBounds.top) / yRatio;
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
    continueDraw(e) {
      if (e.buttons == 1) {
        this.startDraw(e);
      }
    },
    touchStart(e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.ctx.canvas.dispatchEvent(mouseEvent);
    },
    touchMove(e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.ctx.canvas.dispatchEvent(mouseEvent);
    },
    touchEnd() {
      const mouseEvent = new MouseEvent("mouseup", {});
      this.ctx.canvas.dispatchEvent(mouseEvent);
    },
    getImage() {
      return this.$refs.canvas.toDataURL();
    }
  }
};
</script>

<style scoped>
canvas {
  border: 3px black solid;
  background-color: white;
  max-width: 80%;
  width: auto;
}
</style>
