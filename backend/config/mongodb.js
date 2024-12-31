import mongoose from "mongoose";
const baseUrl = process.env.MONGOURL || 'mongodb://127.0.0.1:27017/coaching-institute-management-system';
export const connectUsingMongoose = async (req, res, next) => {
  try {
    await mongoose.connect(baseUrl);
    console.log('Connected to MongoDB');
    // next();
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error.message);
    // next(error);
  }
}
