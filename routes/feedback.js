var express = require('express');
var router = express.Router();

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

var databaseConnector = require("../controllers/database").DatabaseController;
const database = new databaseConnector("database.sqlite3");


/* GET users listing. */
router.post('/', function(req, res) {
  console.log('Got from client');
  console.log(req.body);
  res.send ("OK");
});

module.exports = router;