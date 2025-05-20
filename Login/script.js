
//Username Validation
const usernameInput = document.getElementById('username');
  const errorDiv1 = document.querySelector('.error');

  usernameInput.addEventListener('input', () => {
    const value = usernameInput.value.trim();
    const validPattern = /^[a-zA-Z0-9]*$/;

    // Reset styles
    errorDiv1.textContent = '';
    usernameInput.classList.remove('invalid');

    if (value.length > 12) {
      errorDiv1.textContent = 'Username must not exceed 12 characters.';
      usernameInput.classList.add('invalid');
    } else if (!validPattern.test(value)) {
      errorDiv1.textContent = 'Username can only contain letters and numbers.';
      usernameInput.classList.add('invalid');
    }
  });

  //Email validation
  const form1 = document.getElementById('emailForm');
    const emailInput = document.getElementById("email");
    const errorDiv2 = document.getElementById("email-error");

    function validateEmail() {
      const emailValue = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(emailValue)) {
        emailInput.classList.remove("error-border");
        emailInput.classList.add("success-border");
        errorDiv2.textContent = "";
        return true;
      } else {
        emailInput.classList.remove("success-border");
        emailInput.classList.add("error-border");
        errorDiv2.textContent = "Please enter a valid email address.";
        errorDiv2.classList.add("error-message");
        return false;
      }
    }

    emailInput.addEventListener('input', validateEmail);

    form.addEventListener('submit', function(event) {
      if (!validateEmail()) {
        event.preventDefault(); // prevent form submission
      } else {
        alert("Form submitted successfully!");
      }
    });

    //Password validation
    const form2 = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    function validatePassword() {
      const password = passwordInput.value;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isValidLength = password.length <= 12;

      if (!hasUpperCase || !hasLowerCase || !hasSpecialChar || !isValidLength) {
        passwordInput.classList.add('error-border');
        passwordInput.classList.remove('success-border');
        passwordError.textContent = "Password must include uppercase, lowercase, special character and be max 12 characters.";
        return false;
      } else {
        passwordInput.classList.remove('error-border');
        passwordInput.classList.add('success-border');
        passwordError.textContent = "";
        return true;
      }
    }

    function validateConfirmPassword() {
      if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === "") {
        confirmPasswordInput.classList.add('error-border');
        confirmPasswordInput.classList.remove('success-border');
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
      } else {
        confirmPasswordInput.classList.remove('error-border');
        confirmPasswordInput.classList.add('success-border');
        confirmPasswordError.textContent = "";
        return true;
      }
    }
// Validate on typing
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Validate on submit
form.addEventListener('submit', function(event) {
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();
  if (!isPasswordValid || !isConfirmValid) {
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Form submitted successfully!");
  }
});