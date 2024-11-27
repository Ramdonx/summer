let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    // Mueve el flipbook a la página correspondiente
    const offset = -index * 100; // Desplazamiento en porcentaje
    document.querySelector('.flipbook').style.transform = `translateX(${offset}vw)`;
}

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

// Inicializa la primera página
showPage(currentPage);