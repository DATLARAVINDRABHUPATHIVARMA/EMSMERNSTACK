import License from "../models/License.js"

const addLicense = async (req, res) => {
    try {
            const { clientID, clientName, licenseNo, licenseLocation, licenseStartedOn, licenseEndOn } = req.body;
    
            const newLicense = new License ({ clientID, clientName, licenseNo, licenseLocation, licenseStartedOn, licenseEndOn });
            await newLicense.save()
            return res.status(200).json({success: true, license: newLicense})
        } catch (error) {
            return res.status(500).json({success: false, error: "add license server error"})
        }
}

export { addLicense }