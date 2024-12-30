import feeRepository from './feesRepository.js'
const feeRepository = feeRepository();

// Add fee record
exports.addFee = async (req, res) => {
  try {
    const fee = await feeRepository.addFeeRecord(req.body);
    res.status(201).json(fee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all fee records
exports.getFees = async (req, res) => {
  try {
    const fees = await feeRepository.getAllFeeRecords();    
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update fee payment status
exports.updateFeeStatus = async (req, res) => {
  try {
    const feeUpdate = await feeRepository.updateFeeStatus(req.params.id);
    if (!feeUpdate) return res.status(404).json({ error: 'Fee record not found' });
    res.json(feeUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a fee record
exports.deleteFee = async (req, res) => {
  try {
    const fee = await feeRepository.deleteFeeRecordById(req.params.id);
    if (!fee) return res.status(404).json({ error: 'Fee record not found' });
    res.json({ message: 'Fee record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find a fee record by ID
exports.findFee = async (req, res) => {
  try {
    const fee = await feeRepository.findFeeRecordById(req.params.id);
    if (!fee) return res.status(404).json({ error: 'Fee record not found' });
    res.json(fee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};