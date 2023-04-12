var button = document.getElementById("myButton");

// Set the initial position of the button to the center of the screen
button.style.position = "absolute";
button.style.left = "50%";
button.style.top = "50%";
button.style.transform = "translate(-50%, -50%)";

// Attach the mousemove and mouseleave event listeners to the button
button.addEventListener("mousemove", moveButton);
button.addEventListener("mouseleave", resetButton);

// Function to move the button when the cursor is over it
function moveButton(event) {
  // Calculate the position of the cursor relative to the center of the button
  var deltaX = event.clientX - button.offsetLeft - button.offsetWidth / 2;
  var deltaY = event.clientY - button.offsetTop - button.offsetHeight / 2;

  // Move the button to follow the cursor
  button.style.left = event.clientX - deltaX + "px";
  button.style.top = event.clientY - deltaY + "px";
}

// Function to reset the position of the button to the center of the screen
function resetButton() {
  button.style.left = "50%";
  button.style.top = "50%";
}