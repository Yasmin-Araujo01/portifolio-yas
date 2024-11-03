//Para o dark mode:

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});