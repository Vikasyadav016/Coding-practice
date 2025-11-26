const express = require("express");
const { addToCart, getCart } = require("../Controllers/cartController.js");
const { protect } = require("../middleWare/protect.js");


const router = express.Router();

router.post("/add", protect, addToCart);
router.get("/get/Cart", protect, getCart);


module.exports = router;
