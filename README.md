<h1 align="center">
    <img width="120" height="120" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f517.svg" alt=""><br>
    canaria-url
</h1>

<p align="center">
    <img src="https://img.shields.io/github/license/canaria3406/canaria-url?style=flat-square">
    <img src="https://img.shields.io/github/stars/canaria3406/canaria-url?style=flat-square">
</p>

A free serverless URL shortener service built with Google Apps Script and stored in Google Sheets.  
Live Demo : [url.canaria.cc](https://url.canaria.cc/ "canaria-url")

## Read Script Details

When you visit a URL (EX: `url.canaria.cc/example`), it will redirect you to `404.html`.  
The JavaScript code within `404.html` will send the parameter `example` to Google Apps Script and redirect the webpage to the returned URL.  
Google Apps Script will then compare the data in Google Sheets, and if there is a match, it will return the long URL; otherwise, it will return `url.canaria.cc`.
```javascript
  var dbrow = 1;
  var url = "https://url.canaria.cc/";
  var sheet = SpreadsheetApp.getActive();
  var db = sheet.getSheetByName('database');

  while(db.getRange(dbrow,1).getValue() != '') {
    var cond = db.getRange(dbrow,2).getValue() == hashnum;
    if(cond) {
      url = db.getRange(dbrow,3).getValue()
      break;
    }
    dbrow++;
  }

  return url;
```

## Write Script Details

Check if the short URL is empty, duplicated, or compliant.  
If any issues are found, fix them, and then write the URL in Google Sheets.  
Write the current time, short URL, and long URL to Google Sheets, and return the complete short URL.
```javascript
  var sheet = SpreadsheetApp.getActive();
  var db = sheet.getSheetByName('database');

  // Checking URL here

  db.appendRow([Date(),num,targeturl]);
  url2 = "https://url.canaria.cc/" + num;

  return url2;
```