// All Imports
import express from 'express';
import cors from 'cors';
import studentRoutes from './features/students/studentRoutes';
import feeRoutes from './features/fees/feeRoutes';
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