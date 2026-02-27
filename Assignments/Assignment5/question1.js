// Get DOM elements
const textInput = document.getElementById("textInput");
const countBtn = document.getElementById("countBtn");
const result = document.getElementById("result");

// Add event listener to button
countBtn.addEventListener("click", function () {

    const text = textInput.value;

    // Validation: check if empty
    if (text.trim() === "") {
        result.textContent = "Please enter some text.";
        return;
    }

    const characterCount = text.length;

    result.textContent = "Number of characters: " + characterCount;
});