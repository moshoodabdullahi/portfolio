document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('#contact-form');
  const emailInput = document.querySelector('#email');
  const errorMessage = document.querySelector('#error-message');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const isEmailValid = validateEmailFormat(emailInput.value);

    if (isEmailValid) {
      errorMessage.textContent = '';

      console.log('Form submitted successfully!');
    } else {
      errorMessage.textContent = 'Email must be in lowercase.';
    }
  });

  function validateEmailFormat(email) {
    return email === email.toLowerCase();
  }
});
