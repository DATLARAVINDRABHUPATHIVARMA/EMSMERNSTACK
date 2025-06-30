import mongoose from 'mongoose';
import { Schema } from "mongoose";

const siteSchema = new Schema({
    siteName: { type : String, required : true },
    siteClients: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    siteAddress: { type: String, required : true },
    siteDescription: { type : String },
    siteEmployeeCount: { type: Number },
    createdAt:  { type: Date, default: Date.now },
    updatedAt:  { type: Date, default: Date.now },
})

const Site = mongoose.model("Site", siteSchema);
export default Site;