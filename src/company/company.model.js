const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: false
  },
  ownerIds: [{ userId: { type: String, required: true } }],
  postalCode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  updatedDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Company", CompanySchema);
