import express from "express";
import {
  addOrderItem,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", protect, addOrderItem);
router.get("/", protect, admin, getOrders);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/delivered", protect, admin, updateOrderToDelivered);

export default router;
