const express = require('express');
const router = express.Router();

let cart = [];

// Get all items in the cart
router.get('/', (req, res) => {
  res.json(cart);
});

// Add an item to the cart
router.post('/', (req, res) => {
  const { id, name, price, quantity } = req.body;
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity });
  }

  res.status(201).json(cart);
});

// Clear the cart
router.delete('/', (req, res) => {
  cart = [];
  res.status(204).send();
});

module.exports = router;

