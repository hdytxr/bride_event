/*
1. kamus errors
  {
    errors: [`Email invalid format`, `Email is required`]
  }
*/

const errorHandler = (err, req, res, next) => {
  console.log(err, "<=== error handler triggered");
  let errors = [];
  let statusCode = 500;

  // process error here
  switch (err.name) {
    case "SequelizeValidationError":
      err.errors.forEach((el) => {
        errors.push(el.message);
      });
      statusCode = 400;
      break;

    default:
      errors.push(err.msg);
  }

  res.status(statusCode).json({
    errors: errors,
  });
};

module.exports = { errorHandler };

/**
 * 1. Validasi input user
 * {
 *    name: "SequelizeValidationError",
 *    errors: [{
 *      message: "blablabla"
 *    }]
 * }
 */
