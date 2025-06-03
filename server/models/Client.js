import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
    clientID: { type : String, required : true },
    clientName: { type : String, required : true },
    clientServices: { type: String, required : true  },
    clientLocation: { type: String, required : true  },
    clientLocation: { type: String, required : true  },
    clientServiceStartedOn: {type: Date},
    clientDescription: { type : String},
    clientEmployeeCount: { type: Number},
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Client = mongoose.model("Client", clientSchema);
export default Client;