const College = require("./colleges.model");

const list = (req, res) => {
  College.find((err, college) => {
    if (err) {
      res.send(err);
    }
    res.send(college);
  });
};

const find = (req, res) => {
  College.findById(req.params.bookId, (err, college) => {
    if (err) {
      res.send(err);
    }
    res.send(college);
  });
};

const save = (req, res) => {
  const college = new College(req.body);
  college.save(function(err, college) {
    if (err) return console.error(err);
    console.log(college.name + " saved to bookstore collection.");
  });
};
module.exports = { list, find, save };
