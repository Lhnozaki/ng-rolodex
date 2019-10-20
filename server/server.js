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

app.post("/api/contacts", (req, res) => {
  const newContact = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    home: req.body.home,
    mobile: req.body.mobile,
    work: req.body.work,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.body.created_by
  };

  return new Contact(newContact).save().then(results => {
    res.status(200).json(results);
  });
});

app.get("/api/contacts", (req, res) => {
  return Contact.fetchAll().then(results => {
    res.status(200).json(results);
  });
});

app.get("/api/contacts/:id", (req, res) => {
  return Contact.where({ id: req.params.id })
    .fetchAll()
    .then(results => {
      res.status(200).json(results);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
