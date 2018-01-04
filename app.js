var express = require("express");
var app = express();

var port = 5000

var redirect = require("express-redirect")
redirect(app)

// add timestamps in front of log messages
require("console-stamp")(console, "dd/mm/yyyy HH:MM:ss");

app.use(function (req,res,next) {
  console.log(req.url + " " + req.method);
  next();
});

app.redirect("/", "http://redux.koornbeurs.nl")
// app.use("/leden", leden)

app.listen(5000,function(){
  console.log("Main server is live at Port " + port);
});

module.exports = app
