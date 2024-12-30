import studentSchema from './studentSchema.js';
const Student = studentSchema;

// Add a new student
exports.createStudent = async (data) => {
  const student = new Student(data);
  return await student.save();
};

// Fetch all students
exports.getAllStudents = async () => {
  return await Student.find();
};

// Find a student by ID
exports.findStudentById = async (id) => {
  return await Student.findById(id);
};

// Delete a student by ID
exports.deleteStudentById = async (id) => {
  return await Student.findByIdAndDelete(id);
};
