const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "hello from memet" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
