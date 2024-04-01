import mongoose from "mongoose";

let db, userSchema, userModel, dataSchema, dataModel;

mongoose.connect("mongodb://127.0.0.1:27017/avi");

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