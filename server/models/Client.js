import mongoose from 'mongoose';
import { Schema } from "mongoose";

const clientSchema = new Schema({
    clientID: { type : String, required : true },
    clientName: { type : String, required : true },
    clientContactPerson: { type : String, required : true },
    clientContact: { type : String, required : true },
    clientEmail: { type : String, required : true },
    clientDesignation: { type : String, required : true },
    clientServiceStartedOn: { type: Date },
    clientServices: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    clientLocation: { type: Schema.Types.ObjectId, ref: "Site", required: true },
    clientGSTNo: { type: String, },
    clientPANNo: { type: String, },
    clientHNo: { type: String, },
    clientStreet: { type: String, },
    clientVillage: { type: String, },
    clientMandal: { type: String, },
    clientCity: { type: String, },
    clientState: { type: String, },
    clientCountry: { type: String, },
    clientPincode: { type: String, },
    clientDescription: { type : String },
    clientEmployeeCount: { type: Number },
    createdAt:  { type: Date, default: Date.now },
    updatedAt:  { type: Date, default: Date.now },
})

const Client = mongoose.model("Client", clientSchema);
export default Client;