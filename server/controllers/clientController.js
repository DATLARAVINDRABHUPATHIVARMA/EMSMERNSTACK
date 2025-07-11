import Client from "../models/Client.js";
import Department from "../models/Department.js";
import Site from "../models/Site.js";

const stateGstCodes = { "Andaman and Nicobar Islands" : "35", "Andhra Pradesh": "37", "Arunachal Pradesh": "12", "Assam": "18", "Bihar": "10", "Chandigarh": "04", "Chhattisgarh": "22", "Dadra and Nagar Haveli" : "26", "Daman and Diu" : "25", "Delhi": "07", "Goa": "30", "Gujarat": "24", "Haryana": "06", "Himachal Pradesh": "02", "Jammu and Kashmir": "01", "Jharkhand": "20", "Karnataka": "29", "Kerala": "32", "Ladakh" : "38", "Lakshadweep" : "31", "Madhya Pradesh": "23", "Maharashtra": "27", "Manipur": "14", "Meghalaya": "17", "Mizoram": "15", "Nagaland": "13", "Odisha": "21", "Other Territory": "97", "Puducherry" : "34", "Punjab": "03", "Rajasthan": "08", "Sikkim": "11", "Tamil Nadu": "33", "Telangana": "36", "Tripura": "16", "Uttar Pradesh": "09", "Uttarakhand": "05", "West Bengal": "19", "Foreign Country": "96" };

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
    const { clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, landlineNo, faxNo, companyGst, companyPan, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, clientGSTNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, billCountry, clientBillPincode, billPANNo, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, shipCountry, clientShipPincode, shipGSTNo, shipPANNo,  orderNo, PTState, LWFState, PFBranch, ESIBranch, clientType, location, unit, subUnitName, invoice, paySheet, clientDescription, clientEmployeeCount } = req.body;

    if (!clientID || !clientName ) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // const expectedPrefix = stateGstCodes[clientBillState];
    // if (!expectedPrefix) {
    //   return res.status(400).json({ success: false, error: "Invalid Bill state selected." });
    // }

    // if (!clientGSTNo.startsWith(expectedPrefix)) {
    //   return res.status(400).json({
    //     success: false,
    //     error: `GST number must start with ${expectedPrefix} for ${clientBillState}`
    //   });
    // }

    // const expected1Prefix = stateGstCodes[clientShipState];
    // if (!expected1Prefix) {
    //   return res.status(400).json({ success: false, error: "Invalid Ship state selected." });
    // }

    // if (!shipGSTNo.startsWith(expected1Prefix)) {
    //   return res.status(400).json({
    //     success: false,
    //     error: `GST number must start with ${expected1Prefix} for ${clientShipState}`
    //   });
    // }

    const existing = await Client.findOne({ clientID });
    if (existing) {
      return res.status(400).json({ success: false, error: "Client ID already exists." });
    }

    const newClient = new Client ({
       clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, landlineNo, faxNo, companyGst, companyPan, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, clientGSTNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, billPANNo, billCountry: clientBillCountry === "Other" ? billCountry : "", clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, shipGSTNo, shipPANNo, shipCountry: clientShipCountry === "Other" ? shipCountry : "", orderNo, PTState, LWFState, PFBranch, ESIBranch, clientType, location, unit, subUnitName: unit === "Sub Unit" ? subUnitName : "", invoice, paySheet, clientDescription, clientEmployeeCount
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
    const { clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, landlineNo, faxNo, companyGst, companyPan, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, clientGSTNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, billCountry, clientBillPincode, billPANNo, clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, shipCountry, clientShipPincode, shipGSTNo, shipPANNo,  orderNo, PTState, LWFState, PFBranch, ESIBranch, clientType, location, unit, subUnitName, invoice, paySheet, clientDescription, clientEmployeeCount } = req.body;

    const updateClient = await Client.findByIdAndUpdate({_id: id},{
      clientID, clientName, clientContactPerson, clientContact, clientEmail, clientDesignation, landlineNo, faxNo, companyGst, companyPan, clientServiceStartedOn, clientServiceEndOn, clientServices, clientLocation, clientGSTNo, clientBillHNo, clientBillStreet, clientBillVillage, clientBillMandal, clientBillCity, clientBillState, clientBillCountry, clientBillPincode, billPANNo, billCountry: clientBillCountry === "Other" ? billCountry : "", clientShipHNo, clientShipStreet, clientShipVillage, clientShipMandal, clientShipCity, clientShipState, clientShipCountry, clientShipPincode, shipGSTNo, shipPANNo, shipCountry: clientShipCountry === "Other" ? shipCountry : "", orderNo, PTState, LWFState, PFBranch, ESIBranch, clientType, location, unit, subUnitName: unit === "Sub Unit" ? subUnitName : "", invoice, paySheet, clientDescription, clientEmployeeCount
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