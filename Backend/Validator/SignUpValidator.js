const { body } = require("express-validator");
const User = require("../Models/userModel");

const signUpValidator = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("please insert a valid User Name")
    .trim(),

  body("email")
    .isEmail()
    .withMessage("please insert a valid Email")
    .custom(async (email) => {
      let usedEmail = await User.findOne({ email });
      if (usedEmail) {
        return Promise.reject("E-mail already in use");
      }
      return true;
    })
    .normalizeEmail(),

  body("password")
    .isLength({ min: 5 })
    .withMessage("Password should be atleast 5 chars"),
];

module.exports = signUpValidator;
