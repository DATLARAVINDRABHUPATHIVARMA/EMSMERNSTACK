import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    contact:{type: Number, required: true},
    email:{type: String},
    password:{type: String},
    designation:{type: String, required: true},
    role:{type: String, enum:["Admin", "Office Employee","Site Incharge", "Ground Level Employee"],required: true},
    previousDesignation:{type: String, required: true},
    profileImage:{type: String, required: true},
    dateofJoining:{type: Date, default: Date.now, required: true},
    currentSalary:{type: String, required: true},
    previousSalary:{type: String},
    createAt:{type: Date, default: Date.now},
    updatedAt:{type: Date, default: Date.now},
})

const User = mongoose.model("User", userSchema)
export default User