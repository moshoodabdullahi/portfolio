const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}

nameInput.addEventListener('change', saveFormData);
emailInput.addEventListener('change', saveFormData);
messageInput.addEventListener('change', saveFormData);

loadFormData();
