import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();

// App configure
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
