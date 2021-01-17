let express = require('express');
let router = express.Router();
let ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let people = ['geddy', 'neil', 'alex']; // => 'geddy, neil, alex'
  let html = ejs.render('<%= p.join(", "); %>', {p: people});
  console.log(html);
  res.render('index', { title: 'Express', ourfield: 'OURNAME', champions: 'Yes', tank: 'pantera', a: 'b', neww: '123', h: html });
});

module.exports = router;
