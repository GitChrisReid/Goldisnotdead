//window.onload = function () {
//    var i = 0;
//    var text = "Chris Reid";
//    var speed = 100; // You can adjust this value for typing speed
//    var container = document.getElementById('typed-text');

//    function typeWriter() {
//        if (i < text.length) {
//            container.innerHTML += text.charAt(i);
//            i++;
//            setTimeout(typeWriter, speed);
//        } else {
//            setTimeout(clearText, 4000); // Start clearText function after 7 seconds
//        }
//    }

//    function clearText() {
//        container.innerHTML = "";
//        i = 0;
//        typeWriter();
//    }

//    typeWriter(); // Start the typing animation

//    function toggleDarkMode() {
//        const body = document.body;
//        body.classList.toggle('dark-mode');
//    }

//}


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

