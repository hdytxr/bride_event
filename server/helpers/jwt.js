const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "goingtothemoon");
};

module.exports = { generateToken };
