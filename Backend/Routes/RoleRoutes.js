const router = require("express").Router();
const {
  adminPutController,
  agentPutController,
  agentGetController,
  adminGetController,
} = require("../Controller/RoleController");

router.put("/users/admin", adminPutController);
router.put("/users/agent", agentPutController);

router.get("/users/admin", adminGetController);
router.get("/users/agent", agentGetController);

module.exports = router;
