import Client from "../models/Client.js"

const getClients = async (req, res) => {
    try {
        const clients = await Client.find()
        return res.status(200).json({success: true, clients})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success: false, error: 'get client server error'})
    }
}

const editClient = async (req, res) => {
    try {
        const {id} = req.params;
        const client = await Client.findById({_id: id})
        return res.status(200).json({success: true, client})
    } catch (error) {
        return res.status(500).json({success: false, error: 'get client server error'})
    }
}

const addClient = async (req, res) => {
    try{
        const {clientName, clientDescription, clientEmployeeCount} = req.body;
        const newClient = new Client ({
            clientName,
            clientDescription,
            clientEmployeeCount
        })
        await newClient.save()
        return res.status(200).json({success: true, client: newClient})
    } catch(error){
        return res.status(500).json({success: false, error: "add client server error"})
    }

}

const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        const {clientName, clientDescription, clientEmployeeCount} = req.body
        const updateCli = await Client.findByIdAndUpdate({_id: id},{
            clientName,
            clientDescription,
            clientEmployeeCount
        })
        return res.status(200).json({success: true, updateCli})
    } catch (error) {
        return res.status(500).json({success: false, error: 'Update client server error'})
    }
}

const deleteClient = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCli = await Client.findByIdAndDelete({_id: id})
        return res.status(200).json({success: true, deleteCli})
    } catch (error) {
        return res.status(500).json({success: false, error: 'Delete client server error'})
    }
}

export {addClient, getClients, editClient, updateClient, deleteClient}