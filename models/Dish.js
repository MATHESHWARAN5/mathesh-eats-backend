import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Dish = mongoose.model("Dish", dishSchema);
export default Dish;
