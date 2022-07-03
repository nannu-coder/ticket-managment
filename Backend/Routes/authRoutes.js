const router = require("express").Router();
const signUpValidator = require("../Validator/SignUpValidator");
const signInValidator = require("../Validator/SignInValidator");

const {
  signInPostController,
  signIngetController,
  signUpGetController,
  signUppostController,
  signOutController,
  loggedIn,
} = require("../Controller/authController");

router.get("/signup", signUpGetController);
router.post("/signup", signUpValidator, signUppostController);

router.get("/signin", signIngetController);
router.post("/signin", signInValidator, signInPostController);

router.get("/signout", signOutController);
router.get("/loggedIn", loggedIn);

module.exports = router;
