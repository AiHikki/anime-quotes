import { canvas } from './refs';

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d');

const colors = ['#BB0000', '#666666', '#DDDEC6', '#453831', '#000000'];

let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Rectangle {
  constructor(x, y, dx, dy, width, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
    this.minWidth = width;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }
  draw() {
    c.beginPath();
    c.fillRect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (this.x > canvas.width - 50 || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > canvas.height - 50 || this.y < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.width < 50) {
        this.width += 2;
        this.height += 2;
      }
    } else if (this.width > this.minWidth) {
      this.width -= 1;
      this.height -= 1;
    }

    this.draw();
  }
}

let rectangels = [];

init();
animate();

function init() {
  rectangels = [];
  for (let i = 0; i < 1000; i++) {
    const width = Math.random() * 4 + 2;
    const x = Math.random() * canvas.width - width;
    const y = Math.random() * canvas.height - width;
    const dx = Math.random() > 0.5 ? 1 : -1;
    const dy = Math.random() > 0.5 ? 1 : -1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    rectangels.push(new Rectangle(x, y, dx, dy, width, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  rectangels.forEach(rect => rect.update());
}
