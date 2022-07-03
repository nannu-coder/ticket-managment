const ticket = require("../Models/ticketModel");

//single ticket controller
exports.singleTicketController = async (req, res, next) => {};

//ticket post controller
exports.ticketPostController = async (req, res, next) => {
  const { customer, subject, type, status, priority, asigne, des } = req.body;

  try {
    const Ticket = new ticket({
      customer,
      subject,
      type,
      status,
      priority,
      asigne,
      des,
    });
    const createdTicket = await Ticket.save();
    console.log(createdTicket);
    res.json(createdTicket);
  } catch (err) {
    console.log(err);
    next();
  }
};

//ticket get controller
exports.ticketGetController = async (req, res, next) => {
  try {
    const tickets = await ticket.find();
    res.json(tickets);
  } catch (err) {
    console.log(err);
    next();
  }
};
