import multer from "multer";
import Employee from "../models/Employee.js"
import User from "../models/User.js" 
import bcrypt from 'bcrypt';
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/Public/Uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const addEmployee = async (req, res) => {
    try{
    const {
        employeeID,
        name,
        personalContact,
        dateOfBirth,
        personalEmail,
        password,
        presentAddress,
        //state //country //pincode //city
        gender,
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
        department,
        designation,
        jobRole,/*array enum*/
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
        //teamCount: { type: Number },
        //teamDetails: { type: Array },
        previousDesignation,
        previousSalary,
        dateOfPromotion,
        dateOfTermination,
        refPerson,
        isRefPersonEmployee,
        refPersonContact,
        refPersonEmployeeID,
        webrole
    } = req.body;

    const user = await User.findOne({email})
    if (user){
        return res.status(400).json({success: false, error: "user already registered"})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        employeeID,
        name,
        personalContact,
        dateOfBirth,
        personalEmail,
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
        jobRole,/*array enum*/
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
        //teamCount: { type: Number },
        //teamDetails: { type: Array },
        previousDesignation,
        previousSalary,
        dateOfPromotion,
        dateOfTermination,
        refPerson,
        isRefPersonEmployee,
        refPersonContact,
        refPersonEmployeeID,
        webrole
    })
    const savedUser = await newUser.save()

    const newEmployee = new Employee({
        userId: savedUser._id,
        department,
    })

    await newEmployee.save()
    return res.status(200).json({success: true, message: 'employee created'})

} catch(error){
    return res.status(500).json({success: false, error: 'server error in adding employee'})
}
}

export {addEmployee, upload}