// import Instructor from "../models/Instructor.js";
const Instructor = require("../Models/Instructor").default


const getInstructor = async (req, res) => {
  const instructor = await Instructor.findById(req.params.id).populate("courses");
  res.json(instructor);
};

module.exports = {getInstructor}
