const form = document.getElementById('contact-form');
const outputParagraph = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    outputParagraph.textContent = 'please fill all fields';
    outputParagraph.classList.remove('bg-green-500');
    outputParagraph.classList.add('bg-red-500');
    return;
  }

  const data = `<ul>
  <li>Name: ${name}</li>
  <li>Email: ${email}</li>
  <li>Message: ${message}</li>
</ul>`;

  outputParagraph.innerHTML = data;
  outputParagraph.classList.remove('bg-red-500');
  outputParagraph.classList.add('bg-green-500');

  form.reset();
});
