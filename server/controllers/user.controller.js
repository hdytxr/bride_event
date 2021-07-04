const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

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
    res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) throw { msg: "Invalid email or password" };
    let comparePassword = comparePass(password, user.password);
    if (!comparePassword) throw { msg: "Invalid email or password" };

    let payload = {
      id: user.id,
      email: user.email,
    };
    let token = generateToken(payload);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    console.log(err, "<== error login");
    res.status(500).json({ msg: "Invalid server error" });
  }
};

/** Login Process
 * 1. findOne user based on email
 * 2. if user is exist, cek password (bcrypt) ( dicompare ) => pass matched (success) | !matched (error)
 * 3. if user not exist throw error
 *
 */
module.exports = { register, login };
