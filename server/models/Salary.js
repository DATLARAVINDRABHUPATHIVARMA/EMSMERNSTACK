import mongoose from 'mongoose'

const salarySchema = new mongoose.Schema({
    client: { type : String, required : true },
    employee: { type : String},
    salary: { type: Number},
    allowances: { type: Number},
    deductions: { type: Number},
    payDate: { type: Number},
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Salary = mongoose.model("Salary", salarySchema);
export default Salary;