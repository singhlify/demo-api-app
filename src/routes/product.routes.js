import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controllers.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);

export { productRouter };
