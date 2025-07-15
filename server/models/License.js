import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const licenseSchema = new Schema({
    clientID: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    clientName: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    licenseNo: { type: String, },
    licenseLocation: { type: String, },
    licenseStartedOn: { type: Date, required: true },
    licenseEndOn: { type: Date, required: true, },
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const License = mongoose.model("License", licenseSchema);
export default License;