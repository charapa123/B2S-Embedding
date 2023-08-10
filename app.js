//console.log("Hello DS31");
let viz;
//1. create a variable to store our viz container

const vizBox = document.getElementById("vizContainer");

//2. create a variable for dashboard options

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

//3. create something that holds the url of the viz

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

//4. define our function to build dashboard

function initViz() {
  viz = new tableau.Viz(vizBox, url, options);
}

//5. controlling when function is run, domcontentloaded means when everything has run

document.addEventListener("DOMContentLoaded", initViz);

//6. adding pdf functionality button

document.addEventListener("DOMContentLoaded", function () {
  const exportPdfbutton = document.getElementById("exportPdf");

  exportPdfbutton.addEventListener("click", exportPdffunction);

  function exportPdffunction() {
    viz.showExportPDFDialog();
  }
});

//7. adding ppt export functionality

document.addEventListener("DOMContentLoaded", function () {
  const exportPptbutton = document.getElementById("exportPpt");

  exportPptbutton.addEventListener("click", exportPptfunction);

  function exportPptfunction() {
    viz.showExportPowerPointDialog();
  }
});
