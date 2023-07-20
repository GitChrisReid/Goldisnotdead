window.onload = function () {
    var i = 0;
    var text = "Chris Reid";
    var speed = 100; // You can adjust this value for typing speed
    var container = document.getElementById('typed-text');

    function typeWriter() {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(clearText, 7000); // Start clearText function after 7 seconds
        }
    }

    function clearText() {
        container.innerHTML = "";
        i = 0;
        typeWriter();
    }

    typeWriter(); // Start the typing animation
}
