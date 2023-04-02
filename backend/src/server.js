// const express = require("express");
import express from "express";
import env from "dotenv";
// const env = require("dotenv");
// // const products = require("../data/products");
// import products from "../data/products.js";
import connectDB from "../config/db.js";
import productRoutes from "../routes/productRoutes.js";
import userRoutes from "../routes/userRoutes.js";
import orderRoutes from "../routes/orderRoutes.js";
import uploadRoutes from "../routes/uploadRoutes.js";
import path from "path";
import morgan from "morgan";

import { errorHandler, notFound } from "../middleware/errorMiddleware.js";

env.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/upload", express.static(path.join(__dirname, "/upload")));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
