import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  employeeID: { type: String, required: true, unique: true}, //auto load
  personalContact: { type: String, required: true, unique: true}, //countrycode
  dateOfBirth: { type: Date, required: true },
  presentAddress: { type: String, required: true},
  //state //country //pincode //city
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfJoining: { type: Date, required: true },
  aadhaarNumber: { type: String, required: true },
  qualification: { type: String, },
  maritalStatus: { type: String, enum: ["Single", "Married"], required: true},
  emergencyContact: {type: String},
  spouseName: { type : String},
  childrenCount: {type: Number},
  permanentAddress: { type: String},
  officeContact: { type: String},
  officeEmail: { type: String },
  PANNumber: { type: String },
  department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
  designation: { type: String, required: true },
  jobRole: { type: String},/*array enum*/
  workPlace: {  type: Schema.Types.ObjectId, ref: "Site", required: true  },
  workSiteDetails: { type: String,},//*
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true  },
  reportingInchargePerson: { type: String },
  repPersonDesignation: { type: String },
  repPersonEmployeeID: { type: String },
  currentSalary: { type: String },
  bankName: { type: String},
  bankAccountNumber: { type: String },
  IFSCCode: { type: String},
  bankBranch: { type: String},
  ESIDetails: { type: String,},
  insuranceDetails: { type: String,},
  PFDetails: { type: String,},
  UANNumber: { type: String,},
  //teamCount: { type: Number },
  //teamDetails: { type: Array },
  previousDesignation: { type: String },
  previousSalary: { type: String },
  dateOfPromotion: { type: Date },
  dateOfTermination: { type: Date },
  refPerson1: { type: String },
  isRefPerson1Employee: { type: String, enum: ["Yes", "No"]},
  refPerson1Contact: { type: String },
  refPerson1EmployeeID: { type: String },
  refPerson2: { type: String },
  isRefPerson2Employee: { type: String, enum: ["Yes", "No"]},
  refPerson2Contact: { type: String },
  refPerson2EmployeeID: { type: String },
  createdAt:  {type: Date, default: Date.now},
  updatedAt:  {type: Date, default: Date.now},
})

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;