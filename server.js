const express = require("express");
const app = express();
require("dotenv").config();
const absolutePath = __dirname + "/views/index.html";
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send(absolutePath);
});
app.get("/mymessage", (req, res) => {
  process.env.MYMESSAGE === "uppercase"
    ? res.json({ message: "HELLO WORLD" })
    : res.json({ message: "hello world" });
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Status: OKay");
});
