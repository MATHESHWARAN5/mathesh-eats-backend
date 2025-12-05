import express from "express";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
} from "../controllers/orderController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// User — place order
router.post("/", protect, placeOrder);

// User — order history
router.get("/my-orders", protect, getUserOrders);

// Admin — all orders
router.get("/all", protect, adminOnly, getAllOrders);

export default router;
