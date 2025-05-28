import multer from "multer";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Uploads");
  },
  filename: (req, file, cb) => {
    cd(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const addEmployee = async (req, res) => {
  try {
    const {
      employeeID,
      name,
      personalContact,
      dateOfBirth,
      email,
      password,
      presentAddress,
      //state //country //pincode //city
      gender,
      dateOfJoining,
      aadhaarNumber,
      qualification,
      nationality,
      maritalStatus,
      emergencyContact,
      spouseName,
      childrenCount,
      permanentAddress,
      officeContact,
      officeEmail,
      PANNumber,
      department,
      designation,
      jobRole,
      workPlace,
      workSiteDetails,
      client,
      clientID,
      reportingInchargePerson,
      repPersonDesignation,
      repPersonEmployeeID,
      currentSalary,
      bankName,
      bankAccountNumber,
      IFSCCode,
      bankBranch,
      ESIDetails,
      insuranceDetails,
      PFDetails,
      teamCount,
      //teamDetails: { type: Array },
      previousDesignation,
      previousSalary,
      dateOfPromotion,
      dateOfTermination,
      refPerson,
      isRefPersonEmployee,
      refPersonContact,
      refPersonEmployeeID,
      webRole,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, errror: "User already registered in emp" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      employeeID,
      name,
      personalContact,
      dateOfBirth,
      email,
      password: hashPassword,
      presentAddress,
      //state //country //pincode //city
      gender,
      profileImage: req.file ? req.file.filename : "",
      dateOfJoining,
      aadhaarNumber,
      qualification,
      maritalStatus,
      emergencyContact,
      spouseName,
      childrenCount,
      permanentAddress,
      officeContact,
      officeEmail,
      PANNumber,
      //department,
      designation,
      jobRole,
      workPlace,
      workSiteDetails,
      client,
      clientID,
      reportingInchargePerson,
      repPersonDesignation,
      repPersonEmployeeID,
      currentSalary,
      bankName,
      bankAccountNumber,
      IFSCCode,
      bankBranch,
      ESIDetails,
      insuranceDetails,
      PFDetails,
      //teamCount,
      //teamDetails: { type: Array },
      previousDesignation,
      previousSalary,
      dateOfPromotion,
      dateOfTermination,
      refPerson,
      isRefPersonEmployee,
      refPersonContact,
      refPersonEmployeeID,
      webRole,
    });
    const savedUser = await newUser.save();

    const newEmployee = new Employee({
      userId: savedUser._id,
      nationality,
      department,
      teamCount,
    });

    await newEmployee.save();
    return res.status(200).json({success: true, message: "Employee Created"})

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({success: false, error: "Server error in adding employee"})
  }
};

export { addEmployee, upload };
