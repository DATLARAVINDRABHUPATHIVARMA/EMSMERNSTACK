import Client from "../models/Client.js";
import Department from "../models/Department.js";
import Site from "../models/Site.js";

const stateGstCodes = {
  "Andhra Pradesh": "37", "Arunachal Pradesh": "12", "Assam": "18", "Bihar": "10",
  "Chhattisgarh": "22", "Delhi": "07", "Goa": "30", "Gujarat": "24", "Haryana": "06",
  "Himachal Pradesh": "02", "Jammu and Kashmir": "01", "Jharkhand": "20", "Karnataka": "29",
  "Kerala": "32", "Madhya Pradesh": "23", "Maharashtra": "27", "Manipur": "14", "Meghalaya": "17",
  "Mizoram": "15", "Nagaland": "13", "Odisha": "21", "Punjab": "03", "Rajasthan": "08", "Sikkim": "11",
  "Tamil Nadu": "33", "Telangana": "36", "Tripura": "16", "Uttar Pradesh": "09", "Uttarakhand": "05",
  "West Bengal": "19", "Puducherry": "34", "Other Territory": "97"
};

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
    const { clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, state, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, clientDescription, clientEmployeeCount } = req.body;

    if (!clientID || !clientName || !state || !clientGSTNo) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const expectedPrefix = stateGstCodes[state];
    if (!expectedPrefix) {
      return res.status(400).json({ success: false, error: "Invalid state selected." });
    }

    if (!clientGSTNo.startsWith(expectedPrefix)) {
      return res.status(400).json({
        success: false,
        error: `GST number must start with ${expectedPrefix} for ${state}`
      });
    }


    const existing = await Client.findOne({ clientID });
    if (existing) {
      return res.status(400).json({ success: false, error: "Client ID already exists." });
    }

    const newClient = new Client ({
      clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, state, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, clientDescription, clientEmployeeCount
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
    const {clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, state, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, clientDescription, clientEmployeeCount} = req.body;
    const updateClient = await Client.findByIdAndUpdate({_id: id},{
      clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, state, clientGSTNo, clientPANNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, clientDescription, clientEmployeeCount
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