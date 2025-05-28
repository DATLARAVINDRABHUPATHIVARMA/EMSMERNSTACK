import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
  connectToDatabase();
  try{
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      employeeID: 'AAAA000000',
      name: 'V Nagabhushana Rao', 
      personalContact: '+919000664950',
      dateOfBirth: new Date("1969-05-10"),
      email: 'vnr@gmail.com',
      password: hashPassword,
      presentAddress: 'Sainikpuri, yapral, hyderabad',
      //state //country //pincode //city
      gender: 'Male',
      dateOfJoining: new Date('2015-01-01'),
      aadhaarNumber: '6523538165235381',
      qualification: 'Degree',
      maritalStatus: 'Married',
      emergencyContact: '9090990909',
      //department: { type: String, required: true },
      designation: 'CEO',
      // jobRole: {type: String},/*array enum*/
      workPlace: 'All',
      // workSiteDetails: { type: String,},
      client: 'a',
      clientID: 'a',
      // reportingInchargePerson: { type: String },
      // repPersonDesignation: { type: String },
      // repPersonEmployeeID: { type: String },
      // currentSalary: { type: String },
      // bankName: { type: String},
      // bankAccountNumber: { type: String },
      // IFSCCode: { type: String},
      // bankBranch: { type: String},
      // ESIDetails: { type: String,},
      // insuranceDetails: { type: String,},
      // PFDetails: { type: String,},
      //teamCount: { type: Number },
      //teamDetails: { type: Array },
      // previousDesignation: { type: String },
      // previousSalary: { type: String },
      // dateOfPromotion: { type: Date },
      // dateOfTermination: { type: Date },
      // refPerson: { type: String },
      // isRefPersonEmployee: { type: String, enum: ["Yes", "No"]},
      // refPersonContact: { type: String },
      // refPersonEmployeeID: { type: String },
      webRole: 'admin',
    })
    await newUser.save();
  } catch(error){
    console.log(error);
  }
}

userRegister();