const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  title: {
    type: String,
    trim: true,
    minlength: 2,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  member: {
    type: String,
  },
});

const Team = model("team", teamSchema);

module.exports = Team;
