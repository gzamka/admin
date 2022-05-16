const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const app = express();

// App configure
dotenv.config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send({
    data: [
      {
        product1: "1",
        product2: "2",
        product3: "3",
      },
    ],
  });
});

app.post("/", (req, res) => {
  console.log(req.body.email);
  res.send({ success: true });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
