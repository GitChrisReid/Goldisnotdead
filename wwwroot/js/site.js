const words = [
    "security.",
    "web development.",
    "penetration testing.",
    "OSINT.",
    "backend development."
];
const typingSpeed = 100; // Milliseconds per character
const wordInterval = 2000; // Milliseconds to wait between words

let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;

function typeNextWord() {
    const word = words[currentWordIndex];

    if (isDeleting) {
        currentCharacterIndex--;
    } else {
        currentCharacterIndex++;
    }

    const typingTextElement = document.getElementById("typing-text");
    typingTextElement.textContent = word.slice(0, currentCharacterIndex);

    if (!isDeleting && currentCharacterIndex === word.length) {
        isDeleting = true;
        setTimeout(typeNextWord, wordInterval);
    } else if (isDeleting && currentCharacterIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeNextWord, typingSpeed);
    } else {
        setTimeout(typeNextWord, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeNextWord(); // Start the typing animation
});

function toggleEducation() {
    var educationList = document.getElementById("education-list");
    if (educationList.style.display === "none") {
        educationList.style.display = "block";
    } else {
        educationList.style.display = "none";
    }
}


