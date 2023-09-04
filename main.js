// Point in Circle

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseX;
let mouseY;

let blackCircle = {
  x: Math.random() * cnv.width,
  y: Math.random() * cnv.height,
  r: Math.random() * 50 + 10,
};

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // LOGIC - test if mouse in circles

  // DRAW - draw circles
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "red";
  fillCircle(150, 150, 100);

  ctx.fillStyle = "green";
  fillCircle(475, 125, 60);

  ctx.fillStyle = "blue";
  fillCircle(350, 275, 40);

  ctx.fillStyle = "black";
  fillCircle(blackCircle.x, blackCircle.y, blackCircle.r);

  // Redraw
  requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

// Helper Functions
function fillCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
