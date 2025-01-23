import express from "express";
import { addStudent, getStudent } from "../Controller/student.controller.js";

const router = express.Router();

router.post("/addstudent", addStudent);
router.get("/getstudent", getStudent);

export default router;
