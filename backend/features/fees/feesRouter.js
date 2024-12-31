import express from "express";
import FeesController from "./feesController.js";

const feesController = new FeesController();
const feesRouter = express.Router();

feesRouter.post("/", (req, res) => {
   feesController.addFee(req, res); // Add a fee record
});

feesRouter.get("/", (req, res) => {
   feesController.getFees(req, res); // Get all fee records
});
feesRouter.patch("/:id", (req, res) => {
   feesController.updateFeeStatus(req, res); // Update fee payment status
});
feesRouter.get("/:id", (req, res) => {
   feesController.findFee(req, res); // Get a fee record by ID
});
feesRouter.delete("/:id", (req, res) => {
   feesController.getFees(req, res); // Delete a fee record
});

export default feesRouter;
