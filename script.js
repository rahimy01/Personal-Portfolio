const roles = [
"Software Developer",
"AI Enthusiast",
"Systems Programmer",
"Computer Science Student"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

const currentRole = roles[roleIndex];

if (!deleting) {
    typingText.textContent =
        currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

} else {

    typingText.textContent =
        currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
}

setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
