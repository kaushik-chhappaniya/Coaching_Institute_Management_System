import mongoose from "mongoose";
const baseUrl = process.env.MONGODB || '0.0.0.0:2717';
export const connectUsingMongoose = async (req, res, next) => {
  try {
    await mongoose.connect(baseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDB');
    next();
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error.message);
    next(error);
  }
}
