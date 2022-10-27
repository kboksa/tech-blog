const { User } = require("../models");

const userData = [
  {
    username: "Aang",
    password: "airbender",
  },
  {
    username: "Zuko",
    password: "firebender",
  },
  {
    username: "Katara",
    password: "waterbender",
  },
  {
    username: "Toph",
    password: "earthbender",
  },
  {
    username: "Sokka",
    password: "funbender",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
