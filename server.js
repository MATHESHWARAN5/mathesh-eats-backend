import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// CORS SETUP (IMPORTANT)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://mathesh-eats-hub.lovable.app",
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
import authRoutes from "./routes/authRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import dishRoutes from "./routes/dishRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/ai", aiRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Mangatha backend is running 🚀");
});

// Connect MongoDB + Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on PORT ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB Error:", err));
