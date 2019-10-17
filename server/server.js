const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const decorator = require("./database/decorator");

//DB Models
const Contact = require("./database/models/Contact");
const User = require("./database/models/User");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.unsubscribe(decorator);

app.get("/api/contacts", (req, res) => {
  return Contact.fetchAll().then(results => {
    res.status(200).json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
