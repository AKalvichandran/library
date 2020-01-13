const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  groups: [
    {
      groupid: { type: String, required: false }
    }
  ],
  books: [
    {
      bookId: { type: String, required: false }
    }
  ],
  college: {
    collegeId: { type: String, required: false }
  },
  company: {
    companyId: { type: String, required: false }
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: false
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

module.exports = mongoose.model("User", UserSchema);
