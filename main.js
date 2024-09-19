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


$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();  // Prevent the form from actually submitting
     
      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();

      if (name && email && message) {
        // Show the modal using jQuery and Bootstrap
        $('#contactModal').modal('show');
      } else {
        alert('Please fill in all fields.');
      }
    });
  });