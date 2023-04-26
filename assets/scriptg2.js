var button = document.getElementById("button");
var isPressed = false;

button.addEventListener("mousedown", function() {
  isPressed = true;
  button.style.transform = "scale(10)";
});

/* increase size when clicked */

document.addEventListener("mouseup", function() {
  isPressed = false;
  button.style.transform = "scale(1)";
});

/* decrease size on mouse leave */

button.addEventListener("mouseleave", function() {
  if (isPressed) {
    button.style.transform = "scale(1)";
  }
  isPressed = false;
});