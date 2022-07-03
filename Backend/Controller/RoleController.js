const User = require("../Models/userModel");

exports.adminPutController = async (req, res, next) => {
  const { role, email } = req.body;

  try {
    const user = await User.findOne({ email });
    const updateDoc = { $set: { role: role } };
    console.log("updateDoc-->", updateDoc);
    console.log("user-->", user);
    await User.updateOne(user, updateDoc, {
      upsert: true,
    })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
    // console.log("result-->", result);
  } catch (err) {
    console.log(err);
    next();
  }
};

exports.agentPutController = async (req, res, next) => {};

exports.adminGetController = async (req, res, next) => {
  try {
    res.send("this is admin get route");
  } catch (err) {
    console.log(err);
    next();
  }
};
exports.agentGetController = async (req, res, next) => {};
