const User = require("./models/User");
const Contact = require("./model/Contact");

module.exports = function(req, res, next) {
  req.database = { User: User, Contact: Contact };
  next();
};
