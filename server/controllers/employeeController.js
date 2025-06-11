import multer from "multer";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import Department from "../models/Department.js";
import Client from "../models/Client.js";
import Site from "../models/Site.js";
import bcrypt from "bcrypt";
import path from "path";

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
    const { employeeID, name, personalContact, dateOfBirth, email, password, preHNo, preStreet, preVillage, preMandal, preCity, preState, preCountry, prePincode, fatherName, motherName, height, weight, hairColour, eyeColour, chest, disease, IDMark1, IDMark2, bloodGroup, fatherOccupation, motherOccupation, motherTongue, languagesKnown, religion, caste, subCaste, PWDStatus, disability, siblings, /*/state //country //pincode //city*/ gender, dateOfJoining, aadhaarNumber, qualification, major, maritalStatus, emergencyContact, spouseName, childrenCount, perHNo, perStreet, perVillage, perMandal, perCity, perState, perCountry, perPincode, officeContact, officeEmail, PANNumber, department, designation, jobRole, site, /*/ workSiteDetails,*/ client, /*/clientID,*/ reportingInchargePerson, repPersonDesignation, repPersonEmployeeID, currentSalary, bankName, bankAccountNumber, IFSCCode, bankBranch, ESIDetails, insuranceDetails, PFDetails, UANNumber, /*/ teamCount, // teamDetails: { type: Array }, */ previousDesignation, previousSalary, dateOfPromotion, dateOfTermination, role, profileImage, refPerson1, isRefPerson1Employee, refPerson1Contact, refPerson1Email, refPerson1Occupation, refPerson1EmployeeID, refPerson2, isRefPerson2Employee, refPerson2Contact, refPerson2EmployeeID, refPerson2Email, refPerson2Occupation } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "User already registered in emp" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashPassword, role, profileImage: req.file ? req.file.filename : "" });
    const savedUser = await newUser.save();

     const newEmployee = new Employee({ userId: savedUser._id, employeeID, personalContact, dateOfBirth, preHNo, preStreet, preVillage, preMandal, preCity, preState, preCountry, prePincode, fatherName, motherName, height, weight, hairColour, eyeColour, chest, disease, IDMark1, IDMark2, bloodGroup, fatherOccupation, motherOccupation, motherTongue, languagesKnown, religion, caste, subCaste, PWDStatus, disability, siblings, /*/ //state //country //pincode //city*/ gender, dateOfJoining, aadhaarNumber, qualification, major, /*/ //nationality, */ maritalStatus, emergencyContact, spouseName, childrenCount, perHNo, perStreet, perVillage, perMandal, perCity, perState, perCountry, perPincode, officeContact, officeEmail, PANNumber, department, designation, jobRole, site, /*/ workSiteDetails, */ client, reportingInchargePerson, repPersonDesignation, repPersonEmployeeID, currentSalary, bankName, bankAccountNumber, IFSCCode, bankBranch, ESIDetails, insuranceDetails, PFDetails, UANNumber, /*/ //teamCount, // //teamDetails: { type: Array }, */ previousDesignation, previousSalary, dateOfPromotion, dateOfTermination, refPerson1, isRefPerson1Employee, refPerson1Contact, refPerson1EmployeeID, refPerson1Email, refPerson1Occupation, refPerson2, isRefPerson2Employee, refPerson2Contact, refPerson2EmployeeID, refPerson2Email, refPerson2Occupation });

    await newEmployee.save();
    return res.status(200).json({ success: true, message: "Employee Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: "Server error in adding employee" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('userId',{password: 0})
    return res.status(200).json({success: true, employees})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get employees server error'})
  }
}

const getEmployee = async (req, res) => {
  const {id} = req.params;
  try {
    const employee = await Employee.findById({_id: id}).populate('userId',{password: 0}).populate('department').populate('client').populate('site')
    return res.status(200).json({success: true, employee})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get employee server error'})
  }
}

const updateEmployee = async (req, res) => {
  try{
    const {id} = req.params;
    const { name, personalContact, perHNo, perStreet, perVillage, perMandal, perCity, perState, perCountry, perPincode, fatherName, motherName, height, weight, hairColour, eyeColour, chest, disease, IDMark1, IDMark2, bloodGroup, fatherOccupation, motherOccupation, motherTongue, languagesKnown, religion, caste, subCaste, PWDStatus, disability, siblings, qualification, major, maritalStatus, emergencyContact, spouseName, childrenCount, preHNo, preStreet, preVillage, preMandal, preCity, preState, preCountry, prePincode, officeContact, officeEmail, PANNumber, department, designation, jobRole, site, client, reportingInchargePerson, repPersonDesignation, repPersonEmployeeID, currentSalary, bankName, bankAccountNumber, IFSCCode, bankBranch, ESIDetails, insuranceDetails, PFDetails, UANNumber, previousDesignation, previousSalary, dateOfPromotion } = req.body;

    const employee = await Employee.findById({ _id : id });
    if(!employee){
      return res.status(404).json({success: false, error: 'employee not found'})
    }

    const user = await User.findById({ _id : employee.userId });
    if(!user){
      return res.status(404).json({success: false, error: 'user not found'})
    }

    const updateUser = await User.findByIdAndUpdate({ _id : employee.userId }, {name})

    const updateEmployee = await Employee.findByIdAndUpdate({ _id : id }, { personalContact, preHNo, preStreet, preVillage, preMandal, preCity, preState, preCountry, prePincode, perHNo, perStreet, perVillage, perMandal, perCity, perState, perCountry, perPincode, fatherName, motherName, height, weight, hairColour, eyeColour, chest, disease, IDMark1, IDMark2, bloodGroup, fatherOccupation, motherOccupation, motherTongue, languagesKnown, religion, caste, subCaste, PWDStatus, disability, siblings, qualification, major, maritalStatus, emergencyContact, spouseName, childrenCount, officeContact, officeEmail, PANNumber, department, designation, jobRole, site, client, reportingInchargePerson, repPersonDesignation, repPersonEmployeeID, currentSalary, bankName, bankAccountNumber, IFSCCode, bankBranch, ESIDetails, insuranceDetails, PFDetails, UANNumber, previousDesignation, previousSalary, dateOfPromotion })

    if (!updateEmployee || !updateUser){
       return res.status(404).json({success: false, error: 'document not found'})
    }

    return res.status(200).json({success: true, message: 'employee updated'})

  } catch (error) {
    return res.status(500).json({success: false, error: 'update employee server error'})
  }
}

export { addEmployee, upload, getEmployees, getEmployee, updateEmployee };
