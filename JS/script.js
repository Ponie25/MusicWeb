// Select the plane image and the speech bubble
const plane = document.getElementById("plane");
const speechBubble = document.getElementById("speechBubble");

// Add a click event listener to toggle the speech bubble visibility
plane.addEventListener("click", function() {
    // Toggle visibility
    if (speechBubble.classList.contains("hidden")) {
        speechBubble.classList.remove("hidden");
    } else {
        speechBubble.classList.add("hidden");
    }
});
