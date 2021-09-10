const router = require("express").Router();
const Order = require("../models/order.model");

router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
