import mongoose from "mongoose";
import { Student } from "./studentSchema.js";

// Add a new student
export default class StudentRepository {
   async createStudent(data) {
      const student = new Student(data);
      return await student.save();
   }

   // Fetch all students
   async getAllStudents() {
      return await Student.find();
   }

   // Find a student by ID
   async findStudentById(id) {
      return await Student.findById(id);
   }

   // Delete a student by ID
   async deleteStudentById(id) {
      return await Student.findByIdAndDelete(id);
   }
}
