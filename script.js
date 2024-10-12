
// Theme Toggle Functionality
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});

// Form Validation for Client Form
document.getElementById('client-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const company = document.querySelector('input[name="company"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (name && email && company && message) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fill out all fields.');
  }
});
