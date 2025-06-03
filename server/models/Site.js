import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema({
    siteName: { type : String, required : true },
    siteAddress: { type: String, required : true  },
    siteDescription: { type : String},
    siteEmployeeCount: { type: Number},
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Site = mongoose.model("Site", siteSchema);
export default Site;