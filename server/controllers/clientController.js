import Client from "../models/Client.js";

const getClients = async (req, res) => {
  try {
    const clients = await Client.find()
    return res.status(200).json({success: true, clients})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get clients server error'})
  }
}

const addClient = async (req, res) => {
  try {
    const {clientID, clientName, clientServices, clientLocation, clientServiceStartedOn, clientDescription, clientEmployeeCount} = req.body;
    const newClient = new Client ({
      clientID, clientName, clientServices, clientLocation, clientServiceStartedOn, clientDescription, clientEmployeeCount
    })
    await newClient.save()
    return res.status(200).json({success: true, client: newClient})
  } catch (error) {
    return res.status(500).json({success: false, error: "add client server error"})
  }
}

const getClient = async (req, res) => {
  try {
    const {id} = req.params;
    const client = await Client.findById({_id: id})
    return res.status(200).json({success: true, client})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get client server error'})
  }
}

const updateClient = async (req, res) => {
  try {
    const {id} = req.params;
    const {clientID, clientName, clientServices, clientLocation, clientServiceStartedOn, clientDescription, clientEmployeeCount} = req.body;
    const updateClient = await Client.findByIdAndUpdate({_id: id},{
      clientID, clientName, clientServices, clientLocation, clientServiceStartedOn, clientDescription, clientEmployeeCount
    })
    return res.status(200).json({success: true, updateClient})
  } catch (error) {
    return res.status(500).json({success: false, error: 'Update Client server error'})
  } 
}

const deleteClient = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteClient = await Client.findByIdAndDelete({_id: id})
    return res.status(200).json({success: true, deleteClient})
  } catch (error) {
    return res.status(500).json({success: false, error: 'Delete Client server error'})
  }
}

 export {addClient, getClients, getClient, updateClient, deleteClient}