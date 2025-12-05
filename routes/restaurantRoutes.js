import express from "express";
import {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getRestaurants);

// Admin only
router.post("/", protect, adminOnly, createRestaurant);
router.put("/:id", protect, adminOnly, updateRestaurant);
router.delete("/:id", protect, adminOnly, deleteRestaurant);

export default router;
