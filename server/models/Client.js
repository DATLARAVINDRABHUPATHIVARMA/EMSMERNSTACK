import mongoose from 'mongoose';
import { Schema } from "mongoose";

const clientSchema = new mongoose.Schema({
    clientID: { type : String, required : true },
    clientName: { type : String, required : true },
    clientServices: {  type: Schema.Types.ObjectId, ref: "Department", required: true  },
    clientLocation: {  type: Schema.Types.ObjectId, ref: "Site", required: true  },
    clientServiceStartedOn: {type: Date},
    clientDescription: { type : String},
    clientEmployeeCount: { type: Number},
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Client = mongoose.model("Client", clientSchema);
export default Client;