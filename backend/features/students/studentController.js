import StudentRepository from "./studentRepository.js";

export default class StudentController {
   constructor() {
      this.studentRepository = new StudentRepository();
   }

   // Add a student
   addStudent = async (req, res) => {
      try {
         const student = await this.studentRepository.createStudent(req.body);
         console.log("insied add student");
         res.status(201).json(student);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   };

   // Get all students
   getStudents = async (req, res) => {
      try {
         const students = await this.studentRepository.getAllStudents();
         res.json(students);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };

   // Delete a student
   deleteStudent = async (req, res) => {
      try {
         const student = await this.studentRepository.deleteStudentById(req.params.id);
         if (!student) return res.status(404).json({ error: "Student not found" });
         res.json({ message: "Student deleted successfully" });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };

   // Find a student by ID
   findStudent = async (req, res) => {
      try {
        const { id } = req.params;
         const student = await this.studentRepository.findStudentById(id);
         if (!student) return res.status(404).json({ error: "Student not found" });
         res.json(student);
      } catch (error) {
        console.log("error",error);
         res.status(500).json({ error: error.message });
      }
   };
}