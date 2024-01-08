const form = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');

async function handleSubmit(event) {
  event.preventDefault();

  const isEmailValid = emailInput.value === emailInput.value.toLowerCase();

  if (isEmailValid) {
    errorMessage.textContent = '';

    console.log('Form submitted successfully!');
  } else {
    errorMessage.textContent = 'Email must be in lowercase.';
    return errorMessage;
  }

  const status = document.getElementById('my-form-status');
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Thanks for your submission!';
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors'].map((error) => error['message']).join(', ');
          } else {
            status.innerHTML = 'Oops! There was a problem submitting your form';
            return status;
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);
