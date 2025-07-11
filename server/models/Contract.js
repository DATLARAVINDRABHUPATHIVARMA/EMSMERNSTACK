import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const contractSchema = new mongoose.Schema({
    clientID: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    clientName: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    contractID: { type: String, required: true},
    
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Contract = mongoose.model("Contract", contractSchema);
export default Contract;