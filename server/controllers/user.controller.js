const { User } = require("../models");

const register = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
      msg: "register success ",
    });
  } catch (err) {
    console.log(err, "<== error register");
    res.status(500).json({ msg: err });
  }
};

module.exports = { register };
