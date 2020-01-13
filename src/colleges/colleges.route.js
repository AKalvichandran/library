const express = require("express");
const router = express.Router();
const CollegeController = require("./colleges.controller");

router.route("/").get(CollegeController.list);

router.route("/").post(CollegeController.save);

module.exports = router;
