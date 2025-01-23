import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
});
export const Student = mongoose.model("Student", studentSchema);
