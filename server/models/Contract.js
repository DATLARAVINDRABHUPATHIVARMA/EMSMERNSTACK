import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const contractSchema = new mongoose.Schema({
    clientID: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    clientName: { type: Schema.Types.ObjectId, ref: "Client", required: true},
    contractID: { type: String, required: true},
    contractStartedOn: { type: Date, required: true },
    contractEndOn: { type: Date, required: true, },
    BGAmount: { type: String, },
    typeOfWork: { type: String, enum: ["Service", "Job Workers", "Material"] },
    billingDates: { type: String, enum: ["Month Start to Month End", "Starting Manual Date to One Month", "26th to 25th", "21st to 20th", "16th to 15th"] },
    paySheetDates: { type: String, enum: ["Month Start to Month End", "Starting Manual Date to One Month", "26th to 25th", "21st to 20th", "16th to 15th"] },
    validityDate: { type: Date, },
    contractI: { type: String, },
    payment: { type: String, enum: ["Lump Sum", "Man Power"] },
    wagesType: { type: String, enum: ["client", "special", "individual"], professionalTax: { type: Boolean, default: false, },},
    materialCost: { type: String, },
    machineryCost: { type: String, },
    serviceCharge: { type: String, },
    PFLimit: { type: String, basic: { type: Boolean, default: false, }, DA: { type: Boolean, default: false, },  HRA: { type: Boolean, default: false, }, CCA: { type: Boolean, default: false, }, conv: { type: Boolean, default: false, }, WA: { type: Boolean, default: false, }, OA: { type: Boolean, default: false, }, specialAllowance: { type: Boolean, default: false, },  medicalAllowance: { type: Boolean, default: false, }, foodAllowance: { type: Boolean, default: false, }, siteAllowance: { type: Boolean, default: false, }, gunAllowance: { type: Boolean, default: false, }, fireAllowance: { type: Boolean, default: false, },  trlAllowance: { type: Boolean, default: false, }, perAllowance: { type: Boolean, default: false, }, mobAllowance: { type: Boolean, default: false, }, bonus: { type: Boolean, default: false, }, gratuity: { type: Boolean, default: false, }, LA: { type: Boolean, default: false, }, serWetg: { type: Boolean, default: false, }, PLAmount: { type: Boolean, default: false, }, TLAmount: { type: Boolean, default: false, }, RC: { type: Boolean, default: false, }, SC: { type: Boolean, default: false, }, others: { type: Boolean, default: false, }, OTs: { type: Boolean, default: false, }, WOs: { type: Boolean, default: false, }, NHS: { type: Boolean, default: false, }, NHFS: { type: Boolean, default: false, }, },
    ESILimit: { type: String, basic: { type: Boolean, default: false, }, DA: { type: Boolean, default: false, },  HRA: { type: Boolean, default: false, }, CCA: { type: Boolean, default: false, }, conv: { type: Boolean, default: false, }, WA: { type: Boolean, default: false, }, OA: { type: Boolean, default: false, }, specialAllowance: { type: Boolean, default: false, },  medicalAllowance: { type: Boolean, default: false, }, foodAllowance: { type: Boolean, default: false, }, siteAllowance: { type: Boolean, default: false, }, gunAllowance: { type: Boolean, default: false, }, fireAllowance: { type: Boolean, default: false, },  trlAllowance: { type: Boolean, default: false, }, perAllowance: { type: Boolean, default: false, }, mobAllowance: { type: Boolean, default: false, }, bonus: { type: Boolean, default: false, }, gratuity: { type: Boolean, default: false, }, LA: { type: Boolean, default: false, }, serWetg: { type: Boolean, default: false, }, PLAmount: { type: Boolean, default: false, }, TLAmount: { type: Boolean, default: false, }, RC: { type: Boolean, default: false, }, SC: { type: Boolean, default: false, }, others: { type: Boolean, default: false, }, OTs: { type: Boolean, default: false, }, WOs: { type: Boolean, default: false, }, NHS: { type: Boolean, default: false, }, NHFS: { type: Boolean, default: false, }, },
    wagesCalnOn: { type: String, enum: ["Duties", "Duties + WOs + NHs + L Days"], },
    OT: { type: String, enum: ["100%", "200%"], },
    PTOn: { type: String, enum: ["Total Earnings", "Gross-Bonus"], },
    indNDays: { type: String, enum: ["GEN", "G-S", "G-4", "Per Hour", "Per Day", "Per Hour / Per Day", "P.M / 8", "G-S / 8", "26 Days / 8 Hours", "22", "23", "24", "25", "26", "27", "30", "31"], },
    indNOTs: { type: String, enum: ["GEN", "G-S", "G-4", "Per Hour", "Per Day", "Per Hour / Per Day", "P.M / 8", "G-S / 8", "26 Days / 8 Hours", "22", "23", "24", "25", "26", "27", "30", "31"], noUniform: { type: Boolean, default: false, }, noAdvSal: { type: Boolean, default: false, },  noLWF: { type: Boolean, default: false, }, noRegFee: { type: Boolean, default: false, }, },
    createdAt:  {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now},
})

const Contract = mongoose.model("Contract", contractSchema);
export default Contract;