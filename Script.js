const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});// Fade-in animation on scroll
const cards = document.querySelectorAll('.card');
// Validate on typing
[nameInput, emailInput, phoneInput, passInput].forEach(input => {
  input.addEventListener('input', () => checkField(input));
});

// Validate on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (!checkField(nameInput)) valid = false;
  if (!checkField(emailInput)) valid = false;
  if (!checkField(phoneInput)) valid = false;
  if (!checkField(passInput)) valid = false;

  if (valid) {
    successMsg.textContent = "Account created successfully!";
    form.reset();
    document.querySelectorAll('.field').forEach(f => f.classList.remove('error'));
  }
});

function checkField(input) {
  const field = input.parentElement;
  const errorText = field.querySelector('.error');
  let message = '';

  if (input.value.trim() === '') {
    message = 'This field is required';
  } else if (input === emailInput && !input.value.includes('@')) {
    message = 'Enter a valid email';
  } else if (input === phoneInput && input.value.length < 11) {
    message = 'Phone must be 11 digits';
  } else if (input === passInput && input.value.length < 6) {
    message = 'Password too short';
  }

  if (message) {
    field.classList.add('error');
    errorText.textContent = message;
    return false;
  } else {
    field.classList.remove('error');
    errorText.textContent = '';
    return true;
  }
}
btnPlus.addEventListener('click', () => {
  count++;
  updateDisplay();
});

btnMinus.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});
