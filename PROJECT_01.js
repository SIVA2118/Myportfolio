window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// Toggle menu for small screens
const toggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Change navbar style on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});


document.querySelector('.nav-link[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });

    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image img');

    aboutContent.classList.add('slideIn');
    aboutImage.classList.add('zoomIn');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-text');
        }
    });
});

const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image img');

observer.observe(aboutContent);
observer.observe(aboutImage);