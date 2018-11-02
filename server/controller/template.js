var json2csv = require('json2csv');

exports.get = function(req, res) {
  
  var fields = [
    'keyword',
    'currency',
    'avg-monthly-searches',
    'competition',
    'top-of-page-bid-low-range',
    'top-of-page-bid-high-range',
    'monthly-searches-january',
    'monthly-searches-february',
    'monthly-searches-march',
    'monthly-searches-april',
    'monthly-searches-may',
    'monthly-searches-june',
    'monthly-searches-july',
    'monthly-searches-august',
    'monthly-searches-september',
    'monthly-searches-october',
    'monthly-searches-november',
    'monthly-searches-december'
  ];
  
  var csv = json2csv({ data: '', fields: fields });
  
  res.set("Content-Disposition", "attachment;filename=keywords.csv");
  res.set("Content-Type", "application/octet-stream");
  
  res.send(csv);
  
};