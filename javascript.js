document.addEventListener('DOMContentLoaded', function() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const form = document.querySelector('form');

  function checkPasswords() {
      if (password.value && confirmPassword.value) {
          if (password.value === confirmPassword.value) {
              confirmPassword.setCustomValidity('');
              confirmPassword.style.border = '1px solid #64f74b';
          } else {
              confirmPassword.setCustomValidity('Passwords do not match');
              confirmPassword.style.border = '1px solid #FFC0CB';
          }
      }
  }

  password.addEventListener('input', checkPasswords);
  confirmPassword.addEventListener('input', checkPasswords);

  form.addEventListener('submit', function(e) {
      if (password.value !== confirmPassword.value) {
          e.preventDefault();
          alert('Passwords do not match!');
      }
  });
});