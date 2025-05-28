import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    clientName: { type : String, required : true },
    clientDescription: { type : String},
    clientEmployeeCount: { type: Number, required : true },
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Client = mongoose.model("Client", clientSchema);
export default Client;