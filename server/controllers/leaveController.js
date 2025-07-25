import Employee from "../models/Employee.js";
import Leave from "../models/Leave.js";

const addLeave = async (req, res) => {
  try {
    const { userId, leaveType, startDate, endDate, reason } = req.body;
    const employee = await Employee.findOne({userId})

    const newLeave = new Leave ({ employeeID: employee._id, leaveType, startDate, endDate, reason });
    await newLeave.save()
    return res.status(200).json({success: true, newLeave})
  } catch (error) {
    return res.status(500).json({success: false, error:"Add Leave Server Error"})
  }
}

export {addLeave}