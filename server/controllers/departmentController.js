import Department from "../models/Department.js"

const addDepartment = async (req, res) => {
    try{
        const {departmentName, description, employeeCount} = req.body;
        const newDepartment = new Department ({
            departmentName,
            description,
            employeeCount
        })
        await newDepartment.save()
        return res.status(200).json({success: true, department: newDepartment})
    } catch(error){
        return res.status(500).json({success: false, error: "add department server error"})
    }

}

export {addDepartment}