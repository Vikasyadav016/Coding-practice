import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    name: String,
    bio: String,
    avatar: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

export default mongoose.model("Instructor", instructorSchema);
