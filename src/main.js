const judul = "Knitto Textile";
const sidebarDataKnitto = HtmlService.createTemplateFromFile("sidebar-data-kain");
const sidebarFindAndReplace = HtmlService.createTemplateFromFile("sidebar-find-and-replace");

function doGet(){
  return HtmlService.createHtmlOutput('<h1>Ini halaman Web App</h1>');
}

function getTemplate() {
  sidebarDataKnitto.judul = judul;
  Logger.log(judul)
}

function onOpen() {
  DocumentApp.getUi()
    .createMenu('Knitto')
    .addItem('Data Kain', 'showSidebarDataKain')
    .addItem('Find & Replace', 'showSidebarFindAndReplace')
    .addToUi();
}


function showSidebarFindAndReplace() {
  const html = sidebarFindAndReplace.evaluate().setTitle("Find And Replace")
  .setWidth(350);
  DocumentApp.getUi().showSidebar(html)

}

function showSidebarDataKain() {
  sidebarDataKnitto.judul = judul;
  sidebarDataKnitto.data = getPublicData();

  const html = sidebarDataKnitto.evaluate().setTitle("Data Kain Knitto")
  .setWidth(350);
  DocumentApp.getUi().showSidebar(html)

}

function getPublicData() {
  const url = "https://webdev.knitto.org/api/footer/products";
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());
  Logger.log(data); // Lihat hasil di log
  return data.slice(0, 10);
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}