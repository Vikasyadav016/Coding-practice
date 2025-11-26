const express = require("express");
const { toggleWishlist } = require("../Controllers/wishlistController");
const { protect } = require("../middleWare/protect");

const router = express.Router();

router.post("/toggle",protect, toggleWishlist);


module.exports = router;
