import mongoose from "mongoose";

const InstructorQyalification = new mongoose.Schema({
  name: String,
  code: String,
  startDate: Date,
  endDate: Date,
  completedFrom: String,
  intituteName: String,
  isDeleted:Boolean,
})

const instructorSchema = new mongoose.Schema(
  {
    fullName: {type:String,require:true},
    gender: {type:String,require:true},
    dob: Date,
    phone: {type:String,require:true},
    email: {type:String,require:true},
    address: {type:String,require:true},
    city: String,
    state: String,
    zip: String,
    qualification: InstructorQyalification,
    experience: {type:String,require:true},
    mode: String,
    salary: String,
    subjects: String,
    classes: String,
    availableDays: [],
    startTime: String,
    endTime: String,
    bio: String,
    avatar: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

export default mongoose.model("Instructor", instructorSchema);
