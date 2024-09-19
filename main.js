// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Mobile menu toggle
// const menu = document.querySelector('header nav ul');
// const toggleButton = document.createElement('button');
// toggleButton.textContent = 'Menu';
// toggleButton.classList.add('menu-toggle');
// document.querySelector('header').appendChild(toggleButton);

// toggleButton.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields.");
    }
});