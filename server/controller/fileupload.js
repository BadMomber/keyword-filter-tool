var fileUpload = require('express-fileupload');
var template = require('./template.js');

router.get ('/csv', getKeywordTemplate);

async function getKeywordTemplate(req, res) {
  try {
    res.writeHead (200, {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename=keywords.csv'
    });
    // pipe file using mongoose-csv
    Keyword.find ().csv (res);
  } catch (e) {
    res.status (500).send (e);
  }
}