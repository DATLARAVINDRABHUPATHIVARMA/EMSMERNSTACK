import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
  connectToDatabase();
  try{
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "V Nagabhushana Rao",
      contact: "9133612999",
      address:"44, HACP Colony, Opposite Vikrampuri, Karkhana, Secunderabad, Telangana, 500009",
      //per pre add
      aadhaarNumber: "571691790004",
      gender: "MALE",
      employeeID: "SHFS00001",
      //martial status
      email: "vnr@gmail.com",
      //office and personal
      password: hashPassword,
      PANNumber: "BNEPV6837Q",
      dateOfBirth: new Date("1998-06-10"),
      dateOfJoining: new Date("2025-05-01"),
      department: "IT",
      designation: "Software Engineer",
      role: "admin",
      workPlace: "Head Office",
      client: "SHFS",
      //clientid
      reportingInchargePerson: "V NagaBhushan Rao",
      repPersonDesignation: "CEO",
      bankName: "Karur Vysya Bank",
      bankAccountNumber: "1234561187790123456",
      IFSCCode: "KVBK0001234",
      bankBranch: "Anakapalle",
      //esic
      //pf
      //qualification
      //contact
      //emergency
    })
    await newUser.save();
  } catch(error){
    console.log(error);
  }
}

userRegister();