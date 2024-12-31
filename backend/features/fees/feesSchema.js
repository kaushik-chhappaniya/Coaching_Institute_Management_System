import mongoose from 'mongoose';

const feeSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
  dueDate: { type: Date, required: true },
  paymentDate: { type: Date },
  paymentMode: { type: String, enum: ['cash', 'UPI', 'cheque', 'card'], required: true },
});

const Fee = mongoose.model('Fee', feeSchema);
export { Fee };
