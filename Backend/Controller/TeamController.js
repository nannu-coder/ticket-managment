const team = require("../Models/TeamModel");

exports.teamGetController = async (req, res, next) => {
  console.log(req.body);
  try {
    res.send("this is team get controller");
  } catch (err) {
    console.log(err);
    next();
  }
};
exports.teamPostController = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);

  try {
  } catch (err) {
    console.log(err);
    next();
  }
};
exports.teamPutController = async (req, res, next) => {};
exports.teamDeleteController = async (req, res, next) => {};
