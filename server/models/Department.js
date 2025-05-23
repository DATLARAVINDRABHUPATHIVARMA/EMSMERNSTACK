import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    departmentName: { type : String, required : true },
    description: { type : String},
    employeeCount: { type: Number, required : true }
})

const Department = mongoose.model("Department", departmentSchema);
export default Department;