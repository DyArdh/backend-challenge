const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.json());

const router = require("./routes");
app.use(router);

app.use((req, res, next) => {
  return res.status(404).json({
    message: "404. Page Not Found!",
  });
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
