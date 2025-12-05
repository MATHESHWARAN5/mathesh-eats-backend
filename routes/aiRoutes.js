import express from "express";
import { recommendDish } from "../controllers/aiController.js";

const router = express.Router();

// AI Suggestion
router.post("/recommend", recommendDish);

export default router;
