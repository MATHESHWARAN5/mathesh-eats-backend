import Restaurant from "../models/Restaurant.js";

// Create restaurant (admin only)
export const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Error creating restaurant" });
  }
};

// Get all restaurants
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch {
    res.status(500).json({ message: "Error fetching restaurants" });
  }
};

// Update (admin)
export const updateRestaurant = async (req, res) => {
  try {
    const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Error updating restaurant" });
  }
};

// Delete (admin)
export const deleteRestaurant = async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ message: "Restaurant deleted" });
  } catch {
    res.status(500).json({ message: "Error deleting restaurant" });
  }
};
