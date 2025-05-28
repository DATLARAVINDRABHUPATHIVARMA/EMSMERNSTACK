import mongoose from "mongoose";
import {Schema} from "mongoose";

const employeeSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    nationality: {type: String, enum: ["India","Other"], required: true},
    department: {type: Schema.Types.ObjectId, ref: "Department", required: true},
    teamCount: {type: Number},
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;