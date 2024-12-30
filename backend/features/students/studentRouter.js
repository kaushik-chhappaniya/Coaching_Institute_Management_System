import express from 'express';
import { addStudent, getStudents, deleteStudent } from './studentController.js';

const router = express.Router();

router.post('/', addStudent); // Add a student
router.get('/', getStudents); // Get all students
router.delete('/:id', deleteStudent); // Delete a student
router.get('/:id', findStudent); // Find a student by ID

module.exports = router;
