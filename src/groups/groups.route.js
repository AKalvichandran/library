const express = require("express");
const router = express.Router();
const GroupController = require("./groups.controller");

router.route("/").get(GroupController.list);

router.route("/").post(GroupController.save);

module.exports = router;
