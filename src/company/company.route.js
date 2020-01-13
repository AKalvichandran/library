const express = require("express");
const router = express.Router();
const CompanyController = require("./company.controller");

router.route("/").get(CompanyController.list);

router.route("/").post(CompanyController.save);

module.exports = router;
