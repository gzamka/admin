import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import products from './crud/products.js'
import news from './crud/routes.js'
import dotenv from "dotenv";
import router from "./routes/routes.js";
const app = express()
dotenv.config({ path: "./config/config.env" });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.json())
app.use(cors())
app.use('/news', news)
app.use("/", router);

app.use('/products', products)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
  