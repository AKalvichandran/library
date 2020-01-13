const Company = require("./company.model");

const list = (req, res) => {
  Company.find((err, companies) => {
    if (err) {
      res.send(err);
    }
    res.send(companies);
  });
};

const find = (req, res) => {
  Company.findById(req.params.bookId, (err, company) => {
    if (err) {
      res.send(err);
    }
    res.send(company);
  });
};

const save = (req, res) => {
  const company = new Company(req.body);
  company.save(function(err, book) {
    if (err) return console.error(err);
    console.log(company.name + " saved to bookstore collection.");
  });
};
module.exports = { list, find, save };
