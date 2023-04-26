

/* Set up the circle */
const circle = document.querySelector('#circle');
let circleX = 50;
let circleY = 50;
let circleRadius = 25;

/* Set up the circle movement */
let dx = 2;
let dy = 2;

/* This is the score for the game */
let score = 0;
const scoreDisplay = document.querySelector('#score');

/* I got inspiration from the DVD logo I combined some information 
from this youtube tutorial https://www.youtube.com/watch?v=K5lpQKOBz0Q */

function moveCircle() {
  /* Movement for the circle I always forget what x and y are.. */
  circleX += dx; /* movement going side by side */
  circleY += dy; /* movement going up and down */

  /* I was able to get a better idea about the window sizing from this link: 
  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls */
 
  if (circleX + circleRadius > window.innerWidth || circleX - circleRadius < 0) {
    dx = -dx; 
  }

  if (circleY + circleRadius > window.innerHeight || circleY - circleRadius < 0) {
    dy = -dy; 
  }

   /* I had to ask a friend who knows a bit of javascript I was mixing too much code together */
 
  circle.style.left = circleX - circleRadius + 'px';
  circle.style.top = circleY - circleRadius + 'px';
}

/* speed of ball moving around */
setInterval(moveCircle, 5);

/* so when i click this will add to my score */
circle.addEventListener('click', function() {
 
  score++;
  scoreDisplay.innerHTML = score;
});