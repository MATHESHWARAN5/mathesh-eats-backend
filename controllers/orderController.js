import Order from "../models/Order.js";

// Place order
export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user._id,
      items: req.body.items,
      total: req.body.total,
    });

    res.status(201).json(order);
  } catch {
    res.status(500).json({ message: "Error placing order" });
  }
};

// User order history
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Admin — all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch {
    res.status(500).json({ message: "Error fetching all orders" });
  }
};
