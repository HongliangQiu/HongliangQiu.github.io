// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

class Ball {
  /**
   *
   * @param {number} x 小球展示的起始 x 轴位置
   * @param {number} y 小球展示的起始 y 轴位置
   * @param {number} velX 小球 x 轴运行速度
   * @param {number} velY 小球 y 轴运行速度
   * @param {rgb} color
   * @param {number} size
   */
  constructor(x, y, velX, velY, color, size) {
    // 小球所处的位置以圆心计算
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }


}

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// 生成小球
const balls = [];
while (balls.length < 50) {
  const size = random(10, 20);

  // ball position always drawn at least one ball width, away from the edge of the canvas, to avoid drawing errors
  let x = random(0 + size, width - size);
  let y = random(0 + size, height - size);
  let velX = random(-7, 7);
  let velY = random(-7, 7);
  let color = randomRGB();
  const ball = new Ball(x, y, velX, velY, color, size);
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}

loop();
