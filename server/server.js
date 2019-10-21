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

//Routes
app.delete("/api/contacts/:id", (req, res) => {
  return Contact.where({ id: req.params.id })
    .destroy()
    .then(results => {
      res.status(200).json({ success: true });
    });
});

app.put("/api/contacts/:id", (req, res) => {
  return Contact.where({ id: req.params.id })
    .fetch()
    .then(results => {
      return new Contact({ id: req.params.id })
        .save(req.body, {
          patch: false
        })
        .then(results => {
          res.status(200).json(results);
        });
    });
});

app.post("/api/contacts", (req, res) => {
  const newContact = req.body;

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
