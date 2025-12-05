import express from "express";
import {
  createDish,
  getDishesByRestaurant,
  updateDish,
  deleteDish,
} from "../controllers/dishController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get dishes of a restaurant
router.get("/:id", getDishesByRestaurant);

// Admin
router.post("/", protect, adminOnly, createDish);
router.put("/:id", protect, adminOnly, updateDish);
router.delete("/:id", protect, adminOnly, deleteDish);

export default router;
