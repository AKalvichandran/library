// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require("express"); // call express
const app = express(); // define our app using express
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./index.route");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Connect to DB
const mongoUri =
  "mongodb+srv://library:N0passw0rd@cluster0-ghhfh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, { useNewUrlParser: true });

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle CORS
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

// Log all requests to the console
app.use(morgan("dev"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api/v1/library/", route);

// START THE SERVER
// =============================================================================
app.listen(3000);
console.log("Magic happens on port " + 3000);
