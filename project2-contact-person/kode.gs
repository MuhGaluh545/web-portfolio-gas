function myFunction() {
  
}
const SHEET_ID = '1NHVq3LIRRi0eF-Qt-4Iduu1Gi4fBSIZHzQ3ss1ZuFK0';

function doGet() {
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle('Contact Form');
}

function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function submitForm(data) {
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
sheet.appendRow([
new Date(),
data.name,
data.email,
data.message
]);
return 'success';
}
