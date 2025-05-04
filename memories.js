// Define openEnvelope globally
function openEnvelope(el) {
  const envelopeFlap = el.querySelector('.envelope-flap');
  const letter = el.querySelector('.letter');

  // Adding class for open envelope animation
  envelopeFlap.style.transition = "transform 1s ease";
  envelopeFlap.style.transform = "rotateX(180deg)";

  // Display the letter after the flap is open
  setTimeout(() => {
    letter.style.display = "block";
    letter.style.opacity = "1";
    letter.style.transition = "opacity 1s ease";
  }, 1000); // Delay to show letter after flap open
}

// Define updateText globally
window.updateText = function(buttonNumber) {
  const textBox = document.getElementById("textBox");

  const messages = {
    1: `
      <div class="bouquet">
        <div class="flower f1"></div>
        <div class="flower f2"></div>
        <div class="flower f3"></div>
        <div class="flower f4"></div>
        <div class="flower f5"></div>
        <div class="stem"></div>
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>
        <div class="wrap"></div>
      </div>
      <p style="text-align:center; font-weight:bold;">မမ အတွက်ပန်းစည်း💐💐💐</p>
      <p style="text-align:center; font-weight:bold;">Happy 4th Month Anniversary, my love! 💐</p>
    `,
    2: `
      <div class="heart-animation-container">
        <div class="big-heart"></div>
        <div class="little-hearts-container">
          <div class="little-heart lh1"></div>
          <div class="little-heart lh2"></div>
          <div class="little-heart lh3"></div>
          <div class="little-heart lh4"></div>
        </div>
      </div>
      <p style="text-align:center; font-weight:bold;">❤️ မမ က မောင့်ဘဝရဲ့ ရင်ခုန်သံလေးပါ ❤️</p>
    `,
    3: `
      <div class="love-letter-animation" id="loveLetterAnimation">
        <div class="envelope" onclick="openEnvelope(this)">
          <div class="envelope-flap"></div>
          <div class="letter">
            <p>မမ ရေ...💍</p>
            <p>မမနဲ့ လမ်းထိပ်မုန့်ဟင်းခါးဆိုင်လေးကနေ နိဗ္ဗာန်အထိ တူတူသွားချင်ပါတယ်။💞မောင်က မမ အပိုင်ပါ။💖</p>
          </div>
        </div>
        <div class="ring-container">
          <div class="wedding-ring ring-left">
            <div class="diamond diamond-left"></div>
            <div class="diamond diamond-top"></div>
          </div>
          <div class="wedding-ring ring-right">
            <div class="diamond diamond-right"></div>
            <div class="diamond diamond-top"></div>
          </div>
        </div>
      </div>
    `
  };

  textBox.innerHTML = messages[buttonNumber];
};


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
