import multer from "multer";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
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
      // workSiteDetails,
      clientName,
      //clientID,
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
      UANNumber,
      // teamCount,
      // teamDetails: { type: Array },
      previousDesignation,
      previousSalary,
      dateOfPromotion,
      dateOfTermination,
      role,
      refPerson1,
      isRefPerson1Employee,
      refPerson1Contact,
      refPerson1EmployeeID,
      refPerson2,
      isRefPerson2Employee,
      refPerson2Contact,
      refPerson2EmployeeID,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, errror: "User already registered in emp" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : "",
    });
    const savedUser = await newUser.save();

     const newEmployee = new Employee({
      userId: savedUser._id,
      employeeID,
      personalContact,
      dateOfBirth,
      presentAddress,
      // //state //country //pincode //city
      gender,
      dateOfJoining,
      aadhaarNumber,
      qualification,
      // //nationality,
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
      // workSiteDetails,
      clientName,
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
      UANNumber,
      // //teamCount,
      // //teamDetails: { type: Array },
      previousDesignation,
      previousSalary,
      dateOfPromotion,
      dateOfTermination,
      refPerson1,
      isRefPerson1Employee,
      refPerson1Contact,
      refPerson1EmployeeID,
      refPerson2,
      isRefPerson2Employee,
      refPerson2Contact,
      refPerson2EmployeeID,
    });

    await newEmployee.save();
    return res.status(200).json({ success: true, message: "Employee Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: "Server error in adding employee" });
  }
};

export { addEmployee, upload };
