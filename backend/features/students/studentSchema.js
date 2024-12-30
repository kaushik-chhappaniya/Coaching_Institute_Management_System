import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String, required: true},
  dateOfAdmission: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);