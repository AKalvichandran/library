const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
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

  users: [{ userId: { type: String, required: true } }],

  createdDate: {
    type: Date,
    required: true
  },
  updatedDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Group", GroupSchema);
