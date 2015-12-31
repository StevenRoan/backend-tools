var page = require('webpage').create();
page.open('https://book.flypeach.com/default.aspx?ao=B2CZHTW&ori=TPE&des=OKA&dep=2016-02-28&ret=2016-03-02&adt=1&chd=0&inf=0&langculture=zh-TW&bLFF=false', function() {
  page.render('github.png');
  phantom.exit();
});