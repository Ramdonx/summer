$(document).ready(function() {
    function adjustBookSize() {
        // Obtener el ancho y alto de la ventana
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Calcular el tamaño del libro
        var bookWidth = windowWidth * 0.9; // 90% del ancho de la ventana
        var bookHeight = windowHeight * 0.8; // 80% de la altura de la ventana

        // Aplicar el tamaño calculado al libro
        $("#book").turn({
            width: bookWidth,
            height: bookHeight,
            autoCenter: true
        });
    }

    // Ajustar el tamaño del libro al cargar la página
    adjustBookSize();

    // Ajustar el tamaño del libro al redimensionar la ventana
    $(window).resize(function() {
        adjustBookSize();
    });
});