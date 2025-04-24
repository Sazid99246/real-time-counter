const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

function updateCharacterCount() {
    const text = textInput.value;
    const count = text.length;

    if (count > 50) {
        textInput.value = text.substring(0, 50); // Truncate to exactly 50 characters
    }

    const updatedCount = textInput.value.length; // Use truncated text length
    charCount.textContent = `Character Count: ${updatedCount}/50`;

    if (updatedCount >= 50) {
        charCount.classList.add("red");
    } else {
        charCount.classList.remove("red");
    }
}

textInput.addEventListener("input", updateCharacterCount);

updateCharacterCount();