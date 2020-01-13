const Book = require("./books.model");

const list = (req, res) => {
  Book.find((err, books) => {
    if (err) {
      res.send(err);
    }
    res.send(books);
  });
};

const find = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.send(book);
  });
};

const save = (req, res) => {
  const book = new Book(req.body);
  book.save(function(err, book) {
    if (err) return console.error(err);
    console.log(book.title + " saved to bookstore collection.");
  });
};
module.exports = { list, find, save };
