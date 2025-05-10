import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
 /* address: { type: String, required: true},
  aadhaarNumber: { type: String, required: true },
  gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"], required: true },
  employeeID: { type: String, required: true },*/
  email: { type: String, unique: true },
  password: { type: String},
  /*PANNumber: { type: String},
  dateOfBirth: { type: Date, required: true },
  dateOfJoining: { type: Date, required: true },
  profileImage: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },*/
  role: {
    type: String,
    enum: ["admin", "manager", "staff", "employee"],
    required: true,
  },
 /* workPlace: { type: String, required: true },
  client: { type: String, required: true },
  reportingInchargePerson: { type: String },
  currentSalary: { type: String, required: true },
  bankName: { type: String, required: true },
  bankAccountNumber: { type: String, required: true },
  IFSCCode: { type: String, required: true },
  bankBranch: { type: String, required: true },
  teamCount: { type: Number },
  teamDetails: { type: Array },
  previousDesignation: { type: String },
  previousSalary: { type: String },
  dateOfPromotion: { type: Date },
  dateOfTermination: { type: Date }*/
});

const User = mongoose.model("User", userSchema);
export default User;
