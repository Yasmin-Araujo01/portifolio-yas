document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('#roxo img');

    imagens.forEach(imagem => {
        imagem.style.transition = 'transform 0.3s, opacity 0.3s'; 

        imagem.addEventListener('mouseover', function() {
            imagem.style.transform = 'scale(1.1)'; 
            imagem.style.opacity = '0.8'; 
        });

        imagem.addEventListener('mouseout', function() {
            imagem.style.transform = 'scale(1)'; 
            imagem.style.opacity = '1'; 
        });
    });
});

//Para o dark mode:

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});