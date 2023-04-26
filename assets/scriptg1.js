var button = document.getElementById("button");
var container = document.querySelector(".container");

container.addEventListener("mousemove", moveButton);

function moveButton(event) {
  // Distance from the center of the container to the cursor
  var deltaX = event.clientX - container.offsetLeft - container.offsetWidth / 16;
  var deltaY = event.clientY - container.offsetTop - container.offsetHeight / 8;

  // Distance that the button should move in each direction
  var moveX = deltaX / 6;
  var moveY = deltaY / 6;

  // Move the button to follow the cursor
  button.style.left = container.offsetWidth / 2 + moveX + "px";
  button.style.top = container.offsetHeight / 2 + moveY + "px";
}