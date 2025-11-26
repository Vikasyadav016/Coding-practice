const express = require("express");
const { getCourses, getCourseById } = require("../Controllers/courseController");
const { protect } = require("../middleWare/protect");
const router = express.Router();

router.get("/getCourse",protect, getCourses);
router.get("/:id",protect, getCourseById);

module.exports = router;
