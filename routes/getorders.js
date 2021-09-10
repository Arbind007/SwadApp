const router = require("express").Router();
const Order = require("../models/order.model");

let body = [];

router.post("/", async (req, res) => {
  try {
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      let test = Buffer.concat(body);
      let test2 = JSON.parse(test);
      let name = test2.name;
      let email = test2.email;
      let address = test2.addess;
      let order = "";

      for (let i = 0; i < test2.order.length; i++) {
        var tran =
          test2.order[i].title + " - " + test2.order[i].quantity + " , ";
        order += tran;
      }

      const newOrder = new Order({
        name,
        email,
        address,
        order,
      });
      const savedOrder = newOrder.save();
      test = null;
      test2 = null;
      body = [];
      res.json(savedOrder);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
