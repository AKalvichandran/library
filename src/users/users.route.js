const express = require("express");
const router = express.Router();
const UserController = require("./users.controllers");

router.route("/").get(UserController.list);

router.route("/").post(UserController.save);

module.exports = router;
