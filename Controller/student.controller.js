import { Student } from "../Model/student.schema.js";

export const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = new Student({ name, email });
    await newStudent.save();
    res
      .status(200)
      .json({ message: "student register success", data: newStudent });
  } catch (error) {
    res.status(500).json({ message: "student register fail" });
  }
};
