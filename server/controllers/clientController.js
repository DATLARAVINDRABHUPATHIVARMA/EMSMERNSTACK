import Client from "../models/Client.js"

const getClients = async (req, res) => {
    try {
        const clients = await Client.find()
        return res.status(200).json({success: true, clients})
    } catch (error) {
        return res.status(500).json({success: false, error: 'get client server error'})
    }
}

const editClient = async (req, res) => {
    try {
        const {id} = req.params;
        const department = await Department.findById({_id: id})
        return res.status(200).json({success: true, department})
    } catch (error) {
        return res.status(500).json({success: false, error: 'get department server error'})
    }
}

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

const updateDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const {departmentName, description, employeeCount} = req.body
        const updateDep = await Department.findByIdAndUpdate({_id: id},{
            departmentName,
            description,
            employeeCount
        })
        return res.status(200).json({success: true, updateDep})
    } catch (error) {
        return res.status(500).json({success: false, error: 'Update department server error'})
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteDep = await Department.findByIdAndDelete({_id: id})
        return res.status(200).json({success: true, deleteDep})
    } catch (error) {
        return res.status(500).json({success: false, error: 'Delete department server error'})
    }
}

export {addDepartment, getDepartments, editDepartment, updateDepartment, deleteDepartment}