import feeSchema from './feesSchema.js';
const Fee = feeSchema;

// Add fee record
exports.addFeeRecord = async (data) => {
    const fee = new Fee(data);
    return await fee.save();
}

// Fetch all fee records
exports.getAllFeeRecords = async () => {
    return await Fee.find().populate('studentId', 'name email');
}

// Update fee payment status
exports.updateFeePaymentStatus = async (id) => {
    return await Fee.findByIdAndUpdate
    (
        id,
        { status: 'Paid', paymentDate: Date.now() },
        { new: true }
    );
}

// Delete a fee record by ID
exports.deleteFeeRecordById = async (id) => {
    return await Fee.findByIdAndDelete(id);
}

// Find a fee record by ID
exports.findFeeRecordById = async (id) => {
    return await Fee.findById(id).populate('studentId', 'name email');
}