const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    customer: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
    },
    subject: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      required: true,
    },
    priority: {
      type: String,
      trim: true,
      required: true,
    },
    asigne: {
      type: String,
      trim: true,
      required: true,
    },
    des: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ticket = model("ticket", ticketSchema);

module.exports = ticket;
