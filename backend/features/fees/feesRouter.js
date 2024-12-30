
import express from 'express';
const { addFee, getFees, updateFeeStatus } = require('./feeController');

const router = express.Router();

router.post('/', addFee); // Add a fee record
router.get('/', getFees); // Get all fee records
router.patch('/:id', updateFeeStatus);  // Update fee payment status
router.get('/:id', getFees); // Get a fee record by ID
router.delete('/:id', getFees); // Delete a fee record
module.exports = router;
