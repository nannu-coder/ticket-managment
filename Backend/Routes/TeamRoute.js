const router = require("express").Router();
const {
  teamDeleteController,
  teamGetController,
  teamPostController,
  teamPutController,
} = require("../Controller/TeamController");

router.get("/team", teamGetController);
router.post("/team", teamPostController);
router.put("/team/:id", teamPutController);
router.delete("/team/:id", teamDeleteController);

module.exports = router;
