import FeeRepository from "./feesRepository.js";

export default class FeesController {
  constructor (){
    this.feeRepository = new FeeRepository();
  }
   // Add fee record
   addFee = async (req, res) => {
      try {
         const fee = await this.feeRepository.addFeeRecord(req.body);
         res.status(201).json(fee);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   };

   // Get all fee records
   getFees = async (req, res) => {
      try {
         const fees = await this.feeRepository.getAllFeeRecords();
         res.json(fees);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };

   // Update fee payment status
   updateFeeStatus = async (req, res) => {
      try {
         const feeUpdate = await this.feeRepository.updateFeeStatus(req.params.id);
         if (!feeUpdate) return res.status(404).json({ error: "Fee record not found" });
         res.json(feeUpdate);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };

   // Delete a fee record
   deleteFee = async (req, res) => {
      try {
         const fee = await this.feeRepository.deleteFeeRecordById(req.params.id);
         if (!fee) return res.status(404).json({ error: "Fee record not found" });
         res.json({ message: "Fee record deleted successfully" });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };

   // Find a fee record by ID
   findFee = async (req, res) => {
      try {
        let {id} = req.params;
        console.log("req.params",req.params);
         const fee = await this.feeRepository.findFeeRecordById(req.params.id);
         if (!fee) return res.status(404).json({ error: "Fee record not found" });
         res.json(fee);
      } catch (error) {
        console.log("error",error);
         res.status(500).json({ error: error.message });
      }
   };
}
