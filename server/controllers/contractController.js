import Contract from "../models/Contract.js"

const addContract = async (req, res) => {
    try {
        const { clientID, clientName, contractID, contractStartedOn, contractEndOn, BGAmount, typeOfWork, billingDates, paySheetDates, validityDate, contractI, payment, wagesType, materialCost, machineryCost, serviceCharge, PFLimit, ESILimit, wagesCalnOn, OT, PTOn, indNDays, indNOTs } = req.body;

        const newContract = new Contract ({ clientID, clientName, contractID, contractStartedOn, contractEndOn, BGAmount, typeOfWork, billingDates, paySheetDates, validityDate, contractI, payment, wagesType, materialCost, machineryCost, serviceCharge, PFLimit, ESILimit, wagesCalnOn, OT, PTOn, indNDays, indNOTs });
        await newContract.save()
        return res.status(200).json({success: true, contract: newContract})
    } catch (error) {
        return res.status(500).json({success: false, error: "add contract server error"})
    }
}


export { addContract }