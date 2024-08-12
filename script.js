// script.js

// Function to handle scroll event
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Function to highlight the current section in the menu
function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
}

// Add event listeners
window.addEventListener('scroll', () => {
    handleScroll();
    highlightMenu();
});
