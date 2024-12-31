import { Fee } from "./feesSchema.js";
import mongoose from "mongoose";

export default class FeeRepository {
   // Add fee record
   addFeeRecord = async (data) => {
      const fee = new Fee(data);
      return await fee.save();
   };

   // Fetch all fee records
   getAllFeeRecords = async () => {
      return await Fee.find().populate("studentId", "name email");
   };

   // Update fee payment status
   updateFeePaymentStatus = async (id) => {
      return await Fee.findByIdAndUpdate(
         id,
         { status: "Paid", paymentDate: Date.now() },
         { new: true },
      );
   };

   // Delete a fee record by ID
   deleteFeeRecordById = async (id) => {
      return await Fee.findByIdAndDelete(id);
   };

   // Find a fee record by ID
   findFeeRecordById = async (id) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).json({ error: 'Invalid ID format' });
       }
      const fee = await Fee.findById('6772ea75548e74e4ad9c4bc9').populate('studentId');
      if(!fee) {
         throw new Error("Fee record not found");
      }
      return fee;
   };
}
