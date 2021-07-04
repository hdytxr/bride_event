const bcrypt = require("bcryptjs");

const hashPass = (password) => {
  let salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = { hashPass };
