const user = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.signUpGetController = async (req, res, next) => {
  try {
    res.json("This Is Sign Up page");
  } catch (err) {
    next(err);
  }
};

//Sign Up Post Controller
exports.signUppostController = async (req, res, next) => {
  const { name, email, password } = req.body;

  const errorFormatter = (error) => error.msg;
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    res.send(errors.mapped());
    return;
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const User = new user({
      name,
      email,
      password: hashPassword,
    });

    const createUser = await User.save();
    console.log(createUser);
    res.json(createUser);

    const token = jwt.sign(
      {
        email: createUser.email,
        id: createUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();

    console.log(token);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//Sign In Get Controller
exports.signIngetController = async (req, res, next) => {
  try {
    res.json("Sign In Page");
  } catch (err) {
    next(err);
  }
};

//Sign In Post Controller
exports.signInPostController = async (req, res, next) => {
  const { email, password } = req.body;

  const errorFormatter = (error) => error.msg;
  const errors = validationResult(req).formatWith(errorFormatter);
  console.log(errors.mapped());

  try {
    const User = await user.findOne({ email });

    if (!User) {
      console.log("not match email");
      return res.json("Invalid UserName and Pasword");
    }
    const match = await bcrypt.compare(password, User.password);

    if (!match) {
      console.log("password not match");
      return res.json("invalid username and Password");
    }

    const jwtValue = { email: User.email, id: User._id };

    const token = jwt.sign(jwtValue.toString(), process.env.JWT_SECRET);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();

    console.log("token from signin post==>", token);
    console.log("login success");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.signOutController = async (req, res, next) => {
  try {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.loggedIn = async (req, res, next) => {
  try {
    const token = await req?.cookies?.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);

    await res.send(true);
  } catch (err) {
    await res.json(false);
    console.log(err);
    next(err);
  }
};
