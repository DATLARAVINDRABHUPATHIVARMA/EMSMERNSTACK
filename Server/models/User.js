import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    contact:{type: Number, required: true},
    address:{type: String, required: true},
    email:{type: String},
    password:{type: String},
    employeeID:{type: String, required: true},
    designation:{type: String, required: true},//array
    role:{type: String, enum:["Admin", "Office Employee","Site Incharge", "Ground Level Employee"],required: true},//array
    workPlace:{type: String, required: true},//array
    client:{type: String, required: true},//array
    previousDesignation:{type: String},//array
    profileImage:{type: String},
    dateofJoining:{type: Date, required: true},
    currentSalary:{type: String},
    previousSalary:{type: String},
    dateofUpdation:{type: Date},
})

const User = mongoose.model("User", userSchema)
export default User