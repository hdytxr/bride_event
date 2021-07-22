require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
