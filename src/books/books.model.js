const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: false
  },
  createdBy: { type: String, required: true },
  noOfPages: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  updatedDate: {
    type: Date,
    required: true
  },
  updatedBy: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema);
