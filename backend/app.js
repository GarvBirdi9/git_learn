import dotenv from "dotenv";
import express from "express";
import createConnection from "./shared/db/connection.js";
import { productRoutes } from "./modules/products/routes/product-routes.js";

dotenv.config();
const app = express();
app.use("/", productRoutes);

app.get("/products", (request, response) => {
  response.json({ id: 1000, name: "Ram" });
});

const promise = createConnection()
  .then((conINFO) => {
    console.log("Database is connected");
    app.listen(process.env.PORT || 4444, (err) => {
      if (err) {
        console.log("error in app ", err);
      } else {
        console.log("server up & running");
      }
    });
  })
  .catch((err) => {
    console.log("database is down");
  });
