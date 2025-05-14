import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
  connectToDatabase();
  try{
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "LOPSAN",
      contact: "9133672903",
      address:"44, HACP Colony, Opposite Vikrampuri, Karkhana, Secunderabad, Telangana, 500009",
      aadhaarNumber: "571691790004",
      gender: "MALE",
      employeeID: "LIV000192",
      email: "lopsan@gmail.com",
      password: hashPassword,
      PANNumber: "BNEPV6837Q",
      dateOfBirth: new Date("1998-06-10"),
      dateOfJoining: new Date("2025-05-01"),
      department: "IT",
      designation: "Software Engineer",
      role: "admin",
      workPlace: "Head Office",
      client: "SHFS",
      reportingInchargePerson: "V NagaBhushan Rao",
      repPersonDesignation: "CEO",
      bankName: "Karur Vysya Bank",
      bankAccountNumber: "12345687790123456",
      IFSCCode: "KVBK0001234",
      bankBranch: "Anakapalle",
    })
    await newUser.save();
  } catch(error){
    console.log(error);
  }
}

userRegister();