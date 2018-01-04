var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var subdomain = require("express-subdomain")
var app = express();
var path = require("path")

var index = require("./routes/index")

var port = 5001

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
// Modules
app.use(express.static(__dirname + "/../node_modules"))
// Public files (images/css/js/etc)
app.use(express.static(__dirname + "/public"))

// add timestamps in front of log messages
require("console-stamp")(console, "dd/mm/yyyy HH:MM:ss")

var router = express.Router();

// Log some stuff for debugging.
app.use(function (req,res,next) {
  console.log(req.url + " " + req.method);
  next();
});

app.use("/", index)
// app.use("/leden", leden)

app.use("*", function(req, res, next) {
	res.render("404", {title: "Page not found"})
})

app.listen(port,function(){
  console.log("Test server is live at Port " + port);
});

module.exports = app
