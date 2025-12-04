const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    role: String, // student, tutor, admin
    online: { type: Boolean, default: false },
    lastSeen: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
