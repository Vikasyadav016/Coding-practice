const express = require("express");
const { getInstructor } = require("../Controllers/instructorController");
const { protect } = require("../middleWare/protect");

const router = express.Router();

router.get("/:id",protect, getInstructor);

module.exports = router;
