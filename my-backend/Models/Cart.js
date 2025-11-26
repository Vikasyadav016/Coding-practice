import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      price: Number,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
