

// Animate radial bars on scroll
window.addEventListener('scroll', () => {
    const radialBars = document.querySelectorAll('.radial-bars');
    radialBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            const circle = bar.querySelector('.path');
            circle.style.animationPlayState = 'running';
        }
    });
});
// Auto typing and deleting effect
const roles = ["Web Developer", "Youtuber", "Full Stack Developer", "Freelancer"];
let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing-text");
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200); // Pause before deleting
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
