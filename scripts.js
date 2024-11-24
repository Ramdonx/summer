document.addEventListener("DOMContentLoaded", function () {
  const pdfPath = "assets/example.pdf";
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdf.worker.js';

  const flipbook = $("#flipbook");

  // Renderizar PDF y añadir páginas
  const loadPDF = async (url) => {
    const pdf = await pdfjsLib.getDocument(url).promise;
    const totalPages = pdf.numPages;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;

      const pageWrapper = document.createElement("div");
      pageWrapper.classList.add("page");
      pageWrapper.appendChild(canvas);

      flipbook.append(pageWrapper);
    }

    // Inicializar Turn.js después de cargar todas las páginas
    flipbook.turn({
      width: 800,
      height: 600,
      autoCenter: true,
    });
  };

  loadPDF(pdfPath);
});
