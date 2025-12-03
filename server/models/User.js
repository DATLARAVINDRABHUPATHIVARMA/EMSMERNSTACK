import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String},
  password: {type: String},
  role: {type: String, enum: ["admin","HO", "staff","employee"], required: true},
  profileImage: {type: String},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type:  Date, default: Date.now},
})

const User = mongoose.model("User", userSchema)
export default User