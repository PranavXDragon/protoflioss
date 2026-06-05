// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    const userSubject = document.getElementById('userSubject').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();

    formMessage.textContent = '';
    formMessage.className = 'form-message';

    if (!userName) {
      showMessage('Please enter your name', 'error');
      return;
    }

    if (!userEmail) {
      showMessage('Please enter your email', 'error');
      return;
    }

    if (!isValidEmail(userEmail)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }

    if (!userMessage) {
      showMessage('Please enter a message', 'error');
      return;
    }

    if (userMessage.length < 10) {
      showMessage('Message must be at least 10 characters long', 'error');
      return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      console.log('Form submitted:', {
        name: userName,
        email: userEmail,
        subject: userSubject,
        message: userMessage
      });

      showMessage('Message sent successfully! I will get back to you soon.', 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 1500);
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
  }
});


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
