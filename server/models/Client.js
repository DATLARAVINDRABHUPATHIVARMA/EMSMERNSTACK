import mongoose from 'mongoose';
import { Schema } from "mongoose";

const clientSchema = new Schema({
    clientID: { type : String, required : true, unique: true},
    clientName: { type : String, required : true },
    clientContactPerson: { type : String, },
    clientContact: { type : String, },
    clientEmail: { type : String, },
    clientDesignation: { type : String, },
    clientServiceStartedOn: { type: Date },
    clientServiceEndOn: { type: Date },
    clientServices: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    clientLocation: { type: Schema.Types.ObjectId, ref: "Site", required: true },
    state: { type: String, },
    clientGSTNo: { type: String, },
    clientPANNo: { type: String, },
    clientBillHNo: { type: String, },
    clientBillStreet: { type: String, },
    clientBillVillage: { type: String, },
    clientBillMandal: { type: String, },
    clientBillCity: { type: String, },
    clientBillState: { type: String, },
    clientBillCountry: { type: String, },
    clientBillPincode: { type: String, },
    clientShipHNo: { type: String, },
    clientShipStreet: { type: String, },
    clientShipVillage: { type: String, },
    clientShipMandal: { type: String, },
    clientShipCity: { type: String, },
    clientShipState: { type: String, },
    clientShipCountry: { type: String, },
    clientShipPincode: { type: String, },
    clientDescription: { type : String },
    clientEmployeeCount: { type: Number },
    createdAt:  { type: Date, default: Date.now },
    updatedAt:  { type: Date, default: Date.now },
})

const Client = mongoose.model("Client", clientSchema);
export default Client;