function doGet(e) {
  var para = e.parameter;
  var hashnum = para.name;
  var targeturl = para.url;
  return result(hashnum, targeturl);
}

function result(hashnum, targeturl) {
  var dbrow = 1;
  var sheet = SpreadsheetApp.getActive();
  var db = sheet.getSheetByName('database');
  var url2 = "";
  var num = hashnum;
  //num若為空值時給予隨機數
  if (num == "") {
    var word = "abcdefghijkmnpqrstuvwxyz";
    for (var i = 0; i < 2; i++) {
      num += word.charAt(Math.floor(Math.random() * 24));
    }
    num += Math.floor(Math.random() * 99) + 1;
  }
  //檢查hashnum是否重複，若重複則加隨機數字在尾數
  while (db.getRange(dbrow, 1).getValue() != '') {
    if (db.getRange(dbrow, 2).getValue() == num) {
      var num2 = Math.floor(Math.random() * 10);
      num += num2;
      dbrow = 1;
    }
    dbrow++;
  }
  //檢查targeturl是否合規，若合規則寫入表格，否則回傳0
  if (targeturl.indexOf("https://") != -1 || targeturl.indexOf("http://") != -1) {
    db.appendRow([Date(), num, targeturl]);
    url2 = "https://url.canaria.cc/" + num;
  } else {
    url2 = "0";
  }
  return ContentService.createTextOutput(JSON.stringify(url2)).setMimeType(ContentService.MimeType.JSON);
}
