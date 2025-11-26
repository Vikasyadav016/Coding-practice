const Cart = require("../Models/Cart").default;

const addToCart = async (req, res) => {
  const { courseId, price } = req.body;
  const user = req.user._id;

  let cart = await Cart.findOne({ user });
  if (!cart) cart = await Cart.create({ user, items: [] });

  cart.items.push({ course: courseId, price });
  await cart.save();

  res.json(cart);
};

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.course"
  );
  res.json(cart);
};

module.exports = { addToCart, getCart };
