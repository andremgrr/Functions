var circle = document.getElementById("circle");
var score = document.getElementById("score");
var scoreValue = 0;
var circleSpeed = 3;
var circleDirectionX = 1;
var circleDirectionY = 1;

// Set up the initial position of the circle
var circleX = Math.floor(Math.random() * (window.innerWidth - circle.offsetWidth));
var circleY = Math.floor(Math.random() * (window.innerHeight - circle.offsetHeight));
circle.style.left = circleX + "px";
circle.style.top = circleY + "px";

circle.addEventListener("click", function() {
	scoreValue++;
	score.innerHTML = "Score: " + scoreValue;
	circle.style.backgroundColor = getRandomColor();
	moveCircle();
});

function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function moveCircle() {
	// Get the current position of the circle
	var circleX = parseInt(circle.style.left);
	var circleY = parseInt(circle.style.top);

	// Calculate the new position of the circle
	var newCircleX = circleX + circleSpeed * circleDirectionX;
	var newCircleY = circleY + circleSpeed * circleDirectionY;

	// Check if the circle hits the walls of the window
	if (newCircleX <= 0 || newCircleX >= window.innerWidth - circle.offsetWidth) {
		circleDirectionX *= -1;
	}
	if (newCircleY <= 0 || newCircleY >= window.innerHeight - circle.offsetHeight) {
		circleDirectionY *= -1;
	}

	// Update the position of the circle
	circle.style.left = newCircleX + "px";
	circle.style.top = newCircleY + "px";

	// Keep moving the circle
	window.requestAnimationFrame(moveCircle);
}