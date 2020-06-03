const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "brown";

let painting = false;

function getCanvasPosition(e) {
  const canvasBounds = canvas.getBoundingClientRect();
  const x = e.clientX - canvasBounds.left;
  const y = e.clientY - canvasBounds.top;
  return { x, y };
}

function startDraw(e) {
  painting = true;
  const { x, y } = getCanvasPosition(e);
  ctx.moveTo(x, y);
  ctx.beginPath();
  draw(e);
}

function draw(e) {
  if (!painting) return;
  const { x, y } = getCanvasPosition(e);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function finishDraw() {
  painting = false;
  ctx.closePath();
}

//EventListeners
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", finishDraw);
canvas.addEventListener("mousemove", draw);
