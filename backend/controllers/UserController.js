const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find();

      users.forEach(
        (user) => (user.photo = "http://localhost:8000/uploads/" + user.photo)
      );

      return res.send(users);
    } catch (err) {
      return res.status(400).send("Error loading users");
    }
  },

  async store(req, res) {
    const user = new User({
      name: req.body.name,
      photo: req.file.filename,
      description: req.body.description,
    });

    try {
      const savedUser = await user.save();
      return res.send(savedUser._id);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};
