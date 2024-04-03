import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error"));

db.once('open', () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true }); 

const dataSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String
}, { timestamps: true }); 

const userModel = mongoose.model("User", userSchema); 
const dataModel = mongoose.model("Data", dataSchema); 

export { userModel, dataModel };
