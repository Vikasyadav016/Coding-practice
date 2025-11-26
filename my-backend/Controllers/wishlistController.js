// import Wishlist from "../models/Wishlist.js";
const Wishlist = require("../Models/Wishlist").default

const toggleWishlist = async (req, res) => {
  const { courseId } = req.body;
  const user = req.user._id;

  let wishlist = await Wishlist.findOne({ user });

  if (!wishlist) wishlist = await Wishlist.create({ user, courses: [] });

  if (wishlist.courses.includes(courseId)) {
    wishlist.courses.pull(courseId);
  } else {
    wishlist.courses.push(courseId);
  }

  await wishlist.save();
  res.json(wishlist);
};

module.exports = {toggleWishlist}
