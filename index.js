import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/utils/connectDB.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb", extended: true }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!", error);
  });

// importing and using routes
import { productRouter } from "./src/routes/product.routes.js";
import { errorHandler } from "./src/utils/handlers.js";

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.use("/api/v1/products", productRouter);

// Send back a 404 error for any unknown api request
app.use("*", (req, res) => {
  errorHandler({
    res,
    error: "API Not Found",
    statusCode: 404,
  });
});
