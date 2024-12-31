import express from "express";
import StudentController from "./studentController.js";
const studentController = new StudentController();
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
   studentController.getStudents(req, res); // Get all students
});
studentRouter.post("/", (req, res) => {
   studentController.addStudent(req, res); // Add a student
});
studentRouter.delete("/:id", (req, res) => {
   studentController.deleteStudent(req, res); // Delete a student
});
studentRouter.get("/:id", (req, res) => {
   studentController.findStudent(req, res); // Find a student by ID
});

export default studentRouter;
