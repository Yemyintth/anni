document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('ballCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Ball {
    constructor() {
      this.radius = Math.random() * 8 + 3;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.dx = (Math.random() - 0.5) * 2;
      this.dy = (Math.random() - 0.5) * 2;
      this.color = `hsl(${Math.random() * 360}, 70%, 85%)`;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx *= -1;
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy *= -1;
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  const balls = Array.from({ length: 50 }, () => new Ball());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
