import Dish from "../models/Dish.js";

// Create dish
export const createDish = async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    res.status(201).json(dish);
  } catch {
    res.status(500).json({ message: "Error creating dish" });
  }
};

// Get all dishes for a restaurant
export const getDishesByRestaurant = async (req, res) => {
  try {
    const dishes = await Dish.find({ restaurant: req.params.id });
    res.json(dishes);
  } catch {
    res.status(500).json({ message: "Error fetching dishes" });
  }
};

// Update dish
export const updateDish = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(dish);
  } catch {
    res.status(500).json({ message: "Error updating dish" });
  }
};

// Delete dish
export const deleteDish = async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.json({ message: "Dish deleted" });
  } catch {
    res.status(500).json({ message: "Error deleting dish" });
  }
};
