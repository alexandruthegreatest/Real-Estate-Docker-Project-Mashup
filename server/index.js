const express = require("express");
const bodyParser = require("body-parser");

const as_ex = express();

// parse requests of content-type: application/json
as_ex.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
as_ex.use(bodyParser.urlencoded({ extended: true }));

as_ex.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

as_ex.get("/", (req, res) => {

  res.json({ message: "Cloud Computing. The API" });
});

require("./conf/app/routes/property.routes.js")(as_ex);

// set port, listen for requests
as_ex.listen(4300, () => {
  console.log("Works on port 4300");
});