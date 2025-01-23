import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/dbconfig.js";
import studentRouter from "./Router/student.router.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/student", studentRouter);

app.listen(port, () => {
  console.log("connect to port");
});
