import Client from "../models/Client.js";
import Department from "../models/Department.js";
import Site from "../models/Site.js";

const getClients = async (req, res) => {
  try {
    const clients = await Client.find().populate('clientServices').populate('clientLocation')
    return res.status(200).json({success: true, clients})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get clients server error'})
  }
}

const addClient = async (req, res) => {
  try {
    const { clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServices, clientLocation, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, clientDescription, clientEmployeeCount } = req.body;
    
    const user = await Client.findOne({ clientID });
        if (user) {
          return res
            .status(400)
            .json({ success: false, error: "Client already registered" });
        }


    const newClient = new Client ({
      clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServices, clientLocation, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientDescription, clientEmployeeCount
    })
    await newClient.save()
    return res.status(200).json({success: true, client: newClient})
  } catch (error) {
    return res.status(500).json({success: false, error: "add client server error"})
  }
}

const getClient = async (req, res) => {
  const {id} = req.params;
  try {
    const client = await Client.findById({_id: id}).populate('clientServices').populate('clientLocation')
    return res.status(200).json({success: true, client})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get client server error'})
  }
}

const updateClient = async (req, res) => {
  try {
    const {id} = req.params;
    const {clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServices, clientLocation, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientDescription, clientEmployeeCount} = req.body;
    const updateClient = await Client.findByIdAndUpdate({_id: id},{
      clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServices, clientLocation, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientDescription, clientEmployeeCount
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