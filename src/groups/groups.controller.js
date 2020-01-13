const Groups = require("./groups.models");

const list = (req, res) => {
  Groups.find((err, groups) => {
    if (err) {
      res.send(err);
    }
    res.send(groups);
  });
};

const find = (req, res) => {
  Groups.findById(req.params.groupId, (err, group) => {
    if (err) {
      res.send(err);
    }
    res.send(group);
  });
};

const save = (req, res) => {
  const group = new Groups(req.body);
  group.save(function(err, group) {
    if (err) return console.error(err);
    console.log(group.name + " saved to group collection.");
    res.send(group);
  });
};
module.exports = { list, find, save };
