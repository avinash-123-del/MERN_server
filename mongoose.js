import mongoose from "mongoose";
import dotenv from 'dotenv'

let db, userSchema, userModel, dataSchema, dataModel;

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "Connection Error");
});

db.once('open', () => {
  console.log("We are connected");
});

userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

dataSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
});

userModel = mongoose.model("user", userSchema);
dataModel = mongoose.model("data", dataSchema);

export { userModel,dataModel };