const Users = require("./users.models");

const list = (req, res) => {
  Users.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.send(users);
  });
};

const find = (req, res) => {
  Users.findById(req.params.groupId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.send(user);
  });
};

const save = (req, res) => {
  const user = new Users(req.body);
  user.save(function(err, user) {
    if (err) return console.error(err);
    console.log(user.name + " saved to group collection.");
    res.send(user);
  });
};
module.exports = { list, find, save };
