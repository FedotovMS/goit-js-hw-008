import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-msg';

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', onTextAreaInput);

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  const formData = {
    ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
    [e.target.name]: e.target.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('send form');

  refs.input.value = '';
  refs.textarea.value = '';

  localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(e) {
  const email = refs.input.value;
  const message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function populateTextMessage() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedFormData) {
    refs.input.value = savedFormData.email;
    refs.textarea.value = savedFormData.message;
  }
}

populateTextMessage();
