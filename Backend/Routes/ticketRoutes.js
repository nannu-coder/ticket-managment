const router = require("express").Router();
const {
  ticketGetController,
  ticketPostController,
  singleTicketController,
} = require("../Controller/ticketController");

//single ticket
router.get("/ticket/:id", singleTicketController);

//all ticket
router.get("/ticket", ticketGetController);

//post ticket
router.post("/ticket", ticketPostController);

module.exports = router;
