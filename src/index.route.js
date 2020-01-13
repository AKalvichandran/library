const express = require("express");
const collegeRoutes = require("./colleges/colleges.route");
const bookRoutes = require("./books/books.route");
const companyRoutes = require("./company/company.route");
const groupRoutes = require("./groups/groups.route");

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount user routes at /users
router.use("/books", bookRoutes);

// mount colleges routes at /users
router.use("/colleges", collegeRoutes);

// mount colleges routes at /users
router.use("/companies", companyRoutes);

// mount colleges routes at /users
router.use("/groups", groupRoutes);

module.exports = router;
