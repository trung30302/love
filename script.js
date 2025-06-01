// --- Slideshow ảnh ---
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);
showSlide(current);

// --- Typing Effect ---
const text = `
Chúc em bé của anh một ngày 01/06 thật vui vẻ và ý nghĩa! 🎉
Chúc em bé luôn cười thật tươi, hạnh phúc và mãi mãi là cô gái anh thương nhất nhé!

💌 Yêu em nhiều! 💌
`;

let i = 0;
const speed = 40;
function typeText() {
  if (i < text.length) {
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
typeText();

// --- Hiệu ứng trái tim rơi ---
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random()
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = 'pink';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size / 2, x, y + size * 0.75, x, y + size);
  ctx.bezierCurveTo(x, y + size * 0.75, x + size, y + size / 2, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    drawHeart(h.x, h.y, h.size, h.opacity);
    h.y += h.speed;
    if (h.y > canvas.height) {
      h.y = -10;
      h.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();
// --- Hiệu ứng nhấp nháy ---
const blinkText = document.getElementById('blink');    
setInterval(() => {
  blinkText.style.visibility = (blinkText.style.visibility === 'hidden' ? '' : 'hidden');
}, 500);
// --- Hiệu ứng chuyển động ---
const movingText = document.getElementById('moving-text');
let posX = 0;
let posY = 0;
function moveText() {
  posX += 1;
  posY += 1;
  if (posX > window.innerWidth) posX = -movingText.offsetWidth;
  if (posY > window.innerHeight) posY = -movingText.offsetHeight;
  movingText.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(moveText);
}
moveText();
// --- Hiệu ứng nổ bong bóng ---
const bubbleContainer = document.getElementById('bubbles');
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
  bubbleContainer.appendChild(bubble);
  
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}
setInterval(createBubble, 500);
// --- Hiệu ứng ánh sáng ---
const lightContainer = document.getElementById('lights');   
function createLight() {
  const light = document.createElement('div');
  light.className = 'light';
  light.style.left = Math.random() * window.innerWidth + 'px';
  light.style.top = Math.random() * window.innerHeight + 'px';
  light.style.animationDuration = Math.random() * 2 + 1 + 's';
  lightContainer.appendChild(light);
  
  light.addEventListener('animationend', () => {
    light.remove();
  });
}
setInterval(createLight, 1000);
// --- Hiệu ứng pháo hoa ---
const fireworksContainer = document.getElementById('fireworks');
function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = Math.random() * window.innerWidth + 'px';
  firework.style.top = Math.random() * window.innerHeight + 'px';
  fireworksContainer.appendChild(firework);
  
  firework.addEventListener('animationend', () => {
    firework.remove();
  });
}
setInterval(createFirework, 1000);
// --- Hiệu ứng ánh sao ---
const starContainer = document.getElementById('stars');
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.animationDuration = Math.random() * 2 + 1 + 's';
  starContainer.appendChild(star);
  
  star.addEventListener('animationend', () => {
    star.remove();
  });
}    
setInterval(createStar, 800);
// --- Hiệu ứng ánh sáng lấp lánh ---
const sparkleContainer = document.getElementById('sparkles');
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
  sparkleContainer.appendChild(sparkle);
  
  sparkle.addEventListener('animationend', () => {
    sparkle.remove();
  });
}    
setInterval(createSparkle, 600);
// --- Hiệu ứng ánh sáng nhấp nháy ---
const blinkLightContainer = document.getElementById('blink-lights');
function createBlinkLight() {
  const blinkLight = document.createElement('div');
  blinkLight.className = 'blink-light';
  blinkLight.style.left = Math.random() * window.innerWidth + 'px';
  blinkLight.style.top = Math.random() * window.innerHeight + 'px';
  blinkLight.style.animationDuration = Math.random() * 2 + 1 + 's';
  blinkLightContainer.appendChild(blinkLight);
  
  blinkLight.addEventListener('animationend', () => {
    blinkLight.remove();
  });
}
setInterval(createBlinkLight, 700);
// --- Hiệu ứng ánh sáng di chuyển ---  
const movingLightContainer = document.getElementById('moving-lights');
function createMovingLight() {
  const movingLight = document.createElement('div');
  movingLight.className = 'moving-light';
  movingLight.style.left = Math.random() * window.innerWidth + 'px';
  movingLight.style.top = Math.random() * window.innerHeight + 'px';
  movingLight.style.animationDuration = Math.random() * 2 + 1 + 's';
  movingLightContainer.appendChild(movingLight);
  
  movingLight.addEventListener('animationend', () => {
    movingLight.remove();
  });
}
setInterval(createMovingLight, 900);
// --- Hiệu ứng ánh sáng xoay ---
const rotatingLightContainer = document.getElementById('rotating-lights');
function createRotatingLight() {
  const rotatingLight = document.createElement('div');
  rotatingLight.className = 'rotating-light';
  rotatingLight.style.left = Math.random() * window.innerWidth + 'px';
  rotatingLight.style.top = Math.random() * window.innerHeight + 'px';
  rotatingLight.style.animationDuration = Math.random() * 2 + 1 + 's';
  rotatingLightContainer.appendChild(rotatingLight);
  
  rotatingLight.addEventListener('animationend', () => {
    rotatingLight.remove();
  });
}
