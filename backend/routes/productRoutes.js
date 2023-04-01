import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controller/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);
router.post("/", protect, admin, createProduct);
router.post("/addreview/:id", protect, createProductReview);

export default router;
