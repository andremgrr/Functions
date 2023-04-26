
const circle = document.getElementById('circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

function animate() {
  /* Distance between the circle and cursor */
  const dx = mouseX - circleX;
  const dy = mouseY - circleY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  /* delay for circle */
  const speed = 0.05;
  circleX += dx * speed;
  circleY += dy * speed;
  
  /* inspiration I got from codepen https://codepen.io/quentindigital/pen/BapazMy */
  circle.style.left = circleX + 'px';
  circle.style.top = circleY + 'px';
  

  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
  /* I also watched this youtube video to understand the delay better https://www.youtube.com/watch?v=7Cu_8lu8BCU */
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animate();
