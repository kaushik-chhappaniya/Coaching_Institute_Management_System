import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  roll: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String, required: true},
  dateOfAdmission: { type: Date, default: Date.now },
  batch: { 
    type: String,
    enum: ['XI-A', 'XI-B', 'XI-C', 'XII-A', 'XII-B', 'XII-C'],
    }
});

const Student = mongoose.model('Student', studentSchema);
export { Student };