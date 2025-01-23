import express from "express";
import {
  addStudent,
  deleteStudentById,
  getStudent,
} from "../Controller/student.controller.js";

const router = express.Router();

router.post("/addstudent", addStudent);
router.get("/getstudent", getStudent);
router.delete("/deletestudent/:id", deleteStudentById);

export default router;
