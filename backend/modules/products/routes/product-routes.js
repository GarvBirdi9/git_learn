import express, { response } from "express";

export const productRoutes = express.Router();

productRoutes.get("/products", (request, response) => {
  response.send("Products");
});

productRoutes.post("/add-new-products", (request, response) => {
  response.send("Add new Products");
});
