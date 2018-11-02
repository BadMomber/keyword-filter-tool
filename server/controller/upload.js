let csv = require ('fast-csv');
let mongoose = require ('mongoose');
let Keyword = require ('./keyword');

exports.post = function (req, res) {
  if (!req.files)
    return res.status (400).send ('No files were uploaded.');
  
  let keywordFile = req.files.file;
  
  let keywords = [];
  
  csv
    .fromString (keywordFile.data.toString (), {
      headers: true,
      ignoreEmpty: true
    })
    .on ("data", function (data) {
      data['_id'] = new mongoose.Types.ObjectId ();
      
      keywords.push (data);
    })
    .on ("end", function () {
      Keyword.create (keywords, function (err, documents) {
        if (err) throw err;
      });
      
      res.send (keywords.length + ' keywords have been successfully uploaded.');
    });
};