const express = require("express");
const morgan = require("morgan");
const path = require("path");
const htmlTemplate = require("html-template-tag");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use("/", (req, res) => {
  res.send("hello");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
