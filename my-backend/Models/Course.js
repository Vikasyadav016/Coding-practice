import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: String,
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" },
    rating: Number,
    students: Number,
    price: Number,
    discountPrice: Number,
    duration: String,
    level: String,
    category: String,
    bestseller: Boolean,
    image: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
