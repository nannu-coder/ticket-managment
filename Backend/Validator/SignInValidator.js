const { body } = require("express-validator");

const signInValidator = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("invalid username and passwordssssssdddddd"),

  body("password")
    .not()
    .isEmpty()
    .withMessage("Invalid userName and Paswordsssssss"),
];

module.exports = signInValidator;
