const LOCAL_STORAGE_KEY = 'dema-portfolio.netlify.app.formData';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  const saveFormData = () => {
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  };

  const loadFormData = () => {
    const formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    nameInput.value = formData.name || '';
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  };

  form.addEventListener('change', saveFormData);

  loadFormData();
});

export default LOCAL_STORAGE_KEY;
