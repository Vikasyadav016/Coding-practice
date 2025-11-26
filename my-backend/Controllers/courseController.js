const Course = require("../Models/Course").default

const getCourses = async (req, res) => {
  const courses = await Course.find().populate("instructor");
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id).populate("instructor");
  res.json(course);
};

module.exports = {getCourses,getCourseById}
