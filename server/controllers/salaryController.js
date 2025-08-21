import Salary from "../models/Salary.js";
import Employee from "../models/Employee.js";


const addSalary = async (req, res) => {
    try { 
      const { employeeID, basicSalary, allowances, deductions, payDate } = req.body;

      const totalSalary = parseInt(basicSalary) + parseInt(allowances) - parseInt(deductions)

      const newSalary = new Salary ({ employeeID, basicSalary, allowances, deductions, netSalary: totalSalary, payDate })
      await newSalary.save()
      return res.status(200).json({success: true, site: newSalary})
    }
    catch (error) {
    return res.status(500).json({success: false, error: "add salary server error"})
  }
}

const getSalary = async (req, res) => {
  try{
    const {id} = req.params;

    let salary = await Salary.find({employeeID: id}).populate('employeeID','employeeID')
    if(!salary || salary.length < 1){
      const employee = await Employee.findOne({userId: id})
      salary = await Salary.find({employeeID: employee._id}).populate('employeeID','employeeID')
    }
        return res.status(200).json({success: true, salary})
  }
    catch (error) {
    return res.status(500).json({success: false, error: "get salary server error"})
  }
}

export {addSalary, getSalary}