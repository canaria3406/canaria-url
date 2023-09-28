function doGet(e) {
  var para = e.parameter;
  var hashnum = para.name;
  return result(hashnum);
}

function result(hashnum) {
  var dbrow = 1;
  var url = "https://url.canaria.cc/";
  var sheet = SpreadsheetApp.getActive();
  var db = sheet.getSheetByName('database');

  //若表格內有符合的值則回傳長網址，反之回傳url.canaria.cc
  while(db.getRange(dbrow,1).getValue() != '') {
    var cond = db.getRange(dbrow,2).getValue() == hashnum;
    if(cond) {
      url = db.getRange(dbrow,3).getValue()
      break;
    }
    dbrow++;
  }

  return ContentService.createTextOutput(url).setMimeType(ContentService.MimeType.JSON);
}
