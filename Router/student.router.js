import express from "express";
import { addStudent } from "../Controller/student.controller.js";

const router = express.Router();

router.post("/addstudent", addStudent);

export default router;
