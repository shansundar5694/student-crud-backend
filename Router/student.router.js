import express from "express";
import {
  addStudent,
  deleteStudentById,
  editStudentById,
  getStudent,
} from "../Controller/student.controller.js";

const router = express.Router();

router.post("/addstudent", addStudent);
router.get("/getstudent", getStudent);
router.delete("/deletestudent/:id", deleteStudentById);
router.put("/editstudent/:id", editStudentById);

export default router;
