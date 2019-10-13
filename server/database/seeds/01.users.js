const bcrypt = require("bcryptjs");
const saltRounds = 12;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "lnozaki",
          password: bcrypt.hashSync("1111", saltRounds),
          name: "Lewis",
          email: "lewis@gmail.com",
          address: "500 Ala Moana Blvd. Honolulu, HI 96813"
        },
        {
          username: "Acaivy",
          password: bcrypt.hashSync("2222", saltRounds),
          name: "Ivy",
          email: "ivy@gmail.com",
          address: "333 Auahi St. Honolulu, HI 96813"
        },
        {
          username: "john-doe",
          password: bcrypt.hashSync("3333", saltRounds),
          name: "John Doe",
          email: "john@gmail.com",
          address: "719 Kuhio Ave. Honolulu, HI 96815"
        },
        {
          username: "jane-doe",
          password: bcrypt.hashSync("4444", saltRounds),
          name: "Jane Doe",
          email: "jane@gmail.com",
          address: "225 Liliuokalani Ave. Honolulu, HI 96815"
        },
        {
          username: "doubleOSeven",
          password: bcrypt.hashSync("5555", saltRounds),
          name: "James Bond",
          email: "007@gmail.com",
          address: "1337 Kalakaua Ave. Honolulu, HI 96815"
        }
      ]);
    });
};
