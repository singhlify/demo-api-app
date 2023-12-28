import joi from "joi";
import { errorHandler, responseHandler } from "../utils/handlers.js";
import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      price: joi.number().required(),
      description: joi.string().required(),
      countInStock: joi.number().required(),
      imageUrl: joi.string().required(),
    });

    const result = await schema.validateAsync(req.body);
    console.log("result>>>", result);

    const newProduct = await Product.create(result);
    if (!newProduct) {
      return errorHandler({
        res,
        error: "Product creation failed",
        statusCode: 400,
      });
    }

    return responseHandler({
      res,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    errorHandler({ res, error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return errorHandler({
        res,
        error: "Product not found",
        statusCode: 404,
      });
    }

    return responseHandler({
      res,
      message: "Product fetched successfully",
      data: products,
    });
  } catch (error) {
    errorHandler({ res, error });
  }
};
