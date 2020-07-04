var bodyParser = require("body-parser");
var express = require("express");
var app = express();
//require("dotenv").config();

const absolutePath = __dirname + "/views/index.html";
app.use(express.static(__dirname + "/public"));
/*app.use((req, res, next) => {
  console.log(req);
  next();
});*/

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});

// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */

/** 2) A first working Express Server */

/** 3) Serve an HTML file */

/** 4) Serve static assets  */

/** 5) serve JSON on a specific route */
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({
        message: "HELLO JSON",
      })
    : res.json({
        message: "Hello json",
      });
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
  //const { first, last } = req.query;
  res.json({ name: `${req.query.first} ${req.query.last}` });
});

/** 6) Use the .env file to configure the app */

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------
//console.log("Hello World");
module.exports = app;
