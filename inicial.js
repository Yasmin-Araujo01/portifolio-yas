
document.addEventListener("DOMContentLoaded", function () {
    function typeEffect(element, text, delay) {
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            }
        }
        
        type();
    }

    const titulo1 = document.getElementById('titulo1');
    const titulo2 = document.getElementById('titulo2');
    const titulo3 = document.getElementById('titulo3');


    const text1 = "Sobre este site:";
    const text2 = "Mais sobre Yasmin:";
    const text3 = "Escola atual:";

    
    typeEffect(titulo1, text1, 100); 
    setTimeout(() => {
        typeEffect(titulo2, text2, 100);
        typeEffect(titulo3, text3, 100);
    }, text1.length * 100 + 500); 
});

//Para o dark mode:

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});