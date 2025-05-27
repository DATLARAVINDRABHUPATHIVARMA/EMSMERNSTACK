import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new mongoose.Schema({
userId: {type: Schema.Types.ObjectId, ref: "User", required : true},
department: {type: Schema.Types.ObjectId, ref: "Department", required : true},
createdAt:  {type: Date, default: Date.now},
updatedAt:  {type: Date, default: Date.now},
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;