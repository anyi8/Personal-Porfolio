const toggle = document.getElementById('toggleCheckbox');
const darkModeToggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});