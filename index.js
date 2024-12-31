// All Imports
import express from 'express';
import cors from 'cors';
import studentRoutes from './backend/features/students/studentRouter.js';
import feeRoutes from './backend/features/fees/feesRouter.js';
import dotenv from 'dotenv';

// All configs
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// All routes
app.use('/api/students', studentRoutes);
app.use('/api/fees', feeRoutes);

export default app;