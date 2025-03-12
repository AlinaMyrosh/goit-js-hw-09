const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
populateStorageData();

function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateStorageData() {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (storageData) {
    formData.email = storageData.email;
    formData.message = formData.message;

    form.elements.email.value = storageData.email;
    form.elements.message.value = storageData.message;
  }

  //   console.log(formData);
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = event.target.elements;

  const emailInput = email.value.trim();
  const messageInput = message.value.trim();

  if (emailInput && messageInput) {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

    form.reset();
  } else {
    alert('Fill please all fields');
  }
}
