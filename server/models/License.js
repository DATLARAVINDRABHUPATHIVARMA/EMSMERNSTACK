import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const licenseSchema = new mongoose.Schema({
    clientID: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    clientName: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const License = mongoose.model("License", licenseSchema);
export default License;