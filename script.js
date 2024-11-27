let currentPage = 0;

const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.transform = `translateX(${(i - index) * 100}%)`;
    });
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
