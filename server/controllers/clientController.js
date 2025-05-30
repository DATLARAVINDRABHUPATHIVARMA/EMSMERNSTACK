import Client from "../models/Client.js";

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

 export {addClient}