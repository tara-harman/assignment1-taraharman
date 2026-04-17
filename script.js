// Select elements
const button = document.getElementById("theme-toggle");
const body = document.body;

// Add click event
button.addEventListener("click", function () {

    // Toggle dark mode class
    body.classList.toggle("dark-mode");

    // Change button text dynamically
    if (body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Morning Mode";
    } else {
        button.textContent = "Switch to Evening Mode";
    }
});
