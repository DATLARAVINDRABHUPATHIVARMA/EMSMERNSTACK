import Salary from "../models/Salary.js";

const addSalary = async (req, res) => {
    try {}
    catch (error) {
    return res.status(500).json({success: false, error: "add salary server error"})
  }
}

export {addSalary}