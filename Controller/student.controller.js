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

export const getStudent = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({ data: student });
  } catch (error) {
    console.error("Error fetching student details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteStudentById = async (req, res) => {
  try {
    const studentID = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(studentID);
    if (!deletedStudent) {
      return res.status(404).json({ message: "student not found" });
    }
    res.status(200).json({ message: "Delete success", data: deletedStudent });
  } catch (error) {
    console.error("Error fetching student details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
