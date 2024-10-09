// Change navbar style on scroll
const navbar = document.querySelector('.navbar'); // Corrected to match the class
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// Toggle menu for small screens
const toggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('navbarNav'); // Change to the collapse div

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Use Bootstrap's class for showing
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


const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const skill = button.parentElement;
                let percent = skill.getAttribute('data-percent');
                let leftBar = skill.querySelector('.left .progress');
                let rightBar = skill.querySelector('.right .progress');
                let text = skill.querySelector('.circle-text');

                let progress = 0;
                let interval = setInterval(() => {
                    if (progress >= percent) {
                        clearInterval(interval);
                    } else {
                        progress++;
                        text.textContent = progress + "%";
                        if (progress <= 50) {
                            rightBar.style.transform = `rotate(${progress * 3.6}deg)`;
                        } else {
                            rightBar.style.transform = `rotate(180deg)`;
                            leftBar.style.transform = `rotate(${(progress - 50) * 3.6}deg)`;
                        }
                    }
                }, 20); // Adjust speed of animation (lower value for faster)
            });
        });